<template>
  <div>
    <!--登录-->
    <div class="login-register">
      <div class="not-login cf">
        <img class="lf" src="../../assets/login.jpg" alt="">
        <div class="text">登录/注册</div>
      </div>
      <div class="login"></div>
    </div>
    <!--历史记录-->
    <div class="history">
      <div>历史记录</div>
    </div>
    <!--我的缓存-->
    <div class="cache">
      <div>我的缓存</div>
    </div>
    <!--个人服务-->
    <div class="service">
      <div></div>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PageMy'
  }
</script>

<style type="text/scss" lang="scss" scoped>
  .login-register{
    box-sizing: border-box;
    padding: 1rem 1rem 2rem 2rem;
    width: 100%;
    .not-login {
      img{
        width: 5rem;
        height: 5rem;
        border-radius: 5rem;
        margin-right: 1rem;
      }
      .text{
        line-height: 5rem;
      }
    }
  }
</style>
