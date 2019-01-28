<template>
  <div class="hello">
    <router-link to="/servicetree"> 服务树 </router-link>
    <router-link to="/root"> 根目录 </router-link>
    <router-link to="/bbs"> BBS </router-link>
    <router-link to="/forum"> 论坛 </router-link>
    <router-link to="/about"> About </router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',

  data () {
    return {
      msg: 'msg: Welcome to Your Vue.js App',
      msg1: 'msg1: Welcome to Your Vue.js App',
      msg2: 'You loaded this page on ' + new Date().toLocaleString(),
      seen: true,
      message: 'Hello Vue.js!',

      result: '',

      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
    }
  },
  methods: {
    changeTitle () {
      this.msg = 'Wonderful Vue.js App'
    },
    reverseMessage () {
      this.message = this.message.split('').reverse().join('')
    }

  },
  created () {
    this.fetchData()
  }
}
</script>
