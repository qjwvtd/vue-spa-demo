<template>
    <div class="homeOne">
        <button type="button" @click="setContext">click me</button>
        <p>this is home one</p>
        <p>click count {{count}}</p>
    </div>
</template>

<script>
import {index} from '@/store';
export default {
    name: 'HomeOne',
    data(){
        return {
            count:index.state.count
        }
    },
    methods:{
        setContext(){
            index.commit('increment');
            this.count = index.state.count;
        }
    }
}
</script>

<style scoped>
    .homeOne {
        width: 100%;
        height: 300px;
        line-height: 100px;
        text-align: center;
        background: #cccccc;
    }
    .homeOne button{
        margin: 30px 0 0 0;
        padding: 5px 15px;
    }
    .homeOne p{
        line-height: 60px;
    }
</style>



