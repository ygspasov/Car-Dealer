import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddCarForm from "../components/AddCarForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/addcarform",
    name: "addcarform",
    component: AddCarForm
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
