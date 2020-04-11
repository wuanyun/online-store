import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from  '@/views/home/Home'
import Category from  '@/views/category/Category'
import Detail from  '@/views/detail/Detail'
import Cart from  '@/views/cart/Cart'
import Profile from  '@/views/profile/Profile'

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
                keepAlive: false
            }
        },
        {
            path: '/cart',
            component: Cart,
            name: 'cart',
            meta: {
                keepAlive: false
            }
        },
        {
            path: '/detail',
            component: Detail,
            name: 'detail',
            meta: {
                keepAlive: false
            }
        },
        {
            path: '/profile',
            component: Profile,
            name: 'profile',
            meta: {
                keepAlive: false
            }
        }
    ]
})


export default router