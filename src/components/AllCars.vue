<template>
  <div id="main">
    <h1>All cars</h1>

    <v-container fluid>
      <v-row :key="componentKey">
        <v-col cols="12" sm="4" md="3">
          <Sidebar @sorting="sortCars" />
        </v-col>

        <v-col cols="12" sm="8" md="9">
          <v-row>
            <SingleCar
              v-for="(car, i) of visibleCars.slice(0,50)"
              :key="i"
              :car="car"
              @update="loadCars"
            >
              {{
              car.Name
              }}
            </SingleCar>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center" id="pagination">
      <v-tabs>
        <v-tab @click="changePageSize(10)">Show 10</v-tab>
        <v-tab @click="changePageSize(20)">Show 20</v-tab>
        <v-tab @click="changePageSize(30)">Show 30</v-tab>
      </v-tabs>
      <v-pagination total-visible="7" v-model="page" class="my-4" :length="paginationTabs"></v-pagination>
    </div>
  </div>
</template>

<script>
import SingleCar from "./SingleCar";
import Sidebar from "./Sidebar";
import { LoadCars } from "../mixins/AsyncMixin";
export default {
  mixins: [LoadCars],
  data() {
    return {
      cars: [],
      page: 0,
      pageSize: 12,
      visibleCars: [],
      paginationTabs: 0,
      componentKey: 0
    };
  },
  components: {
    SingleCar,
    Sidebar
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
    },
    changePageSize(size) {
      this.page = 1;
      this.pageSize = size;
      this.updateVisibleCars();
      this.getNumberOfTabs();
    },
    updateComp() {
      this.loadCars();
    },
    sortCars(sortWord) {
      switch (sortWord) {
        case "By name ascending":
          this.sortByNameAscending();
          break;
        case "By name descending":
          this.sortByNameDescending();
          break;
        case "By price ascending":
          this.sortByPrice();
          break;
        case "By price descending":
          break;
        case "By manufacturer":
          break;
        default:
          break;
      }
    },
    sortByNameAscending() {
      this.cars.sort(this.byNameAscending);
      this.updateVisibleCars();
    },
    sortByNameDescending() {
      this.cars.sort(this.ByNameDescending);
      this.updateVisibleCars();
    },
    byNameAscending(a, b) {
      if (a.Name < b.Name) {
        return -1;
      }
      if (a.Name > b.Name) {
        return 1;
      }
      return 0;
    },
    ByNameDescending(a, b) {
      if (a.Name > b.Name) {
        return -1;
      }
      if (a.Name < b.Name) {
        return 1;
      }
      return 0;
    },
    sortByPrice() {
      console.log("sorting by price ascending");
    },
    forceRerender() {
      this.componentKey++;
    }
  }
};
</script>

<style>
#pagination .v-slide-group__content,
.cars {
  display: flex;
  justify-content: center;
}
#pagination {
  margin: 0 auto;
}

#pagination .v-tabs {
  background: #90caf9;
}
.v-slide-group__content.v-tabs-bar__content {
  background: #3f51b5;
  color: white;
}
#pagination .v-tab {
  color: white;
}
</style>
