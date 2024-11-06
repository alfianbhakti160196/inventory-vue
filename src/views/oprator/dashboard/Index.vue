<template>
  <div class="center text-center">
    <qrcode-stream @detect="onDetect" @decode="onDecode"></qrcode-stream>

    <v-btn class="mt-5 success">Sken Sekarang</v-btn>
  </div>
</template>

<script>
export default {
  name: "DashboardOprator",
  data: () => ({
    data:{}

  }),

  methods: {
    onDetect (detectedCodes) {
      console.log(detectedCodes)

    },
    onDecode(detectedCodes) {
      this.data = detectedCodes;
      console.log(detectedCodes)
      // this.$http.get("/oprator/tracking/" + this.data).then((response) => {
      //   console.log(response.data.data)
      // })
    }
  }

}
</script>