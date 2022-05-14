import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [
    {
      id: '@id',
      letter: '@integer(1, 52)',
      name: '@name',
      next: '@name',
      seq: '@integer(300, 5000)',
      createTime: '@date',
      updateTime: '@date',
    }
  ]
})

export default [
  {
    url: '/integration-front/brand/selectPage',
    method: 'get',
    response: () => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          records: items
        }
      }
    }
  },
]
