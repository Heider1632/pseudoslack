import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import firebase from "./firebase.js";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

firebase.auth.onAuthStateChanged(function() {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});
