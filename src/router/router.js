

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/login.vue'
/*import Blog from '../views/blog.vue'
import BlogEdit from '../views/blogEdit.vue'
import BlogDetail from '../views/blogDetail.vue'*/

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
/*    {
        path: '/Blog',
        name: 'Blog',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Blog
    },
    {
        path: '/Blog/Edit',
        name: 'BlogAdd',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: BlogEdit
    },
    {
        path: '/Blog/Edit/:BlogId',
        name: 'BlogEdit',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: BlogEdit
    },
    {
        path: '/Blog/Detail/:BlogId',
        name: 'BlogDetail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: BlogDetail
    }*/
]

const router = new VueRouter({
    routes
})

new Vue({
    router,

}).$mount('#app')
// export default router

