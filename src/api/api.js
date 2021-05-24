import axios from '@/utils/request'
export const insert = (data) => {
    return axios.request({
        url: '/insert',
        method: 'post',
        data
    })
}
export const update = (data) => {
    return axios.request({
        url: '/update',
        method: 'post',
        data
    })
}
export const getList = (params) => {
    return axios.request({
        url: '/getList',
        method: 'get',
        params
    })
}