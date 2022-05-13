<template slot-scope="scope">
  <el-table :data="tableData" :span-method="objectSpanMethod" stripe style="width: 100%">
    <el-table-column prop="id" label="ID" width="180"></el-table-column>
    <el-table-column prop="project" label="Project" width="180"></el-table-column>
    <el-table-column prop="status" label="Status"></el-table-column>
    <el-table-column prop="project_milestone" label="Project Milestone"></el-table-column>
    <el-table-column prop="developer" label="Developer"></el-table-column>
    <el-table-column prop="this_week" label="This week"></el-table-column>
    <el-table-column prop="next_week" label="Next week"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: '1',
          project: '项目申报',
          status: '进行中',
          project_milestone: '5月10提交材料',
          developer: 'dean(PIC)',
          this_week: '已经完成demo',
          next_week: '更新内容，初步review'
        },
        {
          id: '1',
          project: '项目申报',
          status: '进行中',
          project_milestone: '5月10提交材料',
          developer: 'lucy',
          this_week: '已更新part1',
          next_week: '更新part2'
        },
        {
          id: '1',
          project: '项目申报',
          status: '进行中',
          project_milestone: '5月10提交材料',
          developer: 'lily',
          this_week: '已更新part3',
          next_week: '更新part2'
        }
      ]
    }
  },
  methods: {
    objectSpanMethod({ rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          return {
            rowspan: 6,
            colspan: 1
          }
        } else if (rowIndex === 6) {
          return {
            rowspan: 5,
            colspan: 1
          }
        } else if (rowIndex === 11) {
          return {
            rowspan: 6,
            colspan: 1
          }
        } else if (rowIndex === 17) {
          return {
            rowspan: 4,
            colspan: 1
          }
        } else if (rowIndex === 21) {
          return {
            rowspan: 1,
            colspan: 1
          }
        } else if (rowIndex === 22) {
          return {
            rowspan: 1,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      } else if (columnIndex === 1) {
        if (rowIndex === 0) {
          return {
            rowspan: 6,
            colspan: 1
          }
        } else if (rowIndex === 6) {
          return {
            rowspan: 5,
            colspan: 1
          }
        } else if (rowIndex === 11) {
          return {
            rowspan: 6,
            colspan: 1
          }
        } else if (rowIndex === 17) {
          return {
            rowspan: 4,
            colspan: 1
          }
        } else if (rowIndex === 21) {
          return {
            rowspan: 1,
            colspan: 1
          }
        } else if (rowIndex === 22) {
          return {
            rowspan: 1,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      } else if (columnIndex === 2) {
        if (rowIndex === 0) {
          return {
            rowspan: 6,
            colspan: 1
          }
        } else if (rowIndex === 6) {
          return {
            rowspan: 5,
            colspan: 1
          }
        } else if (rowIndex === 11) {
          return {
            rowspan: 6,
            colspan: 1
          }
        } else if (rowIndex === 17) {
          return {
            rowspan: 4,
            colspan: 1
          }
        } else if (rowIndex === 21) {
          return {
            rowspan: 1,
            colspan: 1
          }
        } else if (rowIndex === 22) {
          return {
            rowspan: 1,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      } else if (columnIndex === 3) {
        if (rowIndex === 0) {
          return {
            rowspan: 6,
            colspan: 1
          }
        } else if (rowIndex === 6) {
          return {
            rowspan: 5,
            colspan: 1
          }
        } else if (rowIndex === 11) {
          return {
            rowspan: 6,
            colspan: 1
          }
        } else if (rowIndex === 17) {
          return {
            rowspan: 4,
            colspan: 1
          }
        } else if (rowIndex === 21) {
          return {
            rowspan: 1,
            colspan: 1
          }
        } else if (rowIndex === 22) {
          return {
            rowspan: 1,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      } else {
        return
      }
    }
  }
}
</script>
<style scoped>
</style>