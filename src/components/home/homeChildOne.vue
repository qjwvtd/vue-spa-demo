<template>
    <div class="homeOne">
        <p>this is home one</p>
        <p>click count {{$store.state.num}}</p>
    </div>
</template>

<script>
export default {
    name: 'HomeOne',
    data(){
        return {}
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



