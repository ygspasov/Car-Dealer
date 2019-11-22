<template>
  <div id="main">
    <h1>All cars</h1>
    <v-container fluid>
      <v-row>
        <SingleCar v-for="(car, i) of cars.slice(0, 20)" :key="i" :car="car">{{
          car.Name
        }}</SingleCar>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const axios = require("axios");
import SingleCar from "./SingleCar";
export default {
  data() {
    return {
      cars: []
    };
  },
  components: {
    SingleCar
  },
  created() {
    this.loadCars();
  },
  methods: {
    loadCars() {
      axios
        .get("http://localhost:3000/cars")
        .then(response => {
          this.cars = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
      return "";
    }
  }
};
</script>

<style></style>
