import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';


//挂载
new Vue({
    el: '#app',
	router,//使用router
	store,//使用store
	components: { App },
    render: (call) => {
        return call(App);
    }
});