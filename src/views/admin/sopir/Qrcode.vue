<template>
  <div>
    <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="hee hee"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="800px"

        ref="html2Pdf"
    >
      <section slot="pdf-content">
        <v-card class="center pa-12 text-center">
          <qr-code :text="$route.params.id"></qr-code>
        </v-card>
      </section>
    </vue-html2pdf>
    <v-btn class="primary" @click="generateReport">Print</v-btn>
  </div>
</template>
<script>
import VueHtml2pdf from 'vue-html2pdf'
export default {
  name: "QRCode",
  methods: {
    generateReport () {
      this.$refs.html2Pdf.generatePdf()
    }
  },
  components: {
    VueHtml2pdf
  }
}
</script>