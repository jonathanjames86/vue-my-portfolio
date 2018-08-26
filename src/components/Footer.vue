<template>
  <v-footer
    absolute="true"
    dark
    height="auto"
    app
  >
    <v-card
      flat
      tile
      class="teal lighten-1 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          dark
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Feel free to reach out. I'm always happy to help.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default Vue.extend({
  data() {
    return {
      icons: [
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-github',
      ],
    };
  },
});
</script>

<style scoped>
  .v-card {
    width: 100%;
  }
</style>