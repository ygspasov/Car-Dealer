<template>
  <v-app-bar app color="primary" dark>
    <nav class="d-flex align-center">
      <router-link tag="a" class="indigo--text text--lighten-5 headline" to="/">Car Dealer</router-link>
      <router-link
        to="/addcarform"
        class="indigo--text text--lighten-4 subtitle-1"
        tag="a"
      >Sell your car</router-link>
      <router-link tag="a" to="/userprofile" class="indigo--text text--lighten-4 subtitle-1">Profile</router-link>
    </nav>
    <v-spacer></v-spacer>

    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <v-btn class="indigo lighten-5 indigo--text" v-if="!$auth.isAuthenticated" @click="login">
        <v-icon v-if="!$auth.isAuthenticated" class="shrink mr-2">face</v-icon>Log in
      </v-btn>
      <!-- show logout when authenticated -->

      <v-btn class="indigo lighten-4 indigo--text" v-if="$auth.isAuthenticated" @click="logout">
        <v-icon v-if="$auth.isAuthenticated" class="shrink mr-2">done</v-icon>Log out
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      email: this.$auth.user.email
    };
  },
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

<style scoped>
#app nav a {
  text-decoration: none;
  margin-left: 20px;
}
</style>
