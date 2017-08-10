const dedent = require('dedent');

module.exports = app => async function render(ctx, next) {
  // TODO: Guess language from header/path/subdomain whatevs
  ctx.state.lang = 'en';

  /**
   * Expose a render function on context object
   */

  ctx.render = function render(href) {
    if (ctx.accepts('html')) {
      // Render href to string
      const html = app.toString(href, ctx.state);

      // Snatch up changes that were made to state in the process of rendering
      Object.assign(ctx.state, app.state);

      return html;
    }

    return null;
  };

  /**
   * Let all other middleware have a go at the request before acting on it
   */

  await next();

  if (ctx.accepts('html')) {

    /**
     * Wrap up HTML response in a document
     */

    ctx.type = 'text/html';
    ctx.body = dedent`
      <!doctype html>
      <html lang="${ ctx.state.lang }">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>${ ctx.state.title }</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="manifest" href="site.webmanifest">
        <link rel="apple-touch-icon" href="icon.png">
        <link rel="mask-icon" href="icon.svg" color="#333">
        <link rel="stylesheet" href="/index.css" />
        ${ process.env.NODE_ENV !== 'development' ? dedent`
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
        ` : '' }
        <script type="application/json" class="js-initialState">${ JSON.stringify(ctx.state) }</script>
        <script src="/index.js" async></script>
      </head>
      ${ ctx.body.toString() }
      </html>
    `;
  } else if (ctx.accepts('json')) {

    /**
     * Send the raw state, whateever that may be
     */

    ctx.type = 'application/json';
    ctx.body = JSON.stringify(ctx.state);
  } else {

    /**
     * We only support HTML and JSON
     */

    ctx.status = 406;
  }
};