<template>
  <div class="login-container columnCC">
    <a :href="authUrl" rel="noopener noreferrer" class="login-btn">认证登陆</a>
  </div>
</template>

<script setup>
const callbackUrl = 'http://localhost:5006/callback'
const authUrl = `https://sso.airdb.net/login/oauth/authorize?client_id=4c00382773a7345f9d37&response_type=code&redirect_uri=${encodeURIComponent(callbackUrl)}&scope=read&state=app-bbhj`
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  height: 100vh;
  width: 100%;
  background-color: #2d3a4b;
}

//登录按钮
.login-btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: var(--el-color-primary);
  color: var(--el-color-white);
}
</style>
