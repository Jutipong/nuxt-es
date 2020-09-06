<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" fixed app>
      <v-list shaped dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              :to="child.to"
              link
              color="primary"
            >
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
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="primary"
      fixed
      small
      dark
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Google Contacts</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify"></v-img>
        </v-avatar>
      </v-btn>-->
    </v-app-bar>
    <!-- contect -->
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <nuxt />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: 'mdi-home', text: 'Welcome', to: '/' },
      { icon: 'mdi-chart-bubble', text: 'Inspire contacted', to: '/inspire' },
      {
        icon: 'mdi-home',
        'icon-alt': 'mdi-chevron-down',
        text: 'Home',
        model: false,
        children: [{ icon: 'mdi-plus', text: 'Create Home', to: '/' }],
      },
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
}
</script>


<!--<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>-->

<!--<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>-->
