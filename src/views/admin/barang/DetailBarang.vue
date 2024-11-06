<template>
  <div>

    <v-card>
      <v-card-title>
        Pasir
      </v-card-title>
      <v-card-text>
        <h4>Nama Customer : Abidin Makrup</h4>
        <h4>Nama Sopir    : Zainal</h4>
        <h4>Jenis Barang  : Pasir</h4>
        <h4>Berat Barang  : 23 Kg</h4>
        <h4>Status Barang : Diantar</h4>
      </v-card-text>
    </v-card>

    <v-timeline>
      <v-timeline-item :right="true">
        <v-row>
          <v-col cols="12" sm="2" md="2" lg="2">
            24/12/2024
          </v-col>
          <v-col cols="12" sm="10" md="10" lg="10">
            Mataram
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item :right="true">
        <v-row>
          <v-col cols="12" sm="2" md="2" lg="2">
            12/12/2024
          </v-col>
          <v-col cols="12" sm="10" md="10" lg="10">
            Selong
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>

  </div>
</template>

<script>

export default {
  name: "DetailBarang",

  data: () => ({

  }),
  computed: {},

  methods: {},
};
</script>