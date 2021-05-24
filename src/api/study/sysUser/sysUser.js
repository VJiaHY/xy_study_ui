import axios from '@/utils/request'


export const getUserList = (query) => {

    return axios.request({
        url: '/user/searchPage',
        method: 'get',
        params: query
    })
}


export const delObj  = (id) => {
    return axios.request({
        url: '/user/delObj/'+id,
        method: 'delete'

    })
}


export const findUser = () => {
    return axios.request({
        url: '/user/find',
        method: 'get',
    })
}

