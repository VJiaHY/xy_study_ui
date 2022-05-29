

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/login.vue'
import User from '../views/study/sysUser/index'
import Registration from '../views/study/sys/registration/index'
import SYSubwayMap  from '../views/study/SYSubwayMap/index'
/*import Blog from '../views/blog.vue'
import BlogEdit from '../views/blogEdit.vue'
import BlogDetail from '../views/blogDetail.vue'*/

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/user',
        name: 'user',
        component: User
    },

    {
        path: '/SYSubwayMap',
        name: 'SYSubwayMap',
        component: SYSubwayMap
    },
    {
        path: '/registration',
        name: 'registration',
        component: Registration
    }
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
    routes:routes,
    modal:"hash"
})

export default router


