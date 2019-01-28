<template>
  <el-container>
  <el-header height=100px>
  <div id="root" class="bbb" >
    <el-menu :default-active="activeIndex" background-color="#ddd" active-text-color="#eee" mode="horizontal" class="aaa" @select="handleSelect">
      <el-menu-item index="1">Home</el-menu-item>
      <el-menu-item index="2">Projects</el-menu-item>
      <el-menu-item index="3">Services</el-menu-item>
      <el-menu-item index="4">Downloads</el-menu-item>
      <el-menu-item index="5"><a href="http://docs.airdb.com" target="_blank">Docs</a></el-menu-item>
      <el-menu-item index="6">About</el-menu-item>
    </el-menu>
  </div>
  </el-header>

  <el-container>
    <el-aside height="1000px" width="300px">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    </br>
    <i type="primary" class="el-icon-info"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </el-aside>
    <el-main height="1000px" width="300px">
      <el-tag>标签一</el-tag>
      <el-tag type="success">标签二</el-tag>
      <el-tag type="info">标签三</el-tag>
      <el-tag type="warning">标签四</el-tag>
      <el-tag type="danger">标签五</el-tag>

      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </el-main>
  </el-container>
  <!--
  -->
  <el-footer height=100px>
  &copy; 2018 Airdb, Inc.  help
  </el-footer>
  </el-container>

</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      checkLogin () {
        if (!this.getCookie('session')) {
          this.$router.push('/login')
        }
      }
    }
  }
</script>

<style>
  .el-header, {
    width: 100%;
    align: center;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-footer {
    width: 100%;
    align: center;
    background-color: green;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-menu-item {
     font-size: 20px;
     font-weight:bold;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  #root {
    width: 100%;
    padding: 0;
    background-color: #fff;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  .aaa {
      border-radius: 8px;
  }
</style>
