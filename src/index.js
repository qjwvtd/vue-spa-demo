import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import home from "./components/home/index";
import about from "./components/about/index";
import other from "./components/other/index";
import homeOne from './components/home/homeChildOne';
import homeTwo from './components/home/homeChildTwo';


Vue.use(VueRouter);//注册router

const router = new VueRouter({
  routes:[
    {
        path:'/home',
        component:home,
        children:[
            {
                path:'/child1',
                component:homeOne
            },
            {
              path:'/child2',
              component:homeTwo
          }
        ]
    },
    {path:'/about',component:about},
    {path:'/other',component:other}
  ]
});

new Vue({
    el: '#app',
    router,
    render: (call) => {
        return call(App);
    }
})