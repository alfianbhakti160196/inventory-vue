<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- DatatablesCRUDActions -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <div class="mt-4">
      <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="border">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>List Data Oprator</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn color="success" dark class="mb-2" v-on="on">Tambah Oprator</v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field v-model="editedItem.nama" label="Nama"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field v-model="editedItem.username" label="Username"></v-text-field>
                      </v-col><v-col cols="12" sm="12" md="12">
                      <v-text-field v-model="editedItem.password" label="Password"></v-text-field>
                    </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field v-model="editedItem.alamat" label="Alamat"></v-text-field>
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
          <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
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
    data: {},
    dialog: false,
    headers: [
      { text: "ID", align: "start", sortable: false, value: "id" },
      { text: "Nama", value: "nama" },
      { text: "Username", value: "username" },
      { text: "Alamat", value: "alamat" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {},
    defaultItem: {}
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Tambah Oprator" : "Edit Oprator";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    // this.initialize();
    this.getAllItems();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          id: 1,
          nama: "Whayu Baskara",
          username: "baskara",
          alamat: "Tanjung",
        },
        {
          id: 2,
          nama: "Babe Banana",
          username: "babe",
          alamat: "Mataram",
        },
        {
          id: 3,
          nama: "Jangkung Kudus",
          username: "kudus",
          alamat: "Selong",
        },
        {
          id: 4,
          nama: "Sapriudin",
          username: "sapri",
          alamat: "Praya",
        },
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
        // this.desserts.push(this.editedItem);

        this.$http.post("/admin/oprator", this.editedItem).then((response) => {
          this.desserts.push(response.data.data);
        })
      }
      this.close();
    },

    getAllItems() {
      this.$http.get('/admin/users?role=OPRATOR').then((response) => {
        this.desserts = response.data.data;
      })
    }
  }
};
</script>