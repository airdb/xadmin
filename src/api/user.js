import request from '@/utils/axiosReq'

export function loginReq(data) {
    return request({
        url: '/v1/passport/login',
        data,
        method: 'post',
        bfLoading: false,
        isParams: true,
        isAlertErrorMsg: false
    })
}

export function getInfoReq() {
    return request({
        url: '/v1/passport/profile',
        bfLoading: false,
        method: 'post',
        isAlertErrorMsg: false
    })
}

export function logoutReq() {
    return request({
        url: '/v1/passport/logout',
        method: 'post'
    })
}