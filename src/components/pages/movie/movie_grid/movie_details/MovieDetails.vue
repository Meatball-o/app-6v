<template>
  <div v-if="detail">
    <!--详情页title以及收藏-->
    <div class="detail-title cf">
      <i class="iconfont rt">&#xe670;</i>
      {{detail.name}}
    </div>
    <!--详情页图片-->
    <div class="detail-img">
      <img v-for="img in detail.images"  :src="img" alt="">
    </div>
    <!--详情页人物等简介-->
    <div style="padding: 0 0.8rem" class="detail-briefi" v-html="detail.more">
    </div>
    <!--详情页内容-->
    <div class="detail-content" style="padding: 0 0.8rem">
      {{detail.desc}}
    </div>
    <!--详情页下载链接-->
    <div class="detail-dl"style="padding: 0 0.8rem">
      <p class="link-prompt">下载地址(长按链接复制，可使用迅雷影音边下边播)：</p>
      <div v-for="item in detail.downloadUrl">
        <span class="dl-name">{{item.desc.name}}</span>
        <a class="dl-url" :href="item.url"> {{item.name}}</a>
        <span class="dl-password" v-if="item.password">{{item.password}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MovieDetails',
    data(){
      return {
        page: 1,
        detail: null
      }
    },
    created: function () {
      var that = this;
      if (true) {
        jsonp('https://gitee.com/heiliuer/wxapp-meatball-backend/raw/master/api/v2/movie/'+ this.$route.params.id +'.jsonp',
          {
            name: '__cb'
          },
          function (err, data) {
            if (err) {
              console.error(err.message);
            } else {
              that.detail = data;
              console.log(data);
            }
          })
      }
    },
  }
</script>

<style type="text/scss" lang="scss" scoped>
  .detail-title {
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0.6rem 0.3rem;
    .iconfont {
      font-size: 1.5rem;
    }
  }
  .detail-dl .link-·mpt{
    font-weight: bold;
  }
.detail-briefi,.detail-content,.detail-dl,.detail-dl>ul,.detail-dl>ul>lli{
  margin: 0.7rem 0.3rem;
}
  .detail-img img {
    width: 100%;
  }
  .link-prompt{
    font-weight: bold;
    color: red;
  }
  .dl-url{
    color: red;
  }
</style>
