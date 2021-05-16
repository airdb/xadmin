/**
 * @file ajax hook conf
 */

import request from 'noahv-request';

const LiveDomain = "https://scf.baobeihuijia.com/release"
const TestDomain = "https://scf.baobeihuijia.com/test"

// 请求发出前处理，如果需要改变参数或Header，请在此修改
request.hooks.beforeRequest = config => {
    // config.url = "https://scf.baobeihuijia.com/release" + config.url
    config.url = TestDomain + config.url
    console.log("xxx", config.url)
    return config;
};

// // 收到相应后处理，如果需要改变数据，请在此修改
// request.hooks.beforeSuccess = res => {
//     return res;
// };
