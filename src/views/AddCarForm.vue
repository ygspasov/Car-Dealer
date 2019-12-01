<template>
  <div id="submitCar">
    <form method="post" @submit.prevent="checkForm">
      <v-text-field
        id="name"
        type="text"
        name="Car"
        label="Car"
        v-model="car"
      />
      <v-text-field
        id="name"
        type="text"
        name="name"
        label="Price"
        v-model.number="price"
      />
      <v-text-field
        id="miles"
        type="text"
        name="miles"
        label="Miles per Gallon"
        v-model.number="miles"
      />
      <v-btn class="mr-4" @click="checkForm">submit</v-btn>
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
export default {
  data() {
    return {
      errors: [],
      success: false,
      car: "",
      price: null,
      miles: null
    };
  },
  methods: {
    checkForm() {
      if (this.car && this.age) {
        return true;
      } else if (!this.car) {
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
      }
      this.success = true;
      this.errors = [];
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
