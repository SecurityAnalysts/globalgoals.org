const html = require('choo/html');
const raw = require('choo/html/raw');
const asElement = require('prismic-element');
const { asText } = require('prismic-richtext');
const twitter = require('../twitter');
const instagram = require('../instagram');
const card = require('../card');
const quicklink = require('./quicklink');
const { className } = require('../base/utils');
const { href } = require('../../params');
const { __ } = require('../../locale');

/**
 * Map slice(s) to elements, layed out in a very smart grid
 * @param {object} state
 * @param {function} emit
 * @param {array} [items=null]
 */

module.exports = function slices(state, emit, items = null) {

  /**
   * Return iterator if no items were supplied
   */

  if (!items) { return props => element(props, 1); }

  /**
   * Group griddable slices in rows
   */

  if (Array.isArray(items)) {
    let row = [];
    const rows = [];

    for (const slice of items) {
      switch (slice.slice_type) {
        case 'link':
        case 'twitter':
        case 'instagram': {
          row.push(slice);
          break;
        }
        default: {
          // Close on ungriddable slice
          rows.push(close(row));
          row = [];
          rows.push(element(slice));
          break;
        }
      }
    }

    // Add trailing row
    rows.push(close(row));

    // Filter out empty rows
    return rows.filter(Boolean);
  }

  /**
   * We can't do anything about unrecognized arguments
   */

  throw new Error('Unrecognized argument');

  /**
   * Map row of slices to grid cell elements
   *
   * @param {array} slices
   * @returns {Element}
   */

  function close(slices) {
    const length = slices.length;

    if (!length) { return null; }

    let row = [];
    const rows = [];

    // Reverse order and put the last cells in the smallest containers
    for (const slice of slices.slice().reverse()) {
      if (row.length === 3) {
        // Close row at three cells and open up a new row
        rows.push(row.reverse());
        row = [];
      }
      row.push(slice);
    }

    // Add on trailing row
    rows.push(row.reverse());

    return html`
      <div class="Grid">
        ${ rows.reverse().reduce((cells, row) => cells.concat(row.map((slice, index) => {
          const classes = className('Grid-cell', {
            'Grid-cell--md1of2': row.length === 2 || row.length === 3 && index > 0,
            'Grid-cell--lg1of3': row.length === 3
          });

          return html`
            <div class="${ classes }">
              ${ element(slice, row.length) }
            </div>
          `;
        })), []) }
      </div>
    `;
  }

  /**
   * Map slice object to Element
   *
   * @param {object} slice
   * @param {number} cols
   * @returns {Element}
   */

  function element(slice, cols) {
    switch (slice.slice_type) {

      /**
       * Quicklink
       */

      case 'quicklink': return quicklink({
        title: asText(slice.primary.title),
        body: asElement(slice.primary.body, doc => href(state, doc))
      });

      /**
       * Video embed (raw HTML inject)
       */

      case 'embed': {
        const embed = slice.primary.content.find(block => {
          return block.type === 'embed';
        });

        return html`
          <div class="Text Text--full">
            <div class="Text-embed">
              ${ raw(embed.oembed.html) }
            </div>
          </div>
        `;
      }

      /**
       * Twitter feed
       */

      case 'twitter': {
        const props = {
          emit,
          user: process.env.TWITTER_USERNAME,
          hashtag: slice.primary.hashtag
        };

        let tweets;
        if (props.hashtag) {
          tweets = state.twitter.items[props.hashtag];
        } else {
          tweets = state.twitter.items[props.user];
        }

        return twitter(tweets, cols, emit, props);
      }

      /**
       * Instagram feed
       */

      case 'instagram': {
        const props = {
          emit,
          user: process.env.INSTAGRAM_USERNAME,
          hashtag: slice.primary.hashtag
        };

        let photos;
        if (props.hashtag) {
          photos = state.instagram.items[props.hashtag];
        } else {
          photos = state.instagram.items[props.user];
        }

        return instagram(photos, cols, emit, props);
      }

      /**
       * Generic link
       */

      case 'link': {
        const options = { sizes: ['small', 'medium', 'large'] };

        if (cols === 1) {
          options.sizes = ['small', 'medium', 'large'];
          options.horizontal = true;
        }

        if (cols <= 2) {
          options.sizes = ['small', 'medium'];
          options.largeText = true;
        }

        if (slice.primary.color) {
          options.fill = slice.primary.color;
        }

        /**
         * Determine card content by link type
         */

        switch (slice.primary.link.link_type) {

          /**
           * Internal documents receieve special treatment
           */

          case 'Document': {
            switch (slice.primary.link.type) {
              case 'activity': {
                const doc = state.activities.items.find(item => {
                  return item.id === slice.primary.link.id;
                });

                if (!doc) {
                  // Fetch missing content and render loading card
                  emit('activities:fetch', slice.primary.link.uid);
                  return card.loading();
                }

                options.fill = true;

                return card(state, emit, activity(doc, slice.primary), options);
              }
              case 'news': {
                const doc = state.articles.items.find(item => {
                  return item.id === slice.primary.link.id;
                });

                if (!doc) {
                  // Fetch missing content and render loading card
                  emit('articles:fetch', slice.primary.link.uid);
                  return card.loading();
                }

                return card(state, emit, news(doc, slice.primary), options);
              }

              /**
               * Default to null for unrecognized Document types
               */

              default: return null;
            }
          }

          /**
           * Web link (external)
           */

          case 'Web': return card(state, emit, {
            title: slice.primary.title,
            image: slice.primary.image,
            body: slice.primary.body,
            href: slice.primary.link.url,
            link: slice.primary.link_text
          }, Object.assign({ fill: true }, options));

          /**
           * Media item (external)
           */

          case 'Media': return card(state, emit, {
            title: slice.primary.title,
            image: slice.primary.image,
            body: slice.primary.body,
            href: slice.primary.link.url,
            link: slice.primary.link_text || __('Download')
          }, Object.assign({ fill: true }, options));

          /**
           * Default to null for unrecognized link types
           */

          default: return null;
        }
      }

      /**
       * Section header
       */

      case 'section_header': return html`
        <div class="Space Space--contain Space--startTall">
          <div class="Text Text--growing">
            <h1 class="Text-h2">${ asText(slice.primary.title) }</h1>
            <p>${ asElement(slice.primary.introduction, doc => href(state, doc)) }</p>
          </div>
        </div>
      `;
      default: return slice;
    }
  }

  /**
   * Format news document as card props
   *
   * @param {object} doc
   * @param {object} props
   * @returns {object}
   */

  function news(doc, props) {
    return Object.assign({
      title: doc.data.title,
      image: doc.data.image,
      body: doc.data.introduction || doc.data.body,
      tags: doc.tags,
      date: doc.data.original_publication_date || doc.first_publication_date,
      href: href(state, doc),
      link: __('Read the full article')
    }, defaults(props));
  }

  /**
   * Format activity document as card props
   *
   * @param {object} doc
   * @param {object} props
   * @returns {object}
   */

  function activity(doc, props) {
    return Object.assign({
      title: doc.data.title,
      image: doc.data.image,
      body: doc.data.introduction || doc.data.body,
      tags: doc.tags,
      href: href(state, doc),
      link: __('View campaign')
    }, defaults(props));
  }

  /**
   * Extract relevant (non-empty) values from link properties
   *
   * @param {object} props
   * @returns {object}
   */

  function defaults(props) {
    const result = {};

    if (props.title.length && props.title[0].text) {
      result.title = props.title;
    }

    if (props.image.src) {
      result.image = props.image;
    }

    if (props.body.length && props.body.find(block => block.text)) {
      result.body = props.body;
    }

    if (props.link_text) {
      result.link = props.link_text;
    }

    return result;
  }
};