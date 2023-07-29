import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router'
import { getToken } from '@/utils/storage'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/',
        redirect: 'home',
        component: () => import('@/views/Home.vue'),
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import("@/pages/Layout/Layout.vue")
            },
            {
                path: 'invoice',
                name: 'invoice',
                component: () => import("@/pages/InvoiceList.vue")
            },
            {
                path: 'pm',
                name: 'pm',
                component: () => import("@/pages/PM.vue")
            },
            {
                path: 'retrieval',
                name: 'retrieval',
                component: () => import("@/pages/Retrieval.vue")
            },
        ]
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/Error.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '404',
        name: 'any'
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    scrollBehavior: () => {
        return {
            top: 0,
            left: 0
        }
    }
})
router.beforeEach((to, from, next) => {
    const isToken: boolean = getToken() != ''
    next()
})
export default router