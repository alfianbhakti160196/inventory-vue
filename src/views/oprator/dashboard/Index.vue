<template>
  <div class="center text-center">
    <qrcode-stream @detect="onDetect" @decode="onDecode"></qrcode-stream>

    <v-btn class="mt-5 success">Sken Sekarang</v-btn>

    <v-bottom-navigation v-model="value">
      <v-btn value="Logout">
        <span>Logout</span>

        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <!--  Modal  -->
    <div class="text-center">
      <v-dialog
          v-model="dialog"
          width="500"
      >
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Konfirmasi Barang
          </v-card-title>

          <v-card-text>

          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="confirmation"
            >
              Konfirmasi
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

  </div>
</template>

<script>
export default {
  name: "DashboardOprator",
  data: () => ({
    data:{},
    dialog: false,

  }),

  methods: {
    onDetect (detectedCodes) {
      console.log(detectedCodes);
      this.dialog = true

    },
    onDecode(detectedCodes) {
      this.data = detectedCodes;
      console.log(detectedCodes)

    },
    confirmation() {
      this.dialog = false;
      this.$http.get("/oprator/tracking/" + this.data).then((response) => {
        console.log(response.data.data)
      })
    }
  }

}
</script>