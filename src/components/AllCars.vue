<template>
  <div id="main">
    <h1>All cars</h1>
    <v-container fluid>
      <v-row>
        <SingleCar v-for="(car, i) of visibleCars.slice(0,50)" :key="i" :car="car">
          {{
          car.Name
          }}
        </SingleCar>
      </v-row>
    </v-container>
    <div class="text-center">
      <v-pagination total-visible="7" v-model="page" class="my-4" :length="paginationTabs"></v-pagination>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import SingleCar from "./SingleCar";
export default {
  data() {
    return {
      cars: [],
      page: 0,
      pageSize: 17,
      visibleCars: [],
      paginationTabs: 0
    };
  },
  components: {
    SingleCar
  },
  watch: {
    page: function() {
      this.visibleCars = this.cars.slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
    }
  },
  created() {
    this.loadCars();
  },
  beforeMount: function() {
    this.updateVisibleCars();
  },
  methods: {
    loadCars() {
      axios
        .get("http://localhost:3000/cars")
        .then(response => {
          this.cars = response.data;
          this.updateVisibleCars();
          this.getNumberOfTabs();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    updateVisibleCars() {
      this.visibleCars = this.cars.slice(
        this.page * this.pageSize,
        this.page * this.pageSize + this.pageSize
      );
    },
    updatePage(pageNumber) {
      this.page = pageNumber;
    },
    getNumberOfTabs() {
      this.paginationTabs = Math.ceil(this.cars.length / this.pageSize);
    }
  }
};
</script>

<style></style>
