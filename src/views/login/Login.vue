<template>
  <div class="login-container columnCC">
    <a :href="authUrl" rel="noopener noreferrer" class="login-btn">认证登陆</a>
  </div>
</template>

<script setup>
import { getPreset } from '@/api/passport'

const state = reactive({
  authUrl: "",
})

onBeforeMount(() => {
  getPreset(window.location.origin + '/callback').then((response) => {
    state.authUrl = response.url
  })
})

//导出属性到页面中使用
const { authUrl } = toRefs(state)
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
