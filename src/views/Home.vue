<template>
  <div class="home">
    <h1></h1>
    <img id="mugshot" alt="mugshot" src="../assets/mugShot.jpg">
    <div id="social-media">
      <img class="svg" src="../assets/github.svg" alt="gitHub">
      <img class="svg" src="../assets/linkedin.svg" alt="Kiwi standing on oval">
      <img class="svg" src="../assets/twitter.svg" alt="Kiwi standing on oval">
    </div>
    <HomePage msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomePage from '@/components/HomePage.vue'; // @ is an alias to /src

@Component({
  components: {
    HomePage,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
#mugshot {
  border-radius: 50%;
  height: 35vh;
  margin: 2vh auto 0;
}

#social-media {
  padding: 5px;
  width: 20vh;
  height: 4vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto;
}

.svg {
  height: 4vh;
  justify-self: center;
}
</style>
