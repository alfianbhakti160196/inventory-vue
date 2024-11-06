<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
        :title="page.title"
        :icon="page.icon"
        :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-row>
      <!--   Oprator Card   -->
      <v-col cols="12" sm="3" lg="3" class="py-0 d-flex align-stretch">
        <v-card class="mb-7 primary w-100">
          <v-card-text class="pa-7">
            <div class="d-flex align-start">
              <h3 class="font-weight-regular title white--text mt-1">Oprator</h3>
              <v-spacer></v-spacer>
              <div class="ml-auto">
                <v-btn depressed color="white" class="btn-custom-sm" small fab>
                  <feather type="user" class="text-dark"></feather>
                </v-btn>
              </div>
            </div>
            <div class="mt-4">
              <h2 class="white--text text-h5">6</h2>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!--   Oprator Card   -->
      <v-col cols="12" sm="3" lg="3" class="py-0 d-flex align-stretch">
        <v-card class="mb-7 warning w-100">
          <v-card-text class="pa-7">
            <div class="d-flex align-start">
              <h3 class="font-weight-regular title white--text mt-1">Customer</h3>
              <v-spacer></v-spacer>
              <div class="ml-auto">
                <v-btn depressed color="white" class="btn-custom-sm" small fab>
                  <feather type="users" class="text-dark"></feather>
                </v-btn>
              </div>
            </div>
            <div class="mt-4">
              <h2 class="white--text text-h5">100</h2>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!--   Oprator Card   -->
      <v-col cols="12" sm="3" lg="3" class="py-0 d-flex align-stretch">
        <v-card class="mb-7 success w-100">
          <v-card-text class="pa-7">
            <div class="d-flex align-start">
              <h3 class="font-weight-regular title white--text mt-1">Barang</h3>
              <v-spacer></v-spacer>
              <div class="ml-auto">
                <v-btn depressed color="white" class="btn-custom-sm" small fab>
                  <feather type="shopping-cart" class="text-dark"></feather>
                </v-btn>
              </div>
            </div>
            <div class="mt-4">
              <h2 class="white--text text-h5">5</h2>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!--   Oprator Card   -->
      <v-col cols="12" sm="3" lg="3" class="py-0 d-flex align-stretch">
        <v-card class="mb-7 blue w-100">
          <v-card-text class="pa-7">
            <div class="d-flex align-start">
              <h3 class="font-weight-regular title white--text mt-1">Sopir</h3>
              <v-spacer></v-spacer>
              <div class="ml-auto">
                <v-btn depressed color="white" class="btn-custom-sm" small fab>
                  <feather type="aperture" class="text-dark"></feather>
                </v-btn>
              </div>
            </div>
            <div class="mt-4">
              <h2 class="white--text text-h5">20</h2>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseBreadcrumb from "@/components/commonComponents/BaseBreadcrumb.vue";

export default {
  name: "Dashboard",

  data: () => ({
    page: {
      title: "Dashboard",
    },
    breadcrumbs: [
      {
        text: "Admin",
        disabled: false,
        to: "#",
      },
      {
        text: "Dashboard",
        disabled: true,
      },
    ],
  }),
  components: {
    BaseBreadcrumb

  },
};
</script>