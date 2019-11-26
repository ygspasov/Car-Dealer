<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <v-btn class="white indigo--text" v-if="!$auth.isAuthenticated" @click="login">Log in</v-btn>
      <!-- show logout when authenticated -->
      <v-btn class="white indigo--text" v-if="$auth.isAuthenticated" @click="logout">Log out</v-btn>
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
