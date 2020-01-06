<template>
  <div id="submitCar">
    <form method="post" @submit.prevent="checkForm">
      <v-text-field type="text" name="Car" label="Car" v-model="car" />
      <v-text-field type="number" name="name" label="Price" v-model.number="price" />
      <v-text-field type="number" name="miles" label="Miles per Gallon" v-model.number="miles" />
      <v-text-field type="number" name="cylinders" label="Cylinders" v-model.number="cylinders" />
      <v-text-field
        type="number"
        name="displacement"
        label="Displacement"
        v-model.number="displacement"
      />
      <v-text-field type="number" name="horsepower" label="Horsepower" v-model.number="horsepower" />
      <v-text-field type="number" name="weight" label="Weight in lbs" v-model.number="weight" />
      <v-text-field type="number" name="quantity" label="Quantity" v-model.number="quantity" />
      <v-text-field
        type="number"
        name="acceleration"
        label="Acceleration"
        v-model.number="acceleration"
      />
      <v-text-field type="text" name="date" label="Date" v-model="date" placeholder="DD.MM.YYYY" />
      <v-text-field type="text" name="Origin" label="Origin" v-model="origin" />
      <v-text-field type="text" name="image" label="Image" v-model="image" />
      <v-btn class="mr-4" @click="checkForm">submit</v-btn>
      <v-btn color="error" class="mr-4" @click="resetForm">Reset Form</v-btn>
    </form>
    <v-alert type="error" v-if="errors.length">
      <b>Please, correct the following error(s):</b>
      <ul>
        <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
      </ul>
    </v-alert>
    <v-alert type="success" v-if="success">
      <b>Your car has been added to the Car Trader!</b>
    </v-alert>
  </div>
</template>

<script>
import { ValidationMixin } from "../mixins/ValidationMixin";
import { PostCarMixin } from "../mixins/AsyncMixin";
import { NextCarIdMixin } from "../mixins/AsyncMixin";
export default {
  mixins: [ValidationMixin, PostCarMixin, NextCarIdMixin],
  data() {
    return {
      errors: [],
      success: false,
      car: "",
      price: null,
      miles: null,
      cylinders: null,
      horsepower: null,
      displacement: null,
      weight: null,
      date: null,
      origin: null,
      quantity: null,
      image: null,
      acceleration: null,
      nextCarId: 0
    };
  },

  methods: {}
};
</script>

<style scoped>
#submitCar {
  margin: 0 auto;
  margin-top: 100px;
  min-width: 400px;
}
#submitCar form {
  margin-bottom: 20px;
}
</style>
