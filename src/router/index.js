import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/components/home/index";
import About from "@/components/about/index";
import Other from "@/components/other/index";
import HomeOne from '@/components/home/homeChildOne';
import HomeTwo from '@/components/home/homeChildTwo';
import AboutPhone from '@/components/about/aboutPhone'
import AboutAddress from '@/components/about/aboutAddress'

Vue.use(VueRouter);//注册router

//router全局配置
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: '/homeOne',
                    component: HomeOne
                },
                {
                    path: '/homeTwo',
                    component: HomeTwo
                }
            ]
        },
        {
            path: '/about',
            component: About,
            children:[
                {
                    path: '/about/address',
                    component: AboutAddress
                },
                {
                    path: '/about/phone',
                    component: AboutPhone
                }
            ]
        },
        {path: '/other', component: Other}
    ]
});
export default router;