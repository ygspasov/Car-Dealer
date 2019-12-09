<template>
  <div id="userProfile">
    <h1>User Profile</h1>
    <h2 v-if="$auth.isAuthenticated">Welcome {{userEmail|getUserName}}</h2>
    <h3 v-if="$auth.isAuthenticated">Balance: {{balance | USD}}</h3>

    <h3>Purchased cars:</h3>
    <v-container fluid>
      <v-row class="cars mt-4">
        <SingleCar v-for="(car,i) in cars" :key="i" :car="car"></SingleCar>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SingleCar from "./SingleCar";
const axios = require("axios");
const baseAccountsURL = "http://localhost:3000/accounts";
export default {
  data() {
    return {
      cars: [{ car1: "" }, { car2: "" }],
      balance: 0
    };
  },
  components: {
    SingleCar
  },
  created() {
    this.getUserBalance();
  },

  computed: {
    userEmail() {
      return this.$auth.user.email || "";
    }
  },
  methods: {
    getUserBalance() {
      let email = this.userEmail;
      axios.get(baseAccountsURL).then(response => {
        response.data.forEach(account => {
          if (account.email == email) {
            this.balance = account.balance;
          }
        });
      });
    }
  }
};
</script>

<style scoped>
#userProfile {
  margin-top: 100px;
}
h1,
h2,
h3 {
  text-align: center;
}
</style>