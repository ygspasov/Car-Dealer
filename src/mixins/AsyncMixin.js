const axios = require("axios");
const baseURL = "http://localhost:3000/cars/";

export const LoadCars = {
  methods: {
    loadCars() {
      axios
        .get("http://localhost:3000/cars")
        .then(response => {
          console.log("updating");
          this.cars = response.data;
          this.updateVisibleCars();
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
        })
        .catch(function(error) {
          console.log(error);
        })
        .finally(() => {
          this.$emit("update");
        });
    }
  }
};

export const PostCarMixin = {
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
        id: null
      };
      axios.post(baseURL, newCar);
    }
  }
};

export const NextCarIdMixin = {
  mounted: function() {
    axios.get("http://localhost:3000/cars").then(response => {
      this.nextCarId = response.data.length;
    });
  }
};
