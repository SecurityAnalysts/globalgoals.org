const html = require('choo/html');
const { __ } = require('../../locale');
const intro = require('../intro');

module.exports = function view(error) {
  return html`
    <main class="View-main">
      <div class="View-section">
        ${ intro({title: __('Something went wrong'), body: html`<p>${ error.message }</p>`, other: html`<pre>${ unescape(error.stack) }</pre>`}) }
      </div>
    </main>
  `;
};
