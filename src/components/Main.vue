<style>
body {font-family: Helvetica, sans-serif;}
.iconClassRoot {
   width:20px;
   height:20px;
   display: inline-block;
   background: url('../images/ztree/root.png') no-repeat center/100% auto;
}
.iconClassOrg {
   width:20px;
   height:20px;
   display: inline-block;
   background: url('../images/ztree/org.png') no-repeat center/100% auto;
}
.iconClassSystem {
   width:20px;
   height:20px;
   display: inline-block;
   background: url('../images/ztree/system.png') no-repeat center/100% auto;
}
.iconClassSubSystem {
   width:20px;
   height:20px;
   display: inline-block;
   background: url('../images/ztree/subsystem.png') no-repeat center/100% auto;
}
.iconClassService {
   width:20px;
   height:20px;
   display: inline-block;
   background: url('../images/ztree/service.png') no-repeat center/100% auto;
}
.operate ul>li{
  float:left;
  margin:10px 10px;
  list-style-type: none;
 }
</style>

<template>
  <div style='display:flex;flex:3'>
      <div style='flex:1'>
        <h1>sevice tree</h1>
	{{ ztreeDataSourceJson.name }}
        <div style='width:280px;' v-if='ztreeDataSourceList.length>0'>
           <vue-ztree :list.sync='ztreeDataSourceList' :contextmenu='contextmenuClick' :is-open='true'></vue-ztree>
        </div>
      </div>
  </div>
</template>

<script>
import vueZtree from '@/components/vue-ztree.vue'
export default {
  data () {
    this.apiurl = 'http://airdb.com/tree/tree.json'

    return {
      msg: 'Hello Vue-Ztree-2.0!',
      ztreeDataSource: [],
      show: true,
      parentNodeModel: [], // 当前点击节点父亲对象
      nodeModel: null, // 当前点击节点对象
      ztreeDataSourceJson: '',
      ztreeDataSourceList: [{
        id: 1,
        name: 'airdb',
        iconClass: 'iconClassRoot',
        open: true,
        children: [{
          id: 2,
          name: 'sys',
          iconClass: 'iconClassOrg',
          children: [{
            id: 3,
            name: 'cmdb',
            iconClass: 'iconClassSystem',
            children: [{
              id: 4,
              name: 'api-web',
              iconClass: 'iconClassSubSystem',
              children: [{
                id: 8,
                name: 'api-web.gl',
                iconClass: 'iconClassService'
              }]
            }]
          }, {
            id: 3,
            name: 'zabix',
            iconClass: 'iconClassSystem'
          }]
        }, {
          id: 5,
          name: 'op',
          clickNode: true,
          iconClass: 'iconClassOrg',
          children: [{
            id: 7,
            name: 'access-web.bj',
            iconClass: 'iconClassSystem'
          }]
        }, {
          id: 6,
          name: 'rd',
          iconClass: 'iconClassOrg'
        }]
      }]
    }
  },
  methods: {
    fetchData () {
      this.$http.get(this.apiurl).then((response) => {
        // 响应成功回调
        console.log(response.data)
        this.result = response
        this.ztreeDataSourceJson = response.data
        this.message = response.body.message
      }, (response) => {
        // 响应错误回调
        console.log('fail!!!!')
        this.result = 'fetch fail!!'
      })
    },

    // 新增节点
    addNode: function () {
      if (this.nodeModel) {
        this.nodeModel.children.push({
          id: +new Date(),
          name: '动态新增节点哦～',
          path: '',
          clickNode: false,
          isFolder: false,
          isExpand: false,
          loadNode: 0,
          children: []
        })
        this.nodeModel.isFolder = true
      } else {
        console.log('请先选中节点')
      }
    },
    // 删除节点
    delNode: function () {
      if (this.nodeModel) {
        if (this.parentNodeModel.hasOwnProperty('children')) {
          this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(this.nodeModel), 1)
        } else if (this.parentNodeModel instanceof Array) {
           // 第一级根节点处理
          this.parentNodeModel.splice(this.parentNodeModel.indexOf(this.nodeModel), 1)
        }
        this.nodeModel = null
      } else {
        console.log('请先选中节点')
      }
    },
    // 节点上移
    up: function () {
      if (!this.nodeModel) console.log('请先选中节点')

      if (this.parentNodeModel.hasOwnProperty('children')) {
        var index = this.parentNodeModel.children.indexOf(this.nodeModel)
        if (index - 1 >= 0) {
          var model = this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(this.nodeModel), 1)
          this.parentNodeModel.children.splice(index - 1, 0, model[0])
        }
      } else if (this.parentNodeModel instanceof Array) {
        // 第一级根节点处理
        index = this.parentNodeModel.indexOf(this.nodeModel)
        if (index - 1 >= 0) {
          model = this.parentNodeModel.splice(this.parentNodeModel.indexOf(this.nodeModel), 1)
          this.parentNodeModel.splice(index - 1, 0, model[0])
        }
      }
    },
    // 节点下移
    down: function () {
      if (!this.nodeModel) console.log('请先选中节点')

      if (this.parentNodeModel.hasOwnProperty('children')) {
        var index = this.parentNodeModel.children.indexOf(this.nodeModel)
        if (index + 1 <= this.parentNodeModel.children.length) {
          var model = this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(this.nodeModel), 1)
          this.parentNodeModel.children.splice(index + 1, 0, model[0])
        }
      } else if (this.parentNodeModel instanceof Array) {
        // 第一级根节点处理
        index = this.parentNodeModel.indexOf(this.nodeModel)
        if (index + 1 <= this.parentNodeModel.length) {
          model = this.parentNodeModel.splice(this.parentNodeModel.indexOf(this.nodeModel), 1)
          this.parentNodeModel.splice(index + 1, 0, model[0])
        }
      }
    },
    // 点击节点
    nodeClick: function (m, parent) {
      this.show = !this.show
      this.nodeModel = m  // 当前点击节点对象
      this.parentNodeModel = parent // 当前点击节点父亲对象

      console.log(m)
      console.log(parent)
    },
    // 右击事件
    contextmenuClick: function () {
      console.log('触发了自定义的contextmenuClick事件')
    },
    // 点击展开收起
    expandClick: function (m) {
      console.log(JSON.parse(JSON.stringify(m)))
      // 点击异步加载
      if (m.isExpand) {
         // 动态加载子节点, 模拟ajax请求数据
        // 请注意 id 不能重复哦。
        if (m.hasOwnProperty('children')) {
          m.loadNode = 1 // 正在加载节点
          setTimeout(() => {
            m.loadNode = 2 // 节点加载完毕
            m.isFolder = !m.isFolder
            m.children.push({
              id: +new Date(),
              name: '动态加载节点1',
              path: '',
              clickNode: false,
              isFolder: false,
              isExpand: false,
              loadNode: 0,
              children: [{
                id: +new Date() + 1,
                name: '动态加载末节点',
                path: '',
                clickNode: false,
                isExpand: false,
                isFolder: false,
                loadNode: 0
              }]
            })
          }, 1000)
        }
      }
    }
  },
  created () {
    this.fetchData()
  },
  components: {
    vueZtree
  },
  mounted () {
    // 异步获取数据操作
    setTimeout(() => {
    }, 1000)
  }
}
</script>
