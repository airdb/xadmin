<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">{{website}}</router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link to="/forum" class="nav-link"> 论坛 </router-link>
          </li>
          <li class="nav-item">
            <a href="/chatroom" class="nav-link"> 圈子 </a>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link"> 后台管理 </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link"> About </router-link>
          </li>
          <li class="nav-item">
            <a href="https://www.airdb.com" class="nav-link"> 文档 </a>
          </li>
        </ul>
        <!-- ul end -->
        <div class="input-group w-25">
          <input type="text" class="form-control rounded-0" placeholder="search">
          <div class="input-group-append">
            <button class="btn btn-secondary rounded-0" type="button">搜索</button>
          </div>
        </div>
        <!-- form end -->
      </div>
      <!-- navbar-collapse end -->
    </div>
    <!-- container end -->

    <div v-if="isLogin == true">
      <img src="../assets/userImg.jpg" class="round_icon" alt="" @click="toUserInfo">
    </div>
    <div class="" v-else>
      <router-link to="/login" class="btn btn-primary btn-md rounded-0" style="font-size: 13px"> 登陆 </router-link>
    </div>
    <!-- login end -->

  </nav>
  <!-- navbar end -->
</div>
</template>

<script>
export default {
  data () {
    return {
      website: '网站首页',
      isLogin: false,
      items: [
        {name: '分类1', url: '/'},
        {name: '分类2', url: '/'},
        {name: '分类3', url: '/'},
        {name: '分类4', url: '/'}
      ]
    }
  },
  methods: {
    toUserInfo: function () {
      this.$router.push({path: '/user/userInfo'})
    }
  },
  created () {
  }
}
</script>

<style>
.round_icon{
  width: 34px;
  height: 34px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
