<template>
    <div class="other">
        this is other page {{count}}
    </div>
</template>

<script>
import {store} from './../../store/store';
export default {
    name: 'other',
    data(){
        return {
            count:store.state.count
        };
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