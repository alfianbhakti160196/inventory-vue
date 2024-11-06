<template>
  <div class="center text-center">
    <qrcode-stream @detect="onDetect"></qrcode-stream>
    <v-btn class="mt-5 success">Sken Sekarang</v-btn>
  </div>
</template>

<script>
export default {
  name: "DashboardOprator",

}
</script>