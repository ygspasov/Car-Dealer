<template>
  <div id="main">
    <h1>All cars</h1>
    {{ cars }}
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      cars: []
    };
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
