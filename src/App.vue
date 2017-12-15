<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import('vuetify/dist/vuetify.min.css')
  export default {
    name: 'app'
  }
</script>

<style type="text/scss" lang="scss">
  @font-face {
    font-family: 'iconfont';  /* project id 244115 */
    src: url('//at.alicdn.com/t/font_244115_esitui80eid7k3xr.eot');
    src: url('//at.alicdn.com/t/font_244115_esitui80eid7k3xr.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_244115_esitui80eid7k3xr.woff') format('woff'),
    url('//at.alicdn.com/t/font_244115_esitui80eid7k3xr.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_244115_esitui80eid7k3xr.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
  }

  body, html {
    height: 100%;
    font-size: 0.8rem;
  }

  .cf:after {
    content: "";
    display: table;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .lf {
    float: left;
  }

  .rt {
    float: right;
  }
  .nowrap{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .nowrap{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
