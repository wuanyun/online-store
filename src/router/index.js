import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from  '@/views/home/Home'
import Category from  '@/views/category/Category'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            component: Home,
            name: 'home',
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/category',
            component: Category,
            name: 'category',
            meta: {
                keepAlive: true
            }
        }
    ]
})


export default router