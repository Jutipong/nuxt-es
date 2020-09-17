<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" fixed app>
      <v-list shaped dense>
        <template v-for="item in items">
          <v-row small v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <!-- <a href="#!" class="body-2 black--text">EDIT</a> -->
            </v-col>
          </v-row>
          <v-list-group v-else-if="item.children" :key="item.text" v-model="item.model" :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(child, i) in item.children" :key="i" :to="child.to" link color="primary">
              <v-list-item-action v-if="child.icon">
                <v-icon small>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ child.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <!-- root level -->
          <v-list-item v-else :key="item.text" :to="item.to" link color="primary">
            <v-list-item-action>
              <v-icon small>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!-- AppBar -->
    <AppBar v-model="drawer"></AppBar>
    <!-- Contect -->
    <v-main>
      <v-container fluid>
        <!-- <v-row> -->
        <nuxt />
        <!-- <ScrollTop></ScrollTop> -->
        <!-- </v-row> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/layouts/app-bar.vue';
// import ScrollTop from '@/layouts/scroll-top.vue';
export default {
  // middleware: ['auth'],
  components: {
    AppBar,
    // ScrollTop,
  },
  props: {
    source: String,
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      // { heading: 'Labels' },
      { icon: 'mdi-home', text: 'Welcome', to: '/' },
      { icon: 'mdi-chart-bubble', text: 'Inspire contacted', to: '/inspire' },
      { icon: 'mdi-test-tube', text: 'Demo01', to: '/demo01' },
      // {
      //   icon: 'mdi-home',
      //   'icon-alt': 'mdi-chevron-down',
      //   text: 'Home',
      //   model: false,
      //   children: [{ icon: 'mdi-plus', text: 'Create Home', to: '/' }],
      // },
      // {
      //   icon: 'mdi-chevron-up',
      //   'icon-alt': 'mdi-chevron-down',
      //   text: 'More',
      //   model: false,
      //   children: [
      //     { text: 'Import' },
      //     { text: 'Export' },
      //     { text: 'Print' },
      //     { text: 'Undo changes' },
      //     { text: 'Other contacts' },
      //   ],
      // },
      // { icon: 'mdi-cog', text: 'Settings' },
      // { icon: 'mdi-message', text: 'Send feedback' },
      // { icon: 'mdi-help-circle', text: 'Help' },
      // { icon: 'mdi-cellphone-link', text: 'App downloads' },
      // { icon: 'mdi-keyboard', text: 'Go to the old version' },
    ],
  }),
  beforeDestroy() {
    this.$auth.logout();
  },
  // created() {
  //   document.addEventListener('beforeunload', this.handler);
  // },
  // methods: {
  //   handler(event) {
  //     debugger;
  //     this.$auth.logout();
  //   },
  // },
};
</script>
<style>
.btn-df {
  min-width: 125px !important;
}
.v-card__text {
  padding-right: 30px;
  padding-left: 30px;
}
</style>