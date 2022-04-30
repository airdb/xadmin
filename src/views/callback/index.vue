<template>
  <div class="callback">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon-svg">
      <path d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4" opacity=".25"/>
        <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
        <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
      </path>
    </svg>
  </div>
</template>

<script setup lanf="ts">
import { ElMessage } from 'element-plus'
import { setToken } from '@/utils/auth'

const route = useRoute()
const router = useRouter()

watch(
  () => route.query,
  (query) => {
    if (query && query.code) {
      login(query.code)
    }
  },
  { immediate: true }
)

function login(token) {
  setToken(token)
  ElMessage({ message: '登录成功', type: 'success' })
  setTimeout(() => {
    router.push('/')
  }, 1500)
}
</script>

<style scoped>
.callback {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #2d3a4b;
}
.callback .icon-svg {
  width: 50px;
  height: 50px;
  fill: #fff;
}
</style>
