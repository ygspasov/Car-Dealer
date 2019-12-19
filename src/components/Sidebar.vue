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
  </v-container>
</template>

<script>
export default {
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
      sortWord: ""
    };
  },
  methods: {
    handleClick(sortWord) {
      this.$emit("sorting", sortWord);
    }
  }
};
</script>

<style>
</style>