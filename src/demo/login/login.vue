<!--
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2019-12-05 18:40:10
 * @LastEditors: Ye Cai
 * @LastEditTime: 2020-08-18 00:05
 -->
<template>
  <div class="content">
    <div class="title">Sign In With</div>
    <div class="list">
      <img src="./images/github.png" class="list-item" data-icon="github" v-on:click="jump" />
      <!--
      <img src="./images/google.png" class="list-item" data-icon="google" v-on:click="jump" />
      <img src="./images/wechat.png" class="list-item" data-icon="wechat" v-on:click="jump" />
      -->
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { UPDATE_TOKEN } from '../../store/mutation-types'
export default {
  name: "login",
  data() {
    return {};
  },
  mounted: function () {
    // console.log('document', window.document)
    document.getElementsByClassName(
      "noahv-layout-breadcrumb"
    )[0].style.display = "none";
    document.getElementsByClassName("noahv-layout-header")[0].style.display =
      "none";
  },
  methods: {
    jump: async function (e) {
      console.log("e--->", e.target.dataset.icon);
      
      const res = await axios.get('https://bbhj.airdb.io/test/oauth2/token')
      console.log('res--->', res)
      let token = res.data.token
      this.$store.commit(UPDATE_TOKEN, token)

      let icon = e.target.dataset.icon;
      let baseUrl = "https://bbhj.airdb.io/release";
      window.location.href = baseUrl + "/oauth2/" + icon;
      
    },
  },
};
</script>
<style lang="less" scoped>
.content {
  position: relative;
  flex: 1;
}
.title {
  position: relative;
  justify-content: center;
//   margin: 0 0;
  width: 85%;
  text-align: center;
  line-height: 60px;
  font-weight: 600;
  font-size: 42px;
  color: #333;
  margin-top: 50px;
}
.list {
  margin: 0 0;
  margin-top: 50px;
  width: 85%;
  min-height: 200px;
//   border: 1px solid #d7d7d7;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.list-item {
  display: block;
  width: 60px;
  height: 60px;
  cursor: pointer;
}
</style>
