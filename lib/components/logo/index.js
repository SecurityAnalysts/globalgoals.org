const html = require('choo/html')

function symbolPart () {
  return html`
    <svg class="Logo-symbol" viewBox="0 0 302 302" width="302" height="302">
      <g fill="none" fill-rule="evenodd">
        <g class="u-color1"><path fill="currentColor" d="M156.7 66c7.3.6 14.3 2 21 4.2l23.7-61.4c-14-5-29-8-44.7-8.5V66" /></g>
        <g class="u-color2"><path fill="currentColor" d="M186.6 73.6c6.7 3 13 7 18.6 11.7l44.4-48.5c-11.7-10-25-18.4-39.4-24.6l-23.6 61.4" /></g>
        <g class="u-color3"><path fill="currentColor" d="M225.2 109l59-29.3c-7.4-13.5-16.7-25.8-27.6-36.5L212 91.7c5.2 5.2 9.6 11 13.2 17.4" /></g>
        <g class="u-color4"><path fill="currentColor" d="M288.3 88.2l-59 29.4c3 6.6 5 13.5 6 20.8l65.5-6.2c-2-15.5-6.2-30.3-12.5-44" /></g>
        <g class="u-color5"><path fill="currentColor" d="M236.3 151c0 6-.7 12.2-2 18l63.3 18.2c3-11.6 4.4-23.8 4.4-36.3 0-3.2 0-6.3-.3-9.3l-65.5 6.2v3" /></g>
        <g class="u-color6"><path fill="currentColor" d="M231.8 178.2c-2.3 6.7-5.4 13-9.2 19l52.5 39.5c8.7-12.2 15.4-25.8 20-40.4l-63.2-18" /></g>
        <g class="u-color7"><path fill="currentColor" d="M217 204.8c-4.7 5.7-10 10.7-16 15l34.6 56c12.8-8.7 24.3-19.3 34-31.4L217 204.8" /></g>
        <g class="u-color8"><path fill="currentColor" d="M227.5 281L193 225c-6.3 3.5-13 6.3-20.2 8l12.2 65c15.2-3.6 29.5-9.4 42.5-17" /></g>
        <g class="u-color9"><path fill="currentColor" d="M163.5 235c-4 .6-8 1-12.2 1-3.4 0-6.7-.3-10-.7l-12 64.7c7 1 14.5 1.7 22 1.7 8.3 0 16.4-.7 24.4-2L163.5 235" /></g>
        <g class="u-color10"><path fill="currentColor" d="M132 233.7c-7.4-1.7-14.4-4.4-21-8l-34.5 56c13.3 7.7 28 13.4 43.3 16.7l12.2-64.7" /></g>
        <g class="u-color11"><path fill="currentColor" d="M86.6 206l-52.4 39.8c9.8 12 21.3 22.5 34.2 31l34.6-56c-6-4-11.6-9-16.4-14.8" /></g>
        <g class="u-color12"><path fill="currentColor" d="M80.8 198.5c-4-6.2-7.5-13-10-20l-63.2 18c4.8 15 12 29.2 21 41.8l52.2-39.8" /></g>
        <g class="u-color13"><path fill="currentColor" d="M66.3 151v-4L1 141c-.2 3.3-.3 6.6-.3 10 0 12.5 1.6 24.7 4.5 36.4l63.3-18.2c-1.3-6-2-12-2-18.3" /></g>
        <g class="u-color14"><path fill="currentColor" d="M67.3 137.5c1.2-7.4 3.3-14.5 6.3-21L14.6 87C8.3 101 4 116 2 131.7l65.5 6" /></g>
        <g class="u-color15"><path fill="currentColor" d="M78 108c3.7-6.4 8.3-12.3 13.5-17.4L47.2 42C36 52.6 26.5 65 19 78.6L78 108" /></g>
        <g class="u-color16"><path fill="currentColor" d="M98.6 84.3c5.6-4.4 11.7-8 18.2-11L93 11.8c-14 5.8-27.2 14-38.7 23.6l44.3 48.7" /></g>
        <g class="u-color17"><path fill="currentColor" d="M125.7 70c6.8-2.3 14-3.6 21.5-4V.2c-15.8.5-31 3.3-45.3 8.3L125.6 70" /></g>
      </g>
    </svg>
  `
}

