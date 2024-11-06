<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
        :title="page.title"
        :icon="page.icon"
        :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>

    <TableOprator></TableOprator>

  </v-container>
</template>

<script>
import BaseBreadcrumb from "@/components/commonComponents/BaseBreadcrumb.vue";
import TableOprator from "@/views/admin/oprator/TableOprator.vue";

export default {
  name: "Oprator",

  data: () => ({
    page: {
      title: "Oprator",
    },
    breadcrumbs: [
      {
        text: "Admin",
        disabled: false,
        to: "#",
      },
      {
        text: "Oprator",
        disabled: true,
      },
    ],
  }),
  components: {
    TableOprator,
    BaseBreadcrumb
  },
};
</script>