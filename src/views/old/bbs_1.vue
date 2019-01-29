<template>
  <el-container>
    <el-container>
      <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%; line-height: 10px" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="name" label="实例ID" width="80"> </el-table-column>
        <el-table-column prop="serviceinstance" label="实例名" show-overflow-tooltip> </el-table-column>
        <el-table-column label="变更时间" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>

		<!-- 操作 -->
        <el-table-column label="操作" fixed="right" >
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
      </el-main>
      <el-footer>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </el-footer>
    </el-container>
  </el-container>
</template>


<script>
  export default {
    watch: {
      filterText (val) {
        this.$refs.tree2.filter(val)
      }
    },

    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        filterText: '',
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tableData3: [{
          date: '2016-05-03',
          name: '1',
          innerip: '10.10.10.10',
          mainport: '80;8080',
          workpath: '/srv/apiweb/',
          status: 'online',
          tags: 'foo=air;bar=db',
          servicetype: 'machine',
          serviceinstance: '使用微软提供6to4的IPv6地址'
        }, {
          date: '2016-05-01',
          name: '2',
          innerip: '10.10.10.10',
          mainport: '80',
          workpath: '/srv/apiweb/',
          status: 'offline',
          tags: 'foo=air;bar=db',
          servicetype: 'docker',
          serviceinstance: 'instance4.hd.cmdb.airdb.io.'
        }],
        multipleSelection: []
      }
    },
    methods: {
      handleSizeChange (val) {
        window.console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        window.console.log(`当前页: ${val}`)
      },
      handleSelect (key, keyPath) {
        window.console.log(key, keyPath)
      },
      checkLogin () {
        if (!this.getCookie('session')) {
          this.$router.push('/login')
        }
      },
      filterNode (value, data) {
        if (!value) return true
        return data.label.indexOf(value) !== -1
      },
      // 内容
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      }
    }
  }
</script>

<style>
  .el-header, {
    width: 100%;
    align: left;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-footer {
    width: 100%;
    background-color: #E9EEF3;
    color: #333;
    vertical-align: top;
    text-align: right;
//    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
//    line-height: 60px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
   // text-align: left;
//    line-height: 600px;
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
    // margin:left;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  .aaa {
      border-radius: 8px;
  }

  .tree {
      top : 0;
      heigth: 10px;
      font-size: 20px;
      font-weight:bold;
  }
.el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 60%;
    line-height: 50px;
    border-radius: 10px;
}
</style>
