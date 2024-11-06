<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
        :title="page.title"
        :icon="page.icon"
        :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>

    <TableBarang></TableBarang>

  </v-container>
</template>

<script>
import BaseBreadcrumb from "@/components/commonComponents/BaseBreadcrumb.vue";
import TableBarang from "@/views/admin/barang/TableBarang.vue";

export default {
  name: "Barang",

  data: () => ({
    page: {
      title: "Barang",
    },
    breadcrumbs: [
      {
        text: "Admin",
        disabled: false,
        to: "#",
      },
      {
        text: "Barang",
        disabled: true,
      },
    ],
  }),
  components: {
    BaseBreadcrumb,
    TableBarang
  },
};
</script>