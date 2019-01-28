<template>
  <el-transfer filterable 
    v-model="value3" 
    :left-default-checked="[2, 3]" 
    :right-default-checked="[1]" 
    :render-content="xrenderFunc"
    :titles="['Source', 'Target']"
    :button-texts="['到左边', '到右边']"
    :format="{
      noChecked: '${total}',
      hasChecked: '${checked}/${total}'
    }"
    @change="handleChange"
    :data="data">
    <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
    <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
  </el-transfer>
</template>

<style>
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>

<script>
  export default {
    data () {
      const generateData = _ => {
        const data = []
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${i}`,
            disabled: i % 4 === 0
          })
        }
        return data
      }
      return {
        data: generateData(),
        value3: [1],
        renderFunc (h, option) {
          return `<span>{ option.key } - { option.label }</span>`
        }
      }
    },

    methods: {
      handleChange (value, direction, movedKeys) {
        console.log(value, direction, movedKeys)
      }
    }
  }
</script>
