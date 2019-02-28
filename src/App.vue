<template>
  <div id="app">
    <div class="navigation">
      <span><router-link to="/">Home</router-link></span>
      <span><router-link to="/about">About</router-link></span>
      <span><router-link to="/other">Other</router-link></span>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style scoped>
  *,p{margin: 0;padding: 0}
  a{text-decoration: none;outline: none}
  #app{
    width: 600px;
  }
  .navigation{
      overflow: hidden;
      width: 100%;
      list-style: none;
  }
  .navigation span{
      float: left;
      width: 33.3333%;
      height: 50px;
      line-height: 50px;
      text-align: center;
  }
  .navigation li a{
      display: block;
      cursor: pointer;
      background: #ffffff;
      color: #000;
  }
  .navigation li a:hover{
      color: papayawhip;
      background: purple;
  }
</style>
