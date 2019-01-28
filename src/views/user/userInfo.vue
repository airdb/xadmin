<template>
<div>
  <head-er></head-er>

  <main role="main">
    <div class="container py-5">
      <div class="row">
        <div class="col-3">
          <img id="userAvatar" class="border" :src="userInfo.headimgurl">
          <div class="text-center py-2" style="font-size: 32px">
            {{userInfo.nickname}}
          </div>
          <hr>
          <div class="py-1 text-center">
            <div class="d-inline-block" style="width:10%"><img src="../../assets/position1.jpg"></div>
            {{userInfo.city}}--{{userInfo.province}}--{{userInfo.country}}
          </div>
          <hr>
        </div>

        <div class="col-9">
        </div>

      </div>

    </div>
    <!-- container end -->
  </main>
  <!-- main end -->
  
  <foot-er></foot-er>
</div>
</template>

<script>
import headEr from '@/components/header'
import footEr from '@/components/footer'
export default {
  components: {
    headEr,
    footEr
  },
  data () {
    return {
      userInfo: {
        nickname: '小明',
        sex: '1',
        province: '上海',
        city: '南京',
        country: '中国',
        headimgurl: 'http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/0',
        privilege: [
          'PRIVILEGE1',
          'PRIVILEGE2'
        ]
      }
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style>
img{  
  width: auto; 
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 10%;
}
</style>
