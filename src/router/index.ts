import {createRouter, createWebHistory} from 'vue-router'
import ProjectCreate from "@/views/projectCreate/index.vue";
import Dashboard from "@/views/dashboard/index.vue";
import Home from "@/views/home/index.vue";
import dashboardHome from "@/views/dashboard/home.vue";
import dashboardProject from "@/views/dashboard/project.vue";
import dashboardSetting from "@/views/dashboard/setting.vue";
import projectConfig from "@/views/projectConfig/index.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path:"/dashboard",
            name:"仪表盘",
            component:Dashboard,
            children:[
                {
                    // 首页
                    path:"",
                    name:"首页",
                    component:dashboardHome
                },
                {
                    path:"project",
                    name:"项目",
                    component:dashboardProject
                },
                {
                    path:"setting",
                    name:"设置",
                    component:dashboardSetting
                }
            ]
        },
        {
            path:"/projectCreate",
            name:"项目创建",
            component:ProjectCreate
        },
        {
            path:"/projectConfig",
            name:"项目配置详情",
            component:projectConfig
        }
    ]
})

export default router
