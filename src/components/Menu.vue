<template>
  <v-app-bar app color="primary" dark>
    <v-icon id="mobileIcon" class="ml-2" @click="showMenu=!showMenu">menu</v-icon>
    <nav class="d-flex align-center">
      <div class="menu" v-bind:class="{ hideShowMenu: !showMenu }" @click="showMenu=!showMenu">
        <router-link tag="a" class="indigo--text text--lighten-5 headline" to="/">Car Dealer</router-link>
        <router-link
          v-if="$auth.isAuthenticated"
          to="/addcarform"
          class="indigo--text text--lighten-4 subtitle-1"
          tag="a"
        >Sell your car</router-link>
        <router-link
          tag="a"
          to="/userprofile"
          class="indigo--text text--lighten-4 subtitle-1"
          v-if="$auth.isAuthenticated"
        >Profile</router-link>
      </div>
    </nav>
    <v-spacer></v-spacer>

    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <v-btn class="indigo lighten-5 indigo--text" v-if="!$auth.isAuthenticated" @click="login">
        <v-icon v-if="!$auth.isAuthenticated" class="shrink mr-2">face</v-icon>Log in
      </v-btn>
      <!-- show logout when authenticated -->

      <v-btn
        class="indigo lighten-4 indigo--text mr-2"
        v-if="$auth.isAuthenticated"
        @click="logout"
      >
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
      email: this.$auth.user.email,
      showMenu: true
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
  cursor: pointer;
}
#mobileIcon {
  display: none;
  cursor: pointer;
}
@media only screen and (max-width: 600px) {
  #mobileIcon {
    display: block;
  }
  header {
    position: relative;
  }
  nav {
    width: 100%;
    display: block;
  }
  .menu {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    background: #3f51b5;
  }
  .hideShowMenu {
    display: none;
  }
  .menu > a {
    display: block;
    padding: 10px 0;
  }
  .v-toolbar__content {
    padding: 0;
  }
}
</style>
