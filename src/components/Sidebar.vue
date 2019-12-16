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
      {{sortWord}}
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      SortBy: [
        "By model",
        "By price ascending",
        "By price descending",
        "By manufacturer"
      ],
      sortWord: ""
    };
  },
  methods: {
    handleClick(sortWord) {
      console.log("sortWord: " + sortWord);
    }
  }
};
</script>

<style>
</style>