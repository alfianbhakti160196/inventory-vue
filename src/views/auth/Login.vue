<template>
  <v-row>
    <v-col cols="12" lg="7" xl="6" class="info d-none d-md-flex align-center justify-center">
      <v-container>
        <div class="pa-10">
          <v-row justify="center">
            <v-col cols="8" xl="5">
              <div>
                <h2 class="display-1 white--text font-weight-medium">
                  Inventory Barang
                </h2>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
    <v-col cols="12" lg="5" xl="6" class="d-flex align-center">
      <v-container>
        <div class="pa-7 pa-sm-12">
          <v-row>
            <v-col cols="12" lg="9" xl="6">
              <h2 class="font-weight-bold mt-4 blue-grey--text text--darken-2">Sign in</h2>

              <v-form ref="form" v-model="valid" lazy-validation action="/dashboards/analytical">
                <v-text-field
                    v-model="input.username"
                    label="Username"
                    class="mt-4"
                    required
                    outlined
                ></v-text-field>
                <v-text-field
                    v-model="input.password"
                    label="Password"
                    required
                    outlined
                    type="password"
                ></v-text-field>

                <v-btn
                    color="info"
                    block
                    class="mr-4"
                    submit
                    @click="submit"
                >Sign In</v-btn>
              </v-form>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    input: {
      username: "",
      password: "",
    },
    valid: true,

  }),
  methods: {
    submit() {
      this.loading = true
      let router = this.$router
      if (this.input.username !== '' && this.input.password !== '') {
        // this.input.username = this.input.username.toUpperCase()
        this.$store.dispatch('login', this.input).then(res => {
          this.loading = false

          let role = res.data.role

          console.log(role)

          if (role === "ADMIN") {
            router.push('/admin/dashboard')
          } else if (role === "OPRATOR") {
            router.push('/oprator/dashboard')
          }

        }).catch(err => {
          this.$parent.$parent.$refs.notif.notifikasi("Username atau Password Salah!", "red")
          if (err.response === undefined) {
            this.$parent.$parent.$refs.notif.notifikasi("Username atau Password Salah!", "red")
          } else {
            this.$parent.$parent.$refs.notif.notifikasi("Username atau Password Salah!", "red")
          }
          this.loading = false
        })
        // if (this.$store.getters.isLoggedIn) {
        //     this.loading = false
        //     router.push('/profil')
        // } else

      } else {
        this.pesanerror = 'silahkan masukkan username dan password anda'
        this.alert = true
        this.loading = false
      }
    }
  }
};
</script>
