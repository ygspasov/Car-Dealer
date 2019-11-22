<template>
  <v-app>
    <Menu></Menu>
    <!-- <v-content> </v-content> -->
    <router-view></router-view>
  </v-app>
</template>

<script>
import Menu from "./components/Menu";
export default {
  name: "App",

  components: { Menu },

  data: () => ({
    //
  })
};
</script>
