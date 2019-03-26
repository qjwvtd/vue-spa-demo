<template>
    <div class="home">
        <div class="homeNav">
            <router-link to="child1">homeModuleOne</router-link>
            <router-link to="child2">homeModuleTwo</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
    .home {
        width: 100%;
        height: 300px;
        background: peru;
    }
    .home .homeNav{
        overflow: hidden;
    }
    .home .homeNav a{
        float: left;
        width: 120px;
        line-height: 40px;
        text-align: center;
    }
</style>



