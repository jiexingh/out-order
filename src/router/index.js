import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('../views/home.vue')
        }, {
            path: '/detail',
            component: () => import('../views/detail.vue')
        },
        {
            path: '/add',
            component: () => import('../views/add.vue')
        },
        {
            path: '/my',
            component: () => ('../views/my/my.vue')
        }
    ]

});

export default router