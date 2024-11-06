import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Sidebar_drawer: null,
    Customizer_drawer: false,
    SidebarColor: "white", //Change Sidebar Color || 'white', | "#2b2b2b" | "rgb(44, 59, 164)" | "rgb(96, 44, 164)" | "rgb(151, 210, 219)" | "rgb(77, 86, 100)"
    SidebarBg: "",
    navbarColor: "#fafafa",
    setHorizontalLayout: false, // Horizontal layout
    // State for user
    user: "",
    token: sessionStorage.getItem('token') || null,
    status: "",
    roles: JSON.parse(sessionStorage.getItem('roles')) || null,
    loading: false,
  },
  mutations: {
    SET_SIDEBAR_DRAWER(state, payload) {
      state.Sidebar_drawer = payload;
    },
    SET_CUSTOMIZER_DRAWER(state, payload) {
      state.Customizer_drawer = payload;
    },
    SET_SIDEBAR_COLOR(state, payload) {
      state.SidebarColor = payload;
    },
    SET_NAVBAR_COLOR(state, payload) {
      state.navbarColor = payload;
    },
    SET_LAYOUT(state, payload) {
      state.setHorizontalLayout = payload;
    },

    // For User
    auth_request(state) {
      state.status = "loading";
    },

    auth_success(state, { user, token }) {
      state.user = user;
      state.token = token;
      state.status = "success";
    },
    auth_error(state) {
      state.status = "error";
    },
    set_user(state, user) {
      state.user = user;
    },
    set_token(state, token) {
      state.token = token;
    },
  },
  actions: {
    // Login
    login({ commit }, user) {
      // var router = this.$router
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios
            .post("/login", user, {
              headers: {
                "Content-type": "application/json",
              },
            })
            .then((resp) => {
              const token = resp.data.token;
              const role = resp.data.role
              console.log(resp.data)
              sessionStorage.setItem("token", token);
              sessionStorage.setItem('role', role)
              axios.defaults.headers.common["Authorization"] = "Bearer " + token;
              commit("auth_success", { token, user, role });
              resolve(resp);
              // console.log(roles[0])
              // if (roles[0] == 'LP3M'){
              //   router.push('/admin')
              // } else if (roles[0] == 'GKM'){
              //   router.push('/gkm')
              // }
            })
            .catch((err) => {
              commit("auth_error");
              sessionStorage.removeItem("token");
              sessionStorage.removeItem('roles')
              reject(err);
            });
      });
    },

    logout({ commit }) {
      commit('logout')
      localStorage.removeItem('token')
      localStorage.removeItem('roles')
      delete axios.defaults.headers.common['Authorization']
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    token: (state) => state.token,
    authStatus: (state) => state.status,
    user: (state) => state.user,
    roles: state => state.roles,
  },
});
