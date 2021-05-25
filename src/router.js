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
        path: '/Career-Profile',
        name: 'Career-Profile',
        component: () => import(/*webpackChunkName: "Career-Profile"*/ './views/CareerProfile.vue')
    },
    {
        path: '/Projects',
        name: 'Projects',
        component: () => import (/*webpackChunkName: "Projects"*/ './views/Projects.vue')
    },
    {
        path: '/About-This-Portal',
        name: 'About This Portal',
        component: () => import (/*webpackChunkName: "About-This-Portal"*/ './views/AboutThisPortal.vue')
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