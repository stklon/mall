import {request} from './request'
//吧首页所需要的请求全部放在这里
export function getHomeMultidata() {
    return request({
        url:'/home/multidata'
    })
}