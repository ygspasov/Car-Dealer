<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <h1 class=" indigo--text text--lighten-4 ">Car Dealer</h1>
    </div>

    <v-spacer></v-spacer>

    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <v-btn
        class="indigo lighten-5 indigo--text "
        v-if="!$auth.isAuthenticated"
        @click="login"
        ><v-icon v-if="!$auth.isAuthenticated" class="shrink mr-2 ">face</v-icon
        >Log in</v-btn
      >
      <!-- show logout when authenticated -->

      <v-btn
        class=" indigo lighten-4 indigo--text"
        v-if="$auth.isAuthenticated"
        @click="logout"
        ><v-icon v-if="$auth.isAuthenticated" class="shrink mr-2 ">done</v-icon
        >Log out</v-btn
      >
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "home",
  components: {},
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>

<style></style>
