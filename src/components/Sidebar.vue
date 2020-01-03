<template>
  <v-container id="filters">
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
    <v-row>
      <v-card flat color="transparent">
        <v-card-text>
          <v-row>
            <v-col class="px-4">
              <v-range-slider
                v-model="range"
                :max="max"
                :min="min"
                hide-details
                class="align-center"
              >
                <template v-slot:prepend>
                  <v-text-field
                    :value="range[0]"
                    @change="$set(range, 0, $event)"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 80px"
                  ></v-text-field>
                </template>
                <template v-slot:append>
                  <v-text-field
                    :value="range[1]"
                    @change="$set(range, 1, $event)"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 80px"
                  ></v-text-field>
                </template>
              </v-range-slider>
              <div class="my-2">
                <v-btn small color="primary" @click="emitSliderRanges">Apply price range</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p class="px-2 indigo--text">
          Number of cars:
          <strong>{{cars.length}}</strong>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { LoadCars } from "../mixins/AsyncMixin";
export default {
  mixins: [LoadCars],
  props: ["cars"],
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
      search: "",
      min: 0,
      max: 50000,
      slider: 40,
      range: [0, 50000]
    };
  },
  methods: {
    handleClick(sortWord) {
      this.$emit("sorting", sortWord);
    },
    handleEmptySearchField() {
      this.search == "" ? this.$emit("loadCars") : "";
    },
    emitSliderRanges() {
      let lowerRange = this.range[0];
      let upperRange = this.range[1];
      this.$emit("EmittingSliderRanges", [lowerRange, upperRange]);
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
#filters .v-card {
  width: 100%;
}
</style>