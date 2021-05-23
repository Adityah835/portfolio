import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Projects',
        name: 'Projects',
        component: () => import (/*webpackChunkName: "projects"*/ './views/Projects.vue')
    },
    {
        path: '/About-This-Page',
        name: 'About This Page',
        component: () => import (/*webpackChunkName: "About-This-Page"*/ './views/AboutThisPage.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    next()
})

export default router