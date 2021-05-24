const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}
process.env.VUE_APP_TARGET = `http://127.0.0.1:8089`

module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8089,
        https: false,
        hotOnly: false,
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
            '/user':{
                target: 'http://localhost:8081',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/user': ''
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