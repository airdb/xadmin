import request from '@/utils/axiosReq'

// 获取跳转
export function getPreset(params) {
    return request({
        url: '/v1/passport/preset',
        method: 'get',
        params
    })
}