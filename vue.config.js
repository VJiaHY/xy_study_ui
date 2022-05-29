const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}
process.env.VUE_APP_TARGET = `http://127.0.0.1:8844`

module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8090,
        disableHostCheck: true,
        proxy: {
            // 配置跨域
         /*   '/api': {
                target: 'http://localhost:8089/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },*/
            '/show':{
                target: 'http://localhost:8089',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/show': ''
                }
            },
            '/sys':{
                target: 'http://localhost:8844/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/sys': '/sys'
                }
            }
        },
        before: app => { }
    },
    chainWebpack: config => {
        // key,value自行定义
        config.resolve.alias.set('@', resolve('src'))
    },
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    },
};