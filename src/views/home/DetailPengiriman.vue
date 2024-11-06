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

        <div>

          <v-card>
            <v-card-title>
              {{ data.nama_barang}} | No. Resi : {{ data.no_resi }}
            </v-card-title>
            <v-card-text>
              <h4>Nama Customer : {{ data.customer.nama}}</h4>
              <h4>Nama Sopir    : {{ data.sopir.nama }}</h4>
              <h4>Jenis Barang  : {{ data.jenis_barang }}</h4>
              <h4>Berat Barang  : {{ data.berat_barang }}</h4>
              <h4>Status Barang : {{ data.status_pengiriman }}</h4>
            </v-card-text>
          </v-card>

          <v-timeline>
            <v-timeline-item :right="true" v-for="(item, index) in data.tracking_barang" v-bind:key="index">
              <v-row>
                <v-col cols="12" sm="2" md="2" lg="2">
                  {{ item.tanggal_diterima }}
                </v-col>
                <v-col cols="12" sm="10" md="10" lg="10">
                  {{ item.lokasi }}
                </v-col>
              </v-row>
            </v-timeline-item>

          </v-timeline>

        </div>

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
      data: {},
      resi: this.$route.params.resi,
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

    getDataBarang() {
      this.$http.get("/resi/" + this.$route.params.resi).then(response => {
        this.data = response.data.data
        console.log(response.data.data)
      }).catch(error => {
        console.log(error)
      })
    }
  },

  created() {
    this.getDataBarang();
  }
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
