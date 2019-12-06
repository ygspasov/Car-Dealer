<template>
  <div id="userProfile">
    <h1>User Profile</h1>
    <h2>Bought cars:</h2>
    <v-container fluid>
      <v-row class="cars mt-4">
        <SingleCar v-for="(car,i) in cars" :key="i" :car="car"></SingleCar>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SingleCar from "./SingleCar";
export default {
  data() {
    return {
      cars: [{ car1: "" }, { car2: "" }]
    };
  },
  components: {
    SingleCar
  }
};
</script>

<style scoped>
#userProfile {
  margin-top: 100px;
}
h1,
h2 {
  text-align: center;
}
</style>