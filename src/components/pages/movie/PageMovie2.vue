<template>
  <div>
    <!--tab切换列表2-->
    <movie-content :type="2"></movie-content>
  </div>
</template>
<script>
//  tab切换列表2
  import MovieContent from './MovieContent.vue'

  export default {
    name: 'PageMovie2',
    data(){
      return{

      }
    },
    components: {
      MovieContent
    }
  }
</script>

<style scoped>
</style>
