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
        "By manufacturer",
        "By horsepower",
        "By origin",
        "By cylinders",
        "By displacement",
        "By weight",
        "By miles per gallon"
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