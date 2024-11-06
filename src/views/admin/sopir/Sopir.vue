<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
        :title="page.title"
        :icon="page.icon"
        :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>

    <TableSopir></TableSopir>

  </v-container>
</template>

<script>
import BaseBreadcrumb from "@/components/commonComponents/BaseBreadcrumb.vue";
import TableSopir from "@/views/admin/sopir/TableSopir.vue";

export default {
  name: "Sopir",

  data: () => ({
    page: {
      title: "Sopir",
    },
    breadcrumbs: [
      {
        text: "Admin",
        disabled: false,
        to: "#",
      },
      {
        text: "Sopir",
        disabled: true,
      },
    ],
  }),
  components: {
    BaseBreadcrumb, TableSopir
  },
};
</script>