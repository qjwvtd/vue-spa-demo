<template>
  <div id="app">
    <ul class="navigation">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/other">Other</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style scoped>
  *{margin: 0;padding: 0}
  a{text-decoration: none;outline: none}
  #app{
    width: 600px;
  }
  .navigation{
      overflow: hidden;
      width: 100%;
      list-style: none;
  }
  .navigation li{
      width: 33.3333%;
      float: left;
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
