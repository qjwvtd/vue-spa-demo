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
		</b>
		<br>
		<b>
			commit：同步操作，写法：this.$store.commit('mutations方法名',值)
		</b>
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
        height: 300px;
        background:paleturquoise;
    }
</style>