function textPart () {
  return html`
  <svg class="Logo-text" viewBox="0 0 452 109" width="452" height="109">
    <path fill="currentColor" fill-rule="evenodd" d="M20.7 86.8H9v13H6.5V72.6H22v2.3H9v9.7h11.8v2.3m12-3.3c-4.8 0-5 3-5 7.2s.2 7.3 5 7.3 5-3 5-7.3c0-4-.2-7.2-5-7.2zm0 16.7c-6.2 0-7.7-4-7.7-9.5s1.6-9.5 7.8-9.5c6.3 0 7.7 4 7.7 9.5 0 5.6-1.4 9.5-7.7 9.5zm22-16.4c-.5-.2-1.2-.3-2-.3-2.6 0-4 .4-5.4 1.2V100h-2.6V81.5h1.5l.5 1.6c1.7-1.3 4-2 6-2 .7 0 1.4 0 2 .3v2.3m11.6-4c0 4 2.3 4.3 6.6 4.8 5.3.7 8.7 2 8.7 7.4 0 3.7-2 8.3-10 8.3-2.7 0-6-.7-7.8-1.5v-2.4c1.6.6 3.8 1.5 7.6 1.5 5.7 0 7.4-2.7 7.4-6 0-4-1.6-4.7-6.2-5.3-6.4-.8-9-2.3-9-7 0-3 1.6-7.6 9.3-7.6 3.5 0 5.7.7 7.2 1.4V76c-2.5-1.2-4.4-1.6-7-1.6-5.5 0-6.8 2.5-6.8 5.4m22 15c0 2.5 1.4 3.2 3.6 3.2 2.4 0 3.6-.4 5-1.2v-15h2.5v18H98l-.5-1.4c-1.7 1.2-3.6 2-5.5 2-4.3 0-6.2-2-6.2-5.6V81.6h2.6V95m22-5.6c5 .5 6.4 2.2 6.4 5.2 0 2.8-1.8 5.7-7.4 5.7-1.7 0-4.2-.5-5.4-1V97c1 .5 3 1 5.5 1 3.8 0 4.8-1.6 4.8-3.3 0-1.7-.5-3-4-3.2-5.4-.5-6.5-2.3-6.5-4.8 0-2.6 1.7-5.4 6.8-5.4 1.7 0 3.6.2 5.2 1v2c-1.4-.4-2.8-.8-5.3-.8-3.6 0-4.3 1.4-4.3 3.2 0 1.6.6 2.4 4 2.7m20.3 10.7c-.4.2-1.2.3-1.6.3-3.2 0-6-1.4-6-5V83.6h-3.6v-1l3.6-1v-5l2.6-.8v5.8h5.6v2h-5.6V95c0 2.2 1.2 3 3.5 3h1.5v2m10-9.4c-2.6.3-3.7 1.6-3.7 3.8 0 1.6.4 3.6 3.8 3.6 2 0 3.3-.6 5-1.5v-6.3l-5 .4zm.6-7c-2.3 0-4 .4-5.3 1v-2.3c1.6-.7 3.7-1 5.4-1 5.6 0 7 2.4 7 6V100h-1.4l-.5-1.6c-1.6 1.2-3.6 1.8-5.4 1.8-4.8 0-6.4-2.8-6.4-5.8s1.7-5.4 6.5-5.7l4.8-.3v-1c0-2.7-1-4-4.3-4zM153.5 96V81.6h2.4v15c0 1.2.4 1.6 1.6 1.6v2c-2.6 0-4-1-4-4zm1.2-22c1 0 1.8 1 1.8 2s-.8 1.8-1.8 1.8-1.8-.8-1.8-2c0-1 .8-1.7 1.8-1.7zm18 12.4c0-2.3-1.3-3-3.6-3-2.4 0-3.6.3-5 1V100h-2.5V81.5h1.4l.5 1.6c1.7-1.3 3.5-2 5.5-2 4.3 0 6.2 2 6.2 5.5V100h-2.6V86.5m13 4c-2.7.3-3.8 1.6-3.8 3.8 0 1.6.4 3.6 4 3.6 1.8 0 3-.6 4.7-1.5v-6.3l-5 .4zm.6-7c-2.5 0-4 .4-5.5.8v-2.2c1.6-.7 3.7-1 5.5-1 5.4 0 7 2.6 7 6.2V100h-1.6l-.5-1.6c-1.6 1.2-3.6 2-5.4 2-4.8 0-6.4-3-6.4-6s1.7-5.4 6.5-5.7l4.8-.3v-1c0-2.7-1-4-4.4-4zm14.2 1V97c1.4.8 2.7 1.2 5 1.2 4.4 0 5-3.6 5-7.2 0-3.7-.6-7.3-5-7.3-2.3 0-3.6.4-5 1.2zM213 91c0 5.2-1.6 9.5-7.5 9.5-2 0-3.8-.7-5.7-2l-.6 1.6h-1.4V72.4h2.6v10.3c1.5-1 3.4-1.5 5-1.5 6 0 7.5 4.2 7.5 9.5zm5 5.4V72.5h2.4v24c0 1.3.4 1.7 1.5 1.7v2c-2.7 0-4-1-4-4m10.3-6.3h9.5c0-3.4-.2-6.4-4.4-6.4-4.3 0-5 3-5 6.3zm5-8.7c6.3 0 7 4.2 7 9.5v1h-12c0 3.3 1 6.2 5 6.2 2.7 0 4.3-.3 6-1v2.2c-2 1-4 1-6 1-6 0-7.6-4.2-7.6-9.4s1.5-9.5 7.7-9.5zm20.4 16.3h5c6.7 0 9-4.8 9-11.4 0-6.6-2.3-11.4-9-11.4h-5v22.8zm-2.4 2.3V72.4h7.4c9 0 11.5 6 11.5 13.7 0 7.8-2.6 13.7-11.5 13.7h-7.5zM277 90h9.5c0-3.4-.2-6.4-4.4-6.4s-5 3-5 6.3zm5-8.7c6.3 0 7 4.2 7 9.5v1h-12c0 3.3 1 6.2 5 6.2 2.7 0 4.3-.3 6-1v2.2c-2 1-4 1-6 1-6 0-7.6-4.2-7.6-9.4s1.5-9.5 7.7-9.5zm12.2.3l5.2 15 5.2-15h2.8l-7 18.6h-2l-7-18.6h2.8m17.8 8.2h9.5c0-3.2-.2-6.3-4.4-6.3s-5 3-5 6.3zm5-8.5c6.3 0 7 4.2 7 9.5v1h-12c0 3.3 1 6.2 5 6.2 2.7 0 4.3-.3 6-1v2.2c-2 1-4 1-6 1-6 0-7.6-4.2-7.6-9.4s1.5-9.5 7.7-9.5zm12 15V72.4h2.5v24c0 1.3.4 1.7 1.5 1.7v2c-2.6 0-4-1-4-4m15.5-12.7c-5 0-5 3-5 7.3 0 4 0 7.2 5 7.2 4.7 0 5-3 5-7.2s-.3-7.3-5-7.3zm0 16.7c-6.3 0-7.7-4-7.7-9.4s1.4-9.5 7.6-9.5c6.3 0 7.7 4 7.7 9.5 0 5.6-1.3 9.5-7.6 9.5zm24.6-9.4c0-3.7-.5-7.3-5-7.3-2.2 0-3.5.4-5 1.2v12c1.5 1 2.8 1.3 5 1.3 4.5 0 5-3.6 5-7.2zm-10 8V109h-2.5V81.6h1.4l.4 1.5c2-1 3.8-1.7 5.7-1.7 6 0 7.6 4.2 7.6 9.5 0 5.2-1.6 9.4-7.5 9.4-1.5 0-3.4-.4-5-1.5zm38.6-12.2c0-2.3-1.5-3-3.5-3-2.2 0-3.4.4-5 1 .3.7.4 1.3.4 2V100h-2.6V86.5c0-2.3-1.4-3-3.5-3-2 0-3.3.3-4.7 1V100H376V81.5h1.4l.6 1.5c1.7-1 3.6-1.7 5.3-1.7 2.5 0 4.2.7 5 2 2-1.3 4-2 5.8-2 4 0 6 1.8 6 5.4V100h-2.4V86.5m9.2 3.2h9.6c0-3.2-.2-6.3-4.4-6.3-4.3 0-5 3-5 6.3zm5.2-8.5c6.2 0 7 4.2 7 9.5v1h-12.2c.2 3.3 1 6.2 5 6.2 2.8 0 4.4-.3 6.2-1v2.2c-2 1-4.3 1-6 1-6.2 0-7.7-4.2-7.7-9.4s1.5-9.5 7.7-9.5zm22.4 5.3c0-2.3-1.4-3-3.7-3-2.3 0-3.5.3-5 1V100h-2.4V81.5h1.4l.6 1.6c1.7-1.3 3.5-2 5.5-2 4.3 0 6.2 2 6.2 5.5V100h-2.6V86.5M451 100c-.4.2-1.2.2-1.6.2-3 0-6-1.4-6-5V83.7H440v-1l3.5-1v-5l2.6-.8v5.8h5.7v2H446V95c0 2.2 1.3 3 3.6 3h1.4v2m-27.5-53v-7.8h9.2v8c0 3.4 1.5 5.3 5 5.3 3 0 4.4-2 4.4-5.2V45c0-3.3-1.3-5.4-4.3-8.3L432 31c-5.8-5.7-8.4-9-8.4-15.8v-2c0-7.3 4.3-13 14-13 10 0 13.8 5 13.8 13.4v4.8h-9v-5.2c0-3.4-1.7-5-4.8-5-2.8 0-4.7 1.5-4.7 4.8v1.2c0 3.4 1.7 5.3 4.6 8l6.4 6.3c5.4 5.5 8 8.8 8 15.3v3c0 8-4.4 13.7-14.5 13.7-10 0-14-5.6-14-13.4M399 1h10v50.8h11.8v8H399V.8m-24.4 40.3h8l-4-23.5-4 23.6zM362 60l11.2-59h11.4l11.2 59h-10.2L383.8 49h-10.5L371.5 60H362zm-11.7-13.6V14.5c0-3.5-1.6-6-5.2-6-3.4 0-5 2.5-5 6v31.7c0 3.5 1.6 6 5 6 3.7 0 5.3-2.5 5.3-6M330 44.6V16c0-9 4.7-15.8 15-15.8 10.7 0 15.2 6.7 15.2 16v28.4c0 9.2-4.5 16-15 16s-15-6.8-15-16m-19-16.2h14.2v31.4h-7.2v-6.4c-1.3 4.4-4 7-9.5 7-8.5 0-12.4-6.6-12.4-15.8V16c0-9 4.4-15.8 15-15.8 10.8 0 14 6 14 14.8v5.2h-9v-6c0-3.7-1.4-5.7-5-5.7s-5 2.5-5 6v31.7c0 3.5 1.4 6 4.8 6 3.3 0 5-1.7 5-5.6V36.2h-4.7v-7.8M262.6 1h10v50.8h11.8v8h-21.8V.8M238 41.2h8l-4-23.5-4 23.6zM225.8 60l11-59h11.4l11.4 59h-10.2l-2-10.7H237L235 60h-9.3zm-21.3-26.5v18.5h4.4c3.3 0 5-1.7 5-4.8v-9c0-3-1.6-4.7-5-4.7h-4.4zm0-7.5h3.5c3 0 4.6-1.7 4.6-4.8v-7.2c0-3.3-1.5-4.8-4.8-4.8h-3.4v16.8zm-10-25H209c9.8 0 13 4.7 13 13v6c0 5-1.7 8-5.8 9.4 5 1.2 7.4 4.5 7.4 10v7.7c0 8.2-3.8 12.8-13.7 12.8h-15.5V.8zM180 46.3V14.5c0-3.5-1.6-6-5.2-6-3.4 0-5 2.5-5 6v31.7c0 3.5 1.6 6 5 6 3.6 0 5.2-2.5 5.2-6m-20.2-1.6V16c0-9 4.6-15.8 15-15.8 10.5 0 15 6.7 15 16v28.4c0 9.2-4.4 16-15 16-10.4 0-15-6.8-15-16M134.6 1h10v50.8h11.8v8h-21.7V.8m-19 27.6H130v31.4h-7.2v-6.4c-1.4 4.4-4 7-9.5 7-8.6 0-12.5-6.6-12.5-15.8V16c0-9 4.4-15.8 15-15.8 11 0 14 6 14 14.8v5.2h-9v-6c0-3.7-1.4-5.7-5-5.7-3.5 0-5 2.5-5 6v31.7c0 3.5 1.4 6 4.8 6 3.2 0 5-1.7 5-5.6V36.2h-4.8v-7.8M64.4 1H88v8H74.4v17h10v8h-10v17.8H88v8H64.5V1M49.6 34H40v26H30V1h10v25h9.6V.8h10v59h-10v-26M0 .8h26.4V9h-8.2v50.8h-10V9H0V1"
    />
  </svg>
  `
}

function horizontal () {
  return html`
    <div class="Logo Logo--horizontal">
      ${symbolPart()}
      ${textPart()}
    </div>
  `
}

function vertical () {
  return html`
    <div class="Logo Logo--vertical">
      ${symbolPart()}
      ${textPart()}
    </div>
  `
}

function symbol () {
  return html`<div class="Logo">${symbolPart()}</div>`
}

function text () {
  return html`<div class="Logo">${textPart()}</div>`
}

module.exports = {
  symbol: symbol,
  text: text,
  horizontal: horizontal,
  vertical: vertical
}
