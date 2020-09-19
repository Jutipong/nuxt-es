import colors from 'vuetify/es5/util/colors';

export default {
  // router: {
  //   mode: 'hash',
  //   base: '/',
  // },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  // ssr: false,
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: ['@/plugins/main.js'],
  loading: {
    color: '#00c853',
    height: '3px',
    throttle: 200,
    duration: 500,
    // continuous: true,
  },
  loadingIndicator: {
    name: 'circle',
    color: '#00c853',
    background: 'white',
  },
  components: true,
  buildModules: ['@nuxtjs/vuetify', '@nuxtjs/moment'],
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],
  // axios: {
  //   baseURL: 'http://localhost:8000'
  // },
  auth: {
    localStorage: false,
    cookie: {
      options: {
        prefix: 'auth.',
        options: {
          path: '/login',
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/',
      callback: false,
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'https://sakko-demo-api.herokuapp.com/api/v1/user/sign_in',
            method: 'post',
            propertyName: 'user.auth_jwt',
          },
          // logout: {
          //   url: 'https://sakko-demo-api.herokuapp.com/api/v1/user/sign_out',
          //   method: 'delete',
          // },
          // user: {
          //   url: 'https://sakko-demo-api.herokuapp.com/api/v1/user/me',
          //   method: 'get',
          //   propertyName: 'user',
          // },
          user: false,
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: false,
        tokenName: 'auth-token',
      },
    },
  },
  router: {
    middleware: ['auth'],
  },
  axios: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken4,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  build: {},
};
