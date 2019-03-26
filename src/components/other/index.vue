<template>
    <div class="other">
        this is other page {{count}}
        <div>{{message}}</div>
    </div>
</template>

<script>
import {index} from '../../store';
export default {
    name: 'Other',
    data() {
        return {
            count: index.state.count,
            message: 'Vue的生命周期'
        };
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