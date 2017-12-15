<template>
  <v-card>
    <component :is="e3" style="padding-bottom: 56px;"></component>
    <v-bottom-nav class="fotter-icon " :absolute="false"  :value="e31" :active.sync="e3" color="white">
      <v-btn value="PageMovie1">
        <b>分类1</b>
        <i class="iconfont">&#xe672;</i>
      </v-btn>
      <v-btn value="PageMovie2">
        <b>分类2</b>
        <i class="iconfont">&#xe672;</i>
      </v-btn>
      <!--<v-btn value="PageMy">-->
        <!--<b>我的</b>-->
        <!--<i style="font-size: 1.3rem" class="iconfont">&#xe654;</i>-->
      <!--</v-btn>-->
    </v-bottom-nav>
  </v-card>
</template>
<script>
  import PageMovie1 from './pages/movie/PageMovie1.vue'
  import PageMovie2 from './pages/movie/PageMovie2.vue'

  export default {
    name: 'PageMain',
    data () {
      return {
        e3: "PageMovie1",
        e31: true
      }
    },
    components: {PageMovie1, PageMovie2,}
  }
</script>

<style type="text/scss" lang="scss">
  .fotter-icon i {
    font-size: 1.6rem;
  }
</style>

