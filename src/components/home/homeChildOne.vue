<template>
    <div class="homeOne">
        <button type="button" @click="setContext">click me</button>
        <p>his is home one</p>
        <p>click count {{count}}</p>
    </div>
</template>

<script>
import {store} from './../../store/store';
export default {
    name: 'homeOne',
    data(){
        return {
            count:store.state.count
        }
    },
    methods:{
        setContext(){
            store.commit('increment');
            this.count = store.state.count;
        }
    }
}
</script>

<style scoped>
    .homeOne {
        width: 100%;
        height: 300px;
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



