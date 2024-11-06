import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store/store";
import Vuebar from "vuebar";
import "./plugins/base";
import VueSkycons from "vue-skycons";
import InstantSearch from "vue-instantsearch";
import VueFeather from "vue-feather";
import VueQRCodeComponent from 'vue-qrcode-component'
import VueQrcodeReader from 'vue-qrcode-reader'
import axios from "axios";

axios.interceptors.response.use(
    document.title = "Inventory",
    response => {
      window.location.reload()
      return response
    },

    error => {
      var s = window.location.pathname;
      var link = s.split('/');
      if ((error.response.status === 401) && link[1] !== 'login') {
        store.dispatch('logout');
        router.replace('/login')
      }
      return Promise.reject(error)
    }
);

Vue.prototype.$http = axios;

Vue.use(VueQrcodeReader)
Vue.use(VueFeather);
Vue.use(VueSkycons, {
  color: "#1e88e5",
});
Vue.use(InstantSearch);
Vue.config.productionTip = false;
Vue.use(Vuebar);
Vue.component('qr-code', VueQRCodeComponent)

new Vue({
  vuetify,
  store,
  router,
  axios,
  render: (h) => h(App),
}).$mount("#app");
