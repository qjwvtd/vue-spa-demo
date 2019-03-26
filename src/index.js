import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import router from '@/router';


//挂载
new Vue({
    el: '#app',
    router,
    render: (call) => {
        return call(App);
    }
})