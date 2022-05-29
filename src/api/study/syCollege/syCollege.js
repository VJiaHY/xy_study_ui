import axios from '@/utils/request'


export const collegeList = () => {

    return axios.request({
        url: '/show/college/collegeList',
        method: 'get',
    })
}