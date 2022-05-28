import request from '@/utils/axiosReq'

export function getPreset(redirect_uri) {
  return request({
    url: '/v1/passport/preset',
    method: 'get',
    isParams: true,
    data: {redirect_uri}
  })
}

export function getCallback(code, state) {
  return request({
    url: '/v1/passport/callback',
    method: 'get',
    isParams: true,
    data: {code, state}
  })
}
