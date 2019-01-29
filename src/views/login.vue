<template>
<div class="login">
	<!-- <div>
		<wxlogin :appid="config.appid" :scope="config.scope" :redirect_uri="config.redirect_uri"></wxlogin>
	</div>
  <div>
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
  </div> -->
  <head-er></head-er>

  <!-- 背景 -->
  <div class="bg">
    <div></div>
    <div class="bg_d"></div>
  </div>

  <!-- 登陆页 -->
  <div class="loginContainer">
    <img :src="loginImg" alt="login修饰图片">
    <div class="p_container">
      <div class="tabTil">
        <div :class="chosenTab == 1 ? 'chosen pre' : 'pre'" @click="tab1">扫码登陆</div>
        <div :class="chosenTab == 2 ? 'chosen' : ''" @click="tab2">账户登陆</div>
      </div>

      <!-- 二维码登陆 -->
      <div class="c_container" :hidden="chosenTab == 2">
        <wxlogin :appid="config.appid" :scope="config.scope" :redirect_uri="config.redirect_uri"></wxlogin>
      </div>  

      <!-- 账户登陆 -->
      <div class="c_container" style="margin-top: 50px;" :hidden="chosenTab == 1">
        <form>
          <div class="form-group">
            <div>账号：</div>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="用户名/手机号">
          </div>
          <div class="form-group">
            <div>密码：</div>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="密码">
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" style="margin-top: .4rem;">
            <label class="form-check-label" for="exampleCheck1">记住密码</label>
            <label class="for-check-label">忘记密码</label>
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block">登陆</button>
        </form>
      </div>

    </div>
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
        // redirect_uri: 'https://wechat.baobeihuijia.com/dev/lastest/wechatapi/wechat/login'
        redirect_uri: 'https://wechat.baobeihuijia.com/'
      },
      user: sessionStorage.username,
      username: '',
      password: '',
      status: -1,
      token: 'defualt',
      msg: 'Welcome to signin, https://aws.airdb.io/lambda/test',
      loginImg: '/static/images/home2.jpg',
      chosenTab: 1
    }
  },
  methods: {
    login: function (event) {
      this.$http.get(this.apiurl).then((response) => {
        // 响应成功回调
        window.console.log(response.data)
        window.console.log(response.data.status)
        this.status = response.data.status
        this.username = response.body.token
        // this.password = response.token
        // this.message = response.body.message
        this.$session.start()
        window.console.log('=====', this.$session.id())
        this.$session.set('username', this.password)
        window.console.log('=====', this.$session.getAll())
        this.username = this.$session.get('username')
        this.stauts = 0
        // alert(this.username, this)
        // this.$router.push({ path: '/' })
        this.$router.push('/')
      }, (response) => {
        // 响应错误回调
        window.console.log('fail!!!!', response)
        // this.result = 'fetch fail!!'
      })
      // alert(this.status)
      // if (this.status === 0) {
      //   alert(this.username)
      // }
    },
    tab1: function () {
      this.chosenTab = 1
    },
    tab2: function () {
      this.chosenTab = 2
    }
  }
}
</script>

<style>
.bg{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #f8f8f9;
  z-index: -10;
}
.bg div{
  width: 100%;
  height: 50%;
}
.bg_d{
  position: relative;
  background: #6478e9;
}
.bg_d::after{
  position: absolute;
  top: 0;
  right: 0;
  content: '';
  width: 0;
  border-top: 300px solid #f8f8f9;
  border-left: 1530px solid transparent;
}

.loginContainer{
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 500px;
  margin: auto;
  margin-top: 100px;
  border: 3px solid #eeeeee;
  list-style: none;
}
.loginContainer img{
  flex: 1;
  height: 100%;
  border-radius: 0;
}
.p_container{
  flex: 1;
  text-align: center;
  border-left: 3px solid #d0cccc;
  position: relative;
  background: #eeeeee;
}
.tabTil{
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e2e2e2;
}
.tabTil div{
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  flex: 1;
  padding: 20px 0;
}
.c_container{
  width: auto;
  height: auto;
  text-align: center;
  margin: 15px 30px 10px;
}
.form-group div{
  text-align: left;
  margin: 0 0 5px 5px;
}
.form-check{
  margin-bottom: 15px;
}
.form-check label{
  display: inline-block;
  padding: 0 40px 0 0;
}
.pre{
  position: relative;;
}
.pre::after{
  content: '';
  width: 0;
  height: 25px;
  border: 1px solid #e2e2e2;
  position: absolute;
  top: 20px;
  right: 0px;
}
.chosen{
  border-bottom: 3px solid #fce4a5;
}
</style>

