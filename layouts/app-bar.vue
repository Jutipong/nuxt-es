<template>
  <!-- <v-container grid-list-xl> -->
  <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="primary" fixed small dark dense>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
      <!-- <span class="hidden-sm-and-down">(⌐■_■)</span> -->
      <span>(⌐■_■)</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text light @click="logout()">
      <span>Logout</span>
      <v-icon>mdi-export</v-icon>
    </v-btn>
  </v-app-bar>
  <!-- </v-container> -->
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      drawer: null,
    };
  },
  watch: {
    drawer: function (value) {
      this.$emit('input', value);
    },
    value: function (value) {
      this.drawer = value;
    },
  },
  mounted() {
    this.drawer = this.value;
  },
  methods: {
    logout() {
      this.$auth.logout().then(() => this.$router.push('/login'));
    },
  },
};
</script>

<style>
</style>