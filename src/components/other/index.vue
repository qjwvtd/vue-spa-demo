<template>
    <div class="other">
        this is other page {{count}}
    </div>
</template>

<script>
import {index} from '../../store';
export default {
    name: 'Other',
    data(){
        return {
            count:index.state.count
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