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
export const SingleCarAsync = {
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

export const PostCar = {
  methods: {
    AddCar() {
      let newCar = {
        Name: this.car,
        Miles_per_Gallon: this.miles,
        Cylinders: this.cylinders,
        Displacement: this.displacement,
        Horsepower: this.horsepower,
        Weight_in_lbs: this.weight,
        Acceleration: this.acceleration,
        Year: this.date,
        Origin: this.origin,
        Price: this.price,
        Quantity: this.quantity,
        Picture: this.image,
        Bought: false,
        id: 1000
      };
      console.log(newCar);
      axios
        .post(baseURL, newCar)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
