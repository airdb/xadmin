<template>
  <div class="signin">
    <h1>登录</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ status }}</h1>
    <h1>{{ user }}</h1>
    <ul>
    <li><input type="text" v-model="username" ></li>
    <li><input type="password" autocomplete="new-password" v-model="password"></li>
    <button v-on:click="login">login</button>

    </ul>
  </div>

</template>

<script>
export default {
  name: 'signin',
  data () {
    this.apiurl = 'https://aws.airdb.io/lambda/test'
    return {
      user: sessionStorage.username,
      username: '',
      password: '',
      status: -1,
      token: 'defualt',
      msg: 'Welcome to signin, https://aws.airdb.io/lambda/test'
    }
  },

  methods: {
    login: function (event) {
      this.$http.get(this.apiurl).then((response) => {
        // 响应成功回调
        console.log(response.data)
        console.log(response.data.status)
        this.status = response.data.status
        this.username = response.body.token
        // this.password = response.token
        // this.message = response.body.message
        this.$session.start()
        console.log('=====', this.$session.id())
        this.$session.set('username', this.password)
        console.log('=====', this.$session.getAll())
        this.username = this.$session.get('username')
        // alert(this.username, this)
      }, (response) => {
        // 响应错误回调
        console.log('fail!!!!')
        // this.result = 'fetch fail!!'
      })
      // alert(this.username, this)
    }}
}
</script>
