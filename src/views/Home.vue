<template>
  <div class="home">
    <img id="mugshot" alt="mugshot" src="../assets/mugShot.jpg">
    <HomePage msg="I'm James. And I like building things."/>
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
.home {
  min-height: 95vh;
}
#mugshot {
  border-radius: 50%;
  height: 35vh;
  margin: 2vh auto;
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
