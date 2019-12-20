<template>
  <v-container id="button-dropdown">
    <v-row>
      <v-col cols="12">
        <v-overflow-btn
          class="my-2"
          :items="SortBy"
          label="Sort cars by"
          target="#button-dropdown"
          v-model="sortWord"
          @input="handleClick(sortWord)"
        ></v-overflow-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="search">
          <v-text-field
            v-model.trim="search"
            @input="$emit('searchInput', search)"
            label="Find a car"
            @keyup="handleEmptySearchField"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { LoadCars } from "../mixins/AsyncMixin";
export default {
  mixins: [LoadCars],
  data() {
    return {
      SortBy: [
        "By name ascending",
        "By name descending",
        "By price ascending",
        "By price descending",
        "By horsepower ascending",
        "By horsepower descending",
        "By origin ascending",
        "By origin descending",
        "By cylinders ascending",
        "By cylinders descending",
        "By displacement ascending",
        "By displacement descending",
        "By weight ascending",
        "By weight descending",
        "By miles per gallon ascending",
        "By miles per gallon descending"
      ],
      sortWord: "",
      search: ""
    };
  },
  methods: {
    handleClick(sortWord) {
      this.$emit("sorting", sortWord);
    },
    handleEmptySearchField() {
      this.search == "" ? this.$emit("loadCars") : console.log("not empty");
    }
  }
};
</script>

<style>
.search #input-21 {
  margin: 4px 0;
  padding-left: 10px;
}
.search label {
  padding-left: 16px;
}
</style>