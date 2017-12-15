<template>
  <v-layout column>
    <!--分页-->
    <div class="text-xs-center">
      <v-pagination :length="tab.navigate.pageTotal" v-model="page"></v-pagination>
    </div>

    <v-flex xs12 sm6 offset-sm3>
      <v-container fluid grid-list-md class="grey lighten-4">
        <v-layout row wrap>
          <v-flex
            v-bind="{ [`xs6`]: true }"
            v-for= "card in movies"
            :key="card.id"
          >
            <v-card>
              <v-card-media
                @click="clickDetail(card)"
                :src="card.thumb"
                height="200px"
              >

                <lazy-img :src="card.thumb" height="200px"></lazy-img>
                    <!--列表图片上title字-->
                <!--<v-container fill-height fluid>-->
                  <!--<v-layout fill-height>-->
                    <!--<v-flex xs12 align-end flexbox>-->
                      <!--<span class="headline white&#45;&#45;text" v-text="card.title"></span>-->
                    <!--</v-flex>-->
                  <!--</v-layout>-->
                <!--</v-container>-->

              </v-card-media>
              <v-card-actions class="white">
                <div class="brief-introduction">
                  <div class="bf-title nowrap">{{card.name}}</div>
                  <div class="score-time cf">
                    <span>{{card.scoreInfo.score}}</span>
                    <span class="rt">{{card.dateStr}}</span>
                  </div>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>

    <!--分页-->
    <div class="text-xs-center">
      <v-pagination :length="tab.navigate.pageTotal" v-model="page"></v-pagination>
    </div>
    <!--加载提示-->
    <loading v-show="loading"></loading>

  </v-layout>
</template>
<script>
  import MovieDetails from './../movie_grid/movie_details/MovieDetails.vue'
  import Loading from './../../../_commom/Loading.vue'
  import LazyImg from './../../../_commom/LazyImg.vue'

  export default {
    name: 'TabsContent',
    props: ['type', 'tab'],
    data(){
      return {
//        页码默认第一页
        page: 1,
//        后台数据默认为空数组
        movies: [],
//        提示加载
        loading: false
      }
    },
//    computed:{
//      score:function(){
//        return this.movies.sort(function(a,b){
//          return movies.score.localeCompare(movies.score)
//        })
//      }
//    },
    methods: {
      clickDetail: function (card) {
        this.$router.push({path: '/movie/' + card.id, query: {name: card.name}})
      },
      loadData(){
        var that = this;
        that.loading = true;
        if (true) {
          jsonp('https://gitee.com/heiliuer/wxapp-meatball-backend/raw/master/api/v2/navigate/' + this.type + '/' + this.tab.id + '/time/page_' + this.page + '.jsonp',
            {
              name: '__cb'
            },
            function (err, data) {
              if (err) {
                console.error(err.message);
              } else {
                that.movies = data.movies;
                console.log(data);
              }
              that.loading = false;
            })

        }
      }
    },


    created: function () {
      var that = this;
      console.log('created');
      this.loadData()

    },

    watch: {
      tab(){
        if (this.page == 1) {
          this.loadData()
        } else {
          this.page = 1
        }
      },
      page(){
        this.loadData()
      }
    },

    components: {
      MovieDetails,
      Loading,
      LazyImg
    },
  }
</script>

<style scoped type="text/scss" lang="scss">
  .brief-introduction {
    width: 100%;
    height: 50%;
    box-sizing: border-box;
    padding-right: 0.6rem;
    .bf-title {
      height: 50%;
      font-size: 1rem;
      font-weight: bold;
    }
    .score-time {
      height: 50%;
      span:first-child {
        color: #f00;
        font-weight: bold;
        font-size: 1.1rem;
      }
      span:nth-child(2) {
        padding-top: 0.16rem;
      }
    }

  }
</style>
<style>
  .pagination__item--active {
    background-color: #9E9E9E;
    color: #fff;
  }
</style>
