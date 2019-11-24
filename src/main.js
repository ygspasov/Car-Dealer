import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.filter("USD", function(value) {
  return `USD ${value}`;
});

Vue.filter("litresPer100km", function(value) {
  if (value) {
    return Math.round((100 * 3.785411784) / (1.609344 * value));
  }
});
Vue.filter("lbsToKg", function(value) {
  if (value) {
    return Math.round(value * 0.45359237);
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
