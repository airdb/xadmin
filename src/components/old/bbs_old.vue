<template>
  <div class="hello">
     <h1 @click="changeTitle">{{ msg }}</h1>  
    <h1>{{ msg1 }}</h1>
    <span v-bind:title="msg2" >
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>

    <p v-if="seen">现在你看到我了</p>

  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
  
   <p>{{ message }}</p>
  <button v-on:click="reverseMessage">逆转消息</button>

  <p>{{ result }}</p>

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
