<template>
  <v-app id="app">
    <v-toolbar flat>
      <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="display-1" style="color: #26A69A;">JP</v-toolbar-title>
      <v-toolbar-title class="font-weight-light">Develper. Designer. Artist.</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn id="navtab" to="/" flat>Logo</v-btn>
        <v-btn to="/about" flat>About</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container fluid>
      <router-view/>
    </v-container>
    <Footer />
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Footer from '@/components/Footer.vue'; // @ is an alias to /src
  export default Vue.extend({
        components: {
        Footer,
    },
  });
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
    text-decoration: none;
  }
  
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  #nav a.router-link-exact-active {
    color: rgb(1, 144, 134);
  }
</style>
