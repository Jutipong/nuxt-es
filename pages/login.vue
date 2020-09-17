<template>
  <v-app id="login">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md3 lg>
          <v-card class="elevation-6 pa-3 pb-10">
            <v-form v-model="valid" @submit.prevent="userLogin()" ref="form">
              <v-card-text>
                <div class="layout column align-center">
                  <img class="mt-5 mb-5" src="../static/logo.svg" alt="Vue Material Admin" width="70%" />
                  <h2 class="flex my-4 primary--text">
                    (◍•ᴗ•◍)
                    <span class="red--text">❤</span>
                  </h2>
                </div>
                <v-text-field
                  autocomplete="off"
                  append-icon="mdi-account"
                  id="username"
                  name="username"
                  label="Username"
                  type="text"
                  v-model="user.username"
                  :rules="usernameRules"
                  required
                ></v-text-field>
                <v-text-field
                  autocomplete="off"
                  append-icon="mdi-lock"
                  type="password"
                  name="password"
                  label="Password"
                  v-model="user.password"
                  counter
                  :rules="passwordRules"
                  required
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" tile block color="primary" :loading="loading" :disabled="!valid">
                  Login
                  <v-icon>mdi-login</v-icon>
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  data: () => ({
    loading: false,
    user: {
      username: 'saklism+demo44@gmail.com',
      password: '12341234',
    },
    valid: false,
    usernameRules: [(v) => !!v || ''],
    passwordRules: [(v) => !!v || ''],
  }),
  methods: {
    async userLogin() {
      try {
        this.loading = true;
        const response = await this.$auth.loginWith('local', {
          data: { user: { email: this.user.username, password: this.user.password } },
        });

        if (response.data.success) {
          this.$auth.setUser(response.data.user);
          this.$router.push('/');
        }
      } catch {
        // console.log(err);
      }
      this.loading = false;
    },
  },
  mounted() {
    document.getElementById('username').focus();
  },
};
</script>
<style scoped lang="css">
#login {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 0;
  background-image: url('../static/bg-login.jpg');
  background-size: cover;
  background-position: center;
}
</style>
