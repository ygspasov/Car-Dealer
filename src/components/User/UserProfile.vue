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
import { LoadCars } from "../../mixins/AsyncMixin";
const axios = require("axios");
const baseAccountsURL = "http://localhost:3000/accounts";
const baseURL = "http://localhost:3000/cars";
export default {
  mixins: [LoadCars],
  data() {
    return {
      cars: [],
      balance: 0
    };
  },
  components: {
    SingleCar
  },
  created() {
    this.getUserBalance();
    this.loadCars();
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
    },
    loadCars() {
      axios
        .get(baseURL)
        .then(response => {
          response.data.forEach(car => {
            if (car.Bought) {
              this.cars.push(car);
            }
          });
          // this.updateVisibleCars();
          // this.getNumberOfTabs();
        })
        .catch(function(error) {
          console.log(error);
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