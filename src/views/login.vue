<template>
  <div class="login">
	<div>
		<wxlogin :appid="config.appid" :scope="config.scope" :redirect_uri="config.redirect_uri"></wxlogin>
	</div>
    <ul>
    	<form accept-charset="UTF-8" >
    	 <h1>Sign in to airdb</h1>
    	 <label for="login_field">
    	   Username or email address
    	 </label>
    	<li><input type="text" v-model="username" ></li>

    	<label for="password">
    	  Password <a href="/password_reset" class="label-link">Forgot password?</a>
    	</label>
    	<li><input type="password" autocomplete="new-password" v-model="password"></li>
    	<button v-on:click="login">login</button>
    	</form>
    	</ul>
  </div>
</div>
</template>

<script>
import headEr from '@/components/header'
import footEr from '@/components/footer'
import wxlogin from '@/components/wxlogin'
export default {
  components: {
    wxlogin,
    headEr,
    footEr
  },
  data () {
    this.apiurl = 'https://aws.airdb.io/lambda/test'
    return {
      config: {
        appid: 'wxb2a310377819aebd',
        scope: 'snsapi_login',
        redirect_uri: 'https://wechat.baobeihuijia.com/dev/lastest/wechatapi/wechat/login'
      },
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
        this.stauts = 0
        // alert(this.username, this)
        // this.$router.push({ path: '/' })
        this.$router.push('/')
      }, (response) => {
        // 响应错误回调
        console.log('fail!!!!')
        // this.result = 'fetch fail!!'
      })
      // alert(this.status)
      // if (this.status === 0) {
      //   alert(this.username)
      // }
    }}
}
</script>
