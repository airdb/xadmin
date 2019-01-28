import axios from '@/libs/api.request'

export const getArticleList = () => {
  return axios.request({
    url: '/wechatapi/small/article/summary',
    method: 'get'
  })
}

