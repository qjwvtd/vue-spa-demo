<template>
    <div class="other">
		<h3>{{ message }}</h3>
		<div>
			{{ $store.state.num }}
		</div>
		<button type="button" @click="setCommitNum(new Date().getTime())">click,commit方式</button>
		<button type="button" @click="setDispatchNum(Math.random())">click,dispatch方式</button>
		<h3>vuex修改组件状态commit和dispatch的区别</h3>
		<b>
			dispatch：含有异步操作，例如向后台提交数据，写法： this.$store.dispatch('action方法名',值)
			<br>
			commit：同步操作，写法：this.$store.commit('mutations方法名',值)
		</b>
		<p>
			vuex使用要点,比较坑的地方：<br/>
			1.全局store申明后要在根组件挂载时全局注册，同router用法一样;<br/>
			2.在其它组件里不要在data里返回，直接在template里使用,如：{{$store.state.data}};<br/>
			3.动态修改store时，写在methods里面的函数不能用es6函数，要用es5的写法，如：fnc_name:function(params){}
			否则会有this指向的问题，无法访问$store
		</p>
    </div>
</template>

<script>
export default {
    name: 'Other',
    data() {
        return {
            message: 'Vue的生命周期和vuex的使用'
        };
	},
	methods:{
		setCommitNum: function(num){
			this.$store.commit('change',num);
		},
		setDispatchNum: function(num){
			this.$store.dispatch('changeAction',num);
		}
	},
    beforeCreate: function() {
        const text = '------beforeCreate创建前状态------';
        console.log('','color:orange',text);
    },
    created: function() {
        const text = '------created创建完毕状态------';
        console.log('','color:orange',text);
    },
    beforeMount: function() {
        const text = '------beforeMount挂载前状态------';
        console.log('','color:orange',text);
    },
    mounted: function() {
        const text = '------mounted 挂载结束状态------';
		console.log('','color:orange',text);
		console.log(JSON.stringify(this.$store.state.num));
    },
    beforeUpdate: function () {
        const text = '------beforeUpdate 更新前状态------';
        console.log('','color:orange',text);
    },
    updated: function () {
        const text = '------updated 更新完成状态------';
        console.log('','color:orange',text);
    },
    beforeDestroy: function () {
        const text = '------beforeDestroy 销毁前状态------';
        console.log('','color:orange',text);
    },
    destroyed: function () {
        const text = '------destroyed 销毁完成状态------';
        console.log('','color:orange',text);
    }
}
</script>

<style scoped>
    .other {
        width: 100%;
        height: 600px;
        background:paleturquoise;
    }
</style>