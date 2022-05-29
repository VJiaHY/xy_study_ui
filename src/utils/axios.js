import axios from 'axios'
import router from "../router/router";
// 使用element-ui Message做消息提醒
import { Message } from 'element-ui';

class HttpRequest {

    constructor (baseUrl) {
        this.baseUrl = baseUrl
        this.queue = {}
    }

    getInsideConfig () {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                Authorization: ''
            }
        }
        return config
    }

    destroy (url) {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {
            // Spin.hide()
        }
    }

    interceptors (instance, url) {

        // 请求拦截
        instance.interceptors.request.use(config => {
            // 添加全局的loading...
            if (!Object.keys(this.queue).length) {
                // Spin.show() // 不建议开启，因为界面不友好
            }
            //添加token
            if (sessionStorage.getItem("token")) {
                config.headers.Authorization  = sessionStorage.getItem("token");
            }
            this.queue[url] = true
            return config
        }, error => {
            router.push("/")
            return Promise.reject(error)
        })

        // 响应拦截
        instance.interceptors.response.use(res => {
            this.destroy(url)
            const { data } = res
            if (typeof data === 'object') {
                // 自己处理
            }
            return data
        }, error => {
            this.destroy(url)
            let errorInfo = error.response
            console.log(error.response.data.code)
            switch (error.response.data.code) {
                case 401:
                    sessionStorage.removeItem("token")
                    Message.error({
                        message: '登录超时,请重新登录!'
                    })
                    router.push('/')
            }
            if (!errorInfo) {
                const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
                errorInfo = {
                    statusText,
                    status,
                    request: { responseURL: config.url }
                }
                console.log(errorInfo)
            }
            return Promise.reject(error)
        })
    }

    request (options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}
export default HttpRequest