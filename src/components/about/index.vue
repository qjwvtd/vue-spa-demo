<template>
    <div class="about">
        <h3>this is about page</h3>
        <ul>
            <li>
                <router-link to="/about/address" exact>My Address</router-link>
            </li>
            <li>
                <router-link to="/about/phone">My Phone</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style scoped>
    .about {
        width: 100%;
        height: 300px;
        background:pink;
    }
    .about ul{
        list-style: none;
    }
    .about ul li{
        width: 50%;
        height: 60px;
        line-height: 60px;
    }
</style>