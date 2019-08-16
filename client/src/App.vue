<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>MCDONALDS Coupon SOlver</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "App",
  components: {
    Home
  },
  data: () => ({
    //
  })
};
</script>
