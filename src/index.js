import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import Home from "@/components/home/index";
import About from "@/components/about/index";
import Other from "@/components/other/index";
import HomeOne from '@/components/home/homeChildOne';
import HomeTwo from '@/components/home/homeChildTwo';


Vue.use(VueRouter);//注册router

//router全局配置
const router = new VueRouter({
  routes:[
    {
        path:'/',
        component:Home,
        children:[
            {
                path:'/child1',
                component:HomeOne
            },
            {
              path:'/child2',
              component:HomeTwo
          }
        ]
    },
    {path:'/about',component:About},
    {path:'/other',component:Other}
  ]
});
//挂载
new Vue({
    el: '#app',
    router,
    render: (call) => {
        return call(App);
    }
})