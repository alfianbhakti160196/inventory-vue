<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- DatatablesCRUDActions -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <div class="mt-4">
      <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="border">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>List Data Barang</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn color="success" dark class="mb-2 mr-3">Export Excel</v-btn>
            <v-dialog v-model="dialog" max-width="700px">
              <template v-slot:activator="{ on }">
                <v-btn color="success" dark class="mb-2" v-on="on">Tambah Barang</v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12" md="12" lg="12">
                        <v-text-field v-model="editedItem.nama_barang" label="Nama Barang"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12" lg="6">
                        <v-select
                            :items="customer" v-model="selectCustomer" label="Pilih Customer" item-text="nama"
                            item-value="id" return-object persistent-hint>
                        </v-select>
                      </v-col><v-col cols="12" sm="12" md="12" lg="6">
                        <v-select
                            :items="sopir" v-model="selectSpoir" label="Pilih Sopir" item-text="nama"
                            item-value="id" return-object persistent-hint>
                        </v-select>
                      </v-col>
                      <v-col cols="12" sm="12" md="12" lg="12">
                        <v-text-field v-model="editedItem.jenis_barang" label="Jenis Barang"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12" lg="12">
                        <v-text-field v-model="editedItem.berat_barang" label="Berat Barang"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
<!--          <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>-->
          <v-icon small class="mr-2" @click="editItem(item)">mdi-file-eye</v-icon>
          <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DatatablesCRUDActions",

  data: () => ({
    barang: {},
    sopir: {},
    customer:[],
    selectCustomer:{},
    selectSpoir:{},
    dialog: false,
    headers: [
      { text: "ID", align: "start", sortable: false, value: "id" },
      { text: "Nama Barang", value: "nama_barang" },
      { text: "Nama Penerima", value: "customer.nama" },
      { text: "Tujuan", value: "customer.alamat" },
      { text: "Nama Sopir", value: "sopir.nama" },
      { text: "No. Resi", value: "no_resi" },
      { text: "Status", value: "status_pengiriman" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {},
    defaultItem: {}
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Tambah Barang" : "Edit Barang";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    // this.initialize();
    this.getAllCustomer();
    this.getAllSopir();
    this.getAllBarang();
  },

  methods: {
    initialize() {
      this.desserts = [
        {},
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
      this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
        // Save barang
        console.log(this.editedItem);

        this.editedItem.customer_id = this.selectCustomer.id;
        this.editedItem.sopir_id = this.selectSpoir.id;

        this.$http.post("/admin/barang", this.editedItem).then(response => {
          console.log(response.data.data);
        })
      }
      this.close();
    },

    getAllCustomer(){
      this.$http.get('/admin/users?role=customer').then((response) => {
        this.customer = response.data.data;
      })
    },
    getAllSopir() {
      this.$http.get("/admin/sopirs").then(response => {
        this.sopir = response.data.data
      })
    },
    getAllBarang() {
      this.$http.get("/admin/barangs").then(response => {
        this.desserts = response.data.data
        console.log(response.data.data)
      })
    }
  }
};
</script>