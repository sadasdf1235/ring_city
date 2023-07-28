import {createWebHashHistory,createRouter,RouteRecordRaw} from 'vue-router'
const routes:Array<RouteRecordRaw> = [
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/Login.vue')
    },
    {
        path:'/',
        name:'home',
        redirect:'home',
        component:()=>import('@/views/Home.vue'),
        children:[
            {
                path:'home',
                name:'home',
                component:()=>import("@/pages/Layout.vue")
            }
        ]
    },
    {
        path:'/404',
        name:'404',
        component:()=>import('@/views/Error.vue')
    },
    {
        path:'/:pathMatch(.*)*',
        redirect:'404',
        name:'any'
    },
]
const router = createRouter({
    history:createWebHashHistory(),
    routes:routes,
    scrollBehavior:()=>{
        return {
            top:0,
            left:0
        }
    }
})
export default router