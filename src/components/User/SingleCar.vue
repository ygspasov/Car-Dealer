<template>
  <v-col class="single-car" cols="12" sm="6" md="4" lg="3" xl="2">
    <v-card class="mx-auto my-2 indigo lighten-4" max-width="400">
      <v-img class="white--text align-end" height="200px" :src="car.Picture">
        <v-card-title class="text-capitalize">car.Name</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0 headline indigo--text text--darken-4">car.Price | USD</v-card-subtitle>

      <v-card-text class="white--text mt-2 body-3 indigo pt-3 card-text">
        <div class="miles">
          <div class="ml">Miles per Gallon: car.Miles_per_Gallon</div>
          <div class="km">Liters per 100km: car.Miles_per_Gallon | litresPer100km</div>
          <v-switch class="ml-5"></v-switch>
        </div>

        <div>Cylinders: car.Cylinders</div>
        <div>Displacement: car.Displacement</div>
        <div>Horsepower: car.Horsepower</div>
        <div class="lbs">
          <div>Weight in lbs: car.Weight_in_lbs</div>
          <div>Weight in kg: car.Weight_in_lbs | lbsToKg</div>
          <v-switch class="ml-5"></v-switch>
        </div>

        <div>Year: car.Year | formatDate</div>
        <div>Origin: car.Origin</div>
        <div>Quantity: car.Quantity</div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    car: { type: Object }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.miles,
.lbs {
  content: "";
  clear: both;
  display: table;
  width: 100%;
  padding-right: 10%;
}
.miles .km,
.miles .ml {
  float: left;
}
.card-text .v-input,
.lbs v-input {
  float: right;
  height: 22px;
  padding-top: 0;
  margin-top: 0;
}

.lbs > div {
  float: left;
}
div > input {
  width: 70%;
}
div .v-btn {
  width: 30%;
  padding-right: 5px;
}
</style>
