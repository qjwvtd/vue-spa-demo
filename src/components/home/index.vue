<template>
    <div class="home">
        <div>
            <router-link to="child1">child1</router-link>
            <router-link to="child2">child2</router-link>
        </div>
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
</style>



