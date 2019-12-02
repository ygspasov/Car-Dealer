const axios = require("axios");
const baseURL = "http://localhost:3000/cars/";

export const LoadCars = {
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
    }
  }
};
export const SingleCarAsinc = {
  methods: {
    updatePrice() {
      this.car.Price = this.price;
      let id = this.car.id;
      const url = baseURL + id;
      axios
        .patch(url, this.car)
        .then(response => {
          this.mutableCar = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    updateQuantity() {
      this.car.Quantity = this.quantity;
      let id = this.car.id;
      const url = baseURL + id;
      axios
        .patch(url, this.car)
        .then(response => {
          this.mutableCar = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    delCar() {
      let id = this.car.id;
      const url = baseURL + id;
      console.log(url);
      axios
        .delete(url)
        .then(() => {
          this.mutableCar = null;
          this.$emit("update");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
