<template>
  <div>
    <div style="width:100%;background-color: #f00;" :style="{height}" v-if="!loaded"></div>
    <img :src="src" alt="" v-if="loaded">
  </div>
</template>
<script>
  export default {
    name: 'LazyImg',
    props: ['src', 'height'],
    data(){
      return {
        loaded: false,
        loading: false,
      }
    },
    created(){
    },
    methods: {
      load(){
        const that = this
        let image = new Image()
        image.src = this.src
        that.loading = true
        image.onload = function () {
          that.loading = false
          that.loaded = true
        }
      }
    },
    mounted(){
      const that = this
      window.onscroll = function () {
        var scrollHeight = document.body.scrollTop
        var bodyHeight = document.body.offsetHeight
        if ((that.$el.offsetTop - scrollHeight) <= bodyHeight) {
          (!that.loading && !that.loaded) && that.load()
        } else {

        }
      }
    }
  }
</script>

<style>
</style>
