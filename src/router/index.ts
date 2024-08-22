import {createRouter, createWebHistory} from 'vue-router'
import ProjectCreate from "@/views/projectCreate/index.vue";
import Home from "@/views/home/index.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path:"/projectCreate",
            name:"项目创建",
            component:ProjectCreate
        }
    ]
})

export default router
