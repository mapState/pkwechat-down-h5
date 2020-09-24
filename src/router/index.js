import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        component: () =>
            import ( /* webpackChunkName: "home" */ '../views/index.vue'),
        meta: {
            title: '媲客'
        }
    }
]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router