<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
        :title="page.title"
        :icon="page.icon"
        :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>

    <TableCustomer></TableCustomer>

  </v-container>
</template>

<script>
import BaseBreadcrumb from "@/components/commonComponents/BaseBreadcrumb.vue";
import TableCustomer from "@/views/admin/customer/TableCustomer.vue";

export default {
  name: "Customer",

  data: () => ({
    page: {
      title: "Customer",
    },
    breadcrumbs: [
      {
        text: "Admin",
        disabled: false,
        to: "#",
      },
      {
        text: "Customer",
        disabled: true,
      },
    ],
  }),
  components: {
    BaseBreadcrumb,
    TableCustomer
  },
};
</script>