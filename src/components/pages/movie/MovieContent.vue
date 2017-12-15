<template>
  <div>
    <v-tabs v-model="active">
      <v-tabs-bar class="white" light>
        <v-tabs-item
          v-for="tab in tabs"
          :key="tab.id"
          :href="'#'+tab.id"
          @click="selectTab(tab)"
          ripple
        >
          {{tab.name}}
        </v-tabs-item>
        <v-tabs-slider color="yellow"></v-tabs-slider>
      </v-tabs-bar>
      <!--选项卡-->
      <div style="text-align: center">

        <v-btn-toggle v-model="text">
          <v-btn flat value="left">
           时间
          </v-btn>
          <v-btn flat value="center">
            分数
          </v-btn>
        </v-btn-toggle>

      </div>
      <!--首页列表-->
      <tabs-content :type="type" :tab="tab" :tab-id="active" v-if="active&&tab" :navigate="navigate"></tabs-content>
    </v-tabs>
  </div>
</template>

<script>
  //  首页列表
  import TabsContent from './movie_grid/TabsContent'
  export default {
    props: ['type'],
    data () {
      return {
        tabs: [],
        active: null,
        navigate: null,
        tab: null,
        e6: [],
        e7: [],
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        ]
      }
    },
    methods: {
      selectTab(tab){
        this.tab = tab
      }
    },
    created: function () {
      var that = this;
      if (true) {
        jsonp('https://gitee.com/heiliuer/wxapp-meatball-backend/raw/master/api/v2/navigate/' + this.type + '/index.jsonp',
          {
            name: '__cb'
          },
          function (err, data) {
            if (err) {
              console.error(err.message);
            } else {
              that.tabs = data.data;
              that.active = (that.tabs[0] || {}).id
              that.tab = that.tabs[0]
              console.log(data);
            }
          })
      }
    },
    components: {
      TabsContent,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
