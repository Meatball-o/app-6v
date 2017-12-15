<template>
  <div>
    <!--tab切换列表1-->
    <movie-content :type="1" ></movie-content>
  </div>
</template>
<script>
  //  tab切换列表1
  import MovieContent from './MovieContent.vue'

  export default {
    name: 'PageMovie1',
    data(){
      return {
      }
    },
    components: {MovieContent},
  }
</script>

<style scoped>
</style>
