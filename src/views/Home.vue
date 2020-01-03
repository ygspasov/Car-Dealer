<template>
  <div class="home">
    <AllCars />
  </div>
</template>

<script>
import AllCars from "../components/AllCars.vue";
export default {
  name: "home",
  components: { AllCars }
};
</script>

<style >
.home {
  margin-top: 60px;
}
</style>