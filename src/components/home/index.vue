<template>
    <div class="home">
        <ul class="homeNav">
            <li>
                <router-link to="child1">child1</router-link>
            </li>
            <li>
                <router-link to="child2">child2</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'home'
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
        list-style: none;
    }
    .home .homeNav li{
        float: left;
        width: 120px;
        line-height: 40px;
        text-align: center;
    }
</style>



