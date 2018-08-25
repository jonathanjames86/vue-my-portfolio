<template>
  <div id="app">
    <div id="nav">
      <div id="navtab">
        <router-link to="/">Logo</router-link>
      </div>
      <div id="navtab">
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend();
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  #nav {
    display: grid;
    grid-template-columns: auto auto;
    text-align: left;
    padding: 15px;
  }
  
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  #nav a.router-link-exact-active {
    color: rgb(1, 144, 134);
  }
</style>
