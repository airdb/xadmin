<!--
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2019-12-05 18:40:10
 * @LastEditors: jie.niu
 * @LastEditTime: 2019-12-06 15:46:39
 -->
<template>
    <div class="content">
        <div class="title">Sign In With</div>
        <div class="list">
            <img src="./images/github.png" class="list-item" data-icon="github" v-on:click="jump"/>
            <img src="./images/in.png" class="list-item" data-icon="linkedin" v-on:click="jump"/>
            <img src="./images/amazon.png" class="list-item" data-icon="amazon" v-on:click="jump"/>
            <img src="./images/bitbucket.png" class="list-item" data-icon="bitbucket" v-on:click="jump"/>
            <img src="./images/facebook.png" class="list-item" data-icon="facebook" v-on:click="jump"/>
            <img src="./images/google.png" class="list-item" data-icon="google" v-on:click="jump"/>
            <img src="./images/slack.png" class="list-item" data-icon="slack" v-on:click="jump"/>
            <img src="./images/wechat.png" class="list-item" data-icon="wechat" v-on:click="jump"/>
        </div>
    </div>
</template>
<script>
export default {
    name: "login",
    data() {
        return {
            
        }
    },
    created: function(){
        // console.log('document', window.document)
        document.getElementsByClassName("noahv-layout-breadcrumb")[0].style.display = "none"
        document.getElementsByClassName("noahv-layout-header")[0].style.display = "none"
    },
    methods: {
        jump: function(e) {
            console.log('e--->', e.target.dataset.icon)
            let icon = e.target.dataset.icon
            // this.$request({
            //     url: 'https://www.jianshu.com/shakespeare/v2/notes/7baa3d4a1e9c/book',
            //     method: 'get',
            //     data: {},
            //     showLoading: true
            // }).then(function(data){
            //     console.log('data--->', data)
            // })
            let baseUrl = 'https://mina.baobeihuijia.com/'
            // if(icon == 'github') {
            //     window.location.href = baseUrl + 'oauth/v1/github'
            // }else if(icon == 'linkedin') {
            //     window.location.href = baseUrl + 'oauth/v1/linkedin'
            // }else if(icon == 'wechat') {
            //     window.location.href = baseUrl + 'oauth/v1/wechat'
            // }else if(icon == 'google') {
            //     window.location.href = baseUrl + 'oauth/v1/google'
            // }else if(icon == 'facebook') {
            //     window.location.href = baseUrl + 'oauth/v1/facebook'
            // }else if(icon == 'bitbucket') {
            //     window.location.href = baseUrl + 'oauth/v1/bitbucket'
            // }else if(icon == 'amazon') {
            //     window.location.href = baseUrl + 'oauth/v1/amazon'
            // }else if(icon == 'slack') {
            //     window.location.href = baseUrl + 'oauth/v1/slack'
            // }
            window.location.href = baseUrl + 'oauth/v1/' + icon
        }
    }
}
</script>
<style lang="less" scoped>
    .title {
        width: 100%;
        text-align: center;
        line-height: 60px;
        font-weight: 700;
        font-size: 42px;
        color: #333;
        margin-top: 50px;
    }
    .list {
        margin: 0 auto;
        margin-top: 50px;
        width: 75%;
        min-height: 200px;
        border: 1px solid #D7D7D7;
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
