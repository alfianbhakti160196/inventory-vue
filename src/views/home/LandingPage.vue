<template>
  <v-app>
    <v-app-bar app color="blue" dark>
      <v-toolbar-title>Inventory Barang</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="login">Login</v-btn>
<!--      <v-btn text>Sign Up</v-btn>-->
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row align="center" justify="center" class="mt-5">
          <v-col cols="12" sm="6" md="6" lg="6" class="pa-0">
            <h2 class="text-center">Selamat Datang di Aplikasi Inventory Barang</h2>
            <h3 class="text-center">Masukkan Resi mu di bawah ini</h3>
          </v-col>
        </v-row>

        <v-row align="center" justify="center" class="mt-5">
          <v-col cols="12" sm="12" md="12" lg="2">
            <v-text-field
                v-model="resi"
                label="Input no. resi"
                hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="1">
            <v-btn @click="cekResi">Lacak</v-btn>
          </v-col>
        </v-row>

      </v-container>
    </v-main>

    <v-footer app color="blue" dark>
      <span class="mx-auto">© 2024 Inventory Barang</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      resi: "",
      features: [
        { title: 'Feature One', description: 'Description of feature one.' },
        { title: 'Feature Two', description: 'Description of feature two.' },
        { title: 'Feature Three', description: 'Description of feature three.' }
      ]
    };
  },
  methods: {
    login() {
      let router = this.$router
      router.push('/login')
    },
    cekResi() {
      let router = this.$router
      router.push('/detail-barang/' + this.resi);
    }
  }
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
