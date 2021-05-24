import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({  })
store.registerModule('$vux', { // 名字自己定义




    state: {//设置属性
        headerTitle: '',
    },
    getters: { // getters 用来获取sate里面存储的数据

    },
    mutations: {//更改属性的状态//返回来会有两个状态一个是上面的state,还有一个是返回来的状态(形参),返回之后将我们请求回来的数据赋给state
        getHeaderTitle(state, obj) {
            state.headerTitle = obj.headerTitle
        },
    },



})

export default store
