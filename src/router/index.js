import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddCarForm from "../components/AddCarForm.vue";
import UserProfile from "../components/User/UserProfile.vue";

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
  },
  {
    path: "/userprofile",
    name: "userprofile",
    component: UserProfile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
