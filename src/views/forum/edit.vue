<template>
<div id="main">
  <head-er></head-er>

  <div class="jumbotron p-0">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb border-bottom" style="font-size:20px;">
          <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item"><router-link to="/forum">Forum</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Edit</li>
        </ol>
      </nav>
      <!-- nav end -->
    </div>
    <!-- container end -->
  </div>
  <!-- jumbotron end -->

  <main role="main">
    <div class="container">
      

      <div class="d-block">   
        <div class="d-inline px-2 font-weight-bold">发表主题</div>
        <div class="btn btn-primary btn-sm px-3">发表</div>
      </div>
      <!-- d-inline end -->

      <!--div class="d-flex pl-3 pt-3">
        <div class="d-inline-block mr-1">选择主题</div> 
        <div class="">
          <select name="selectAge" id="selectAge">   
            <option v-for="(option, index) in options" :value="key">{{option}}</option>     
          </select>
        </div>
      </div-->

      <div class="py-3 d-block" style="height:800px">
        <mavon-editor style="height:700px" v-model="comment"
          :boxShadow="false"
          @save="editorSave"
          @imgAdd="editorImgAdd" 
          @imgDel="editorImgDel">    
      </mavon-editor>
      </div>
      <!-- editor end -->
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
      saveFileName: 'testFile'
    }
  },
  methods: {
    editorImgAdd (filename, file) {
      window.console.log('======editorImgAdd() start======', filename, file)
      // 上传图片
      // var formData = new FormData()
    },
    editorSave (value, render) {
      window.console.log('======editorSave() start======', render)
      // 打印输入内容
      window.console.log(value)
      /* var fso = new ActiveXObject('Scripting.FileSystemObject')
      var file = fso.createtextfile('C:\\test.txt', true)
      file.write(value)
      var alink = document.createElement('a')
      alink.href = this.imgs
      alink.download = 'pic'
      alink.click() */
    }
  },
  created () {
    var E = window.wangEditor
    var editor = new E('#editor')
    // 或者 var editor = new E( document.getElementById('editor') )
    editor.create()
  }
}
</script>

<style>
</style>
