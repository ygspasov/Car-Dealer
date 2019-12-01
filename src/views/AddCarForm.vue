<template>
  <div id="submitCar">
    <form method="post" @submit.prevent="checkForm">
      <v-text-field type="text" name="Car" label="Car" v-model="car" />
      <v-text-field
        type="number"
        name="name"
        label="Price"
        v-model.number="price"
      />
      <v-text-field
        type="number"
        name="miles"
        label="Miles per Gallon"
        v-model.number="miles"
      />
      <v-text-field
        type="number"
        name="cylinders"
        label="Cylinders"
        v-model.number="cylinders"
      />
      <v-text-field
        type="number"
        name="displacement"
        label="Displacement"
        v-model.number="displacement"
      />
      <v-text-field
        type="number"
        name="horsepower"
        label="Horsepower"
        v-model.number="horsepower"
      />
      <v-text-field
        type="number"
        name="weight"
        label="Weight in lbs"
        v-model.number="weight"
      />
      <v-text-field
        type="number"
        name="quantity"
        label="Quantity"
        v-model.number="quantity"
      />
      <v-text-field
        type="text"
        name="date"
        label="Date"
        v-model="date"
        placeholder="DD/MM/YYYY"
      />
      <v-text-field type="text" name="Origin" label="Origin" v-model="origin" />
      <v-text-field type="text" name="image" label="Image" v-model="image" />
      <v-btn class="mr-4" @click="checkForm">submit</v-btn>
      <v-btn color="error" class="mr-4" @click="resetForm">
        Reset Form
      </v-btn>
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
var moment = require("moment");
export default {
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
      image: null
    };
  },
  methods: {
    checkForm() {
      this.errors = [];
      this.success = false;
      if (!this.car) {
        this.errors.push("Car name is required!");
        return;
      } else if (this.car.length < 3) {
        this.errors.push("Car name should be at least 3 symbols!");
        return;
      } else if (!this.price) {
        this.errors.push("Car price is required!");
        return;
      } else if (
        this.price < 100 ||
        this.price > 9999999 ||
        isNaN(this.price)
      ) {
        this.errors.push("Car price should be between 3 and 7 digits!");
        return;
      } else if (this.miles < 1 || this.miles > 100 || isNaN(this.miles)) {
        this.errors.push(
          "Miles per Gallon should be between 1 and 100 digits!"
        );
        return;
      } else if (
        this.cylinders < 1 ||
        this.cylinders > 20 ||
        isNaN(this.cylinders)
      ) {
        this.errors.push("Cylinders should be between 1 and 20 digits!");
        return;
      } else if (
        this.displacement < 100 ||
        this.displacement > 1000 ||
        isNaN(this.displacement)
      ) {
        this.errors.push("Displacement should be between 100 and 1000 digits!");
        return;
      } else if (
        this.horsepower < 60 ||
        this.horsepower > 1000 ||
        isNaN(this.horsepower)
      ) {
        this.errors.push("Horsepower should be between 60 and 1000 digits!");
        return;
      } else if (
        this.weight < 1000 ||
        this.weight > 10000 ||
        isNaN(this.weight)
      ) {
        this.errors.push("Weight should be between 1000 and 10000 digits!");
        return;
      } else if (
        this.quantity < 1 ||
        this.quantity > 20 ||
        isNaN(this.quantity)
      ) {
        this.errors.push("Quantity should be between 1 and 20 digits!");
        return;
      } else if (this.origin < 3) {
        this.errors.push("Car origin should be at least 3 symbols!");
        return;
      } else if (!this.checkDate(this.date)) {
        this.errors.push("Please, provide a valid date format!");
        return;
      } else if (!this.checkImage(this.image)) {
        this.errors.push("Please, provide valid image format!");
        return;
      }
      this.success = true;
      this.errors = [];
    },
    resetForm() {
      this.car = "";
      this.price = null;
      this.miles = null;
      this.cylinders = null;
      this.displacement = null;
      this.horsepower = null;
      this.weight = null;
      this.success = false;
      this.date = null;
      this.origin = null;
      this.quantity = null;
      this.errors = [];
      this.date = null;
      this.image = null;
    },
    checkDate(date) {
      console.log(date);
      console.log(moment(date, "DD/MM/YYYY", true).isValid());
      return moment(date, "DD/MM/YYYY", true).isValid();
    },
    checkImage(url) {
      return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
    }
  }
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
