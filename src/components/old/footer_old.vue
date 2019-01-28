<template>
  <el-container>
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
