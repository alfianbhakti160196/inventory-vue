<template>
  <v-app-bar
    app
    clipped-left
    clipped-right
    :color="navbarColor"
    :dark="navbarColor !== '#fafafa'"
    class="app-navbar"
  >
    <!-- ---------------------------------------------- -->
    <!---/Toggle sidebar part -->
    <!-- ---------------------------------------------- -->
    <div>
      <v-app-bar-nav-icon
        @click="
          $vuetify.breakpoint.smAndDown
            ? setSidebarDrawer(!Sidebar_drawer)
            : $emit('input', !value)
        "
      />
    </div>
    <!---/Toggle sidebar part -->

    <!-- ---------------------------------------------- -->
    <!---Search part -->
    <!-- ---------------------------------------------- -->

    <!---/Search part -->

    <v-spacer />
    <!-- ---------------------------------------------- -->
    <!---right part -->
    <!-- ---------------------------------------------- -->

    <!-- ---------------------------------------------- -->
    <!-- Messages -->
    <!-- ---------------------------------------------- -->


    <!-- ---------------------------------------------- -->
    <!-- Notification -->
    <!-- ---------------------------------------------- -->

    <!-- ---------------------------------------------- -->
    <!-- User Profile -->
    <!-- ---------------------------------------------- -->
    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
      min-width="385"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          class="pa-0 px-1"
          elevation="0"
          color="transparent"
          plain
          :ripple="false"
        >
          <v-avatar size="35">
            <img src="@/assets/images/users/user2.jpg" alt="Julia" />
          </v-avatar>
        </v-btn>
      </template>

      <v-list class="pa-8">
        <v-btn block depressed color="secondary" class="mt-4 py-4" @click="logout">Logout</v-btn>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
// Utilities
import { mapState, mapMutations } from "vuex";
export default {
  name: "VerticalHeader",

  components: {},

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    showSearch: false,
    drawer: false,
    group: null,
    href() {
      return undefined;
    },
  }),

  computed: {
    ...mapState(["navbarColor", "Sidebar_drawer"]),
  },

  methods: {
    ...mapMutations({
      setSidebarDrawer: "SET_SIDEBAR_DRAWER",
    }),

    logout() {
      this.$store.dispatch('logout')
      this.$router.replace('/login')
    },

  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss">
.hidelogo {
  display: none;
}
.searchinput {
  position: absolute;
  width: 100%;
  margin: 0;
  left: 0;
  z-index: 10;
  padding: 0 15px;
}
.descpart {
  max-width: 220px;
}

@media (min-width: 960px) {
  .v-application--is-ltr {
    .app-navbar.v-sheet {
      width: calc(100% - 265px) !important;
      margin-left: auto;
    }
  }
  .v-application--is-rtl {
    .app-navbar.v-sheet {
      width: calc(100% - 265px) !important;
      margin-left: unset;
      margin-right: auto;
    }
  }
}
</style>
