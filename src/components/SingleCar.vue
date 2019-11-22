<template>
  <v-col class="single-car" cols="12" sm="6" md="4" lg="3" xl="2">
    <v-card class="mx-auto my-2" max-width="400">
      <v-img class="white--text align-end" height="200px" :src="car.Picture">
        <v-card-title>{{ car.Name }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text>
          Share
        </v-btn>

        <v-btn color="orange" text>
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    car: { type: Object }
  },
  data() {
    return {};
  }
};
</script>

<style></style>
