import axios from '@/utils/request'


export const collegeList = () => {

    return axios.request({
        url: '/college/collegeList',
        method: 'get',
    })
}