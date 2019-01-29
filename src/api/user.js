import axios from '@/libs/api.request'

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: '/wechatapi/small/user/login',
    data,
    method: 'post'
  })
}

// Web login thought Weixin QR code.
export const wxlogin = ({ code }) => {
  return axios.request({
    url: '/wechatapi/small/user/login',
    params: {
      code
    },
    method: 'get'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: 'user/get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: '/wechatapi/small/user/logout',
    method: 'post'
  })
}
