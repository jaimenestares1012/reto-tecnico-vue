import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  srcDir: 'src/',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - reto experience',
    title: 'reto experience',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/LogoSamsungDigitalExperience.ico' },
      // { rel: "stylesheet",href:"https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&display=swap"},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
      // { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap' }
      
      // { rel: 'stylesheet', href: '/fonts/AMSUNGSHARPSANS-REGULAR.ttf' }
    ],
    script: [
      {
        src: '/js/qz-tray.js' ,
        type: 'text/javascript',
      },
      {
        src: '/js/jquery-1.11.3.min.js' ,
        type: 'text/javascript',
      },
      {
        src: '/js/jsrsasign-all-min.js' ,
        type: 'text/javascript',
      },
      {
        src: '/js/sign-message.js' ,
        type: 'text/javascript',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/own.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/store-helpers','~/plugins/vuelidate'],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
      // fonts: {
      //   body: 'SamsungSharpSans-Regular, sans-serif'
      // }
    },
    font: {
      family: 'Poppins',
    },
  },
  icon: {
    iconSrc: '@/static/icon.png',
  },
  manifest: {
    name: 'Cafetería',
    short_name: 'Cafetería',
    theme_color: '#ffffff',
    background_color: '#fff',
    display: 'standalone',
    Scope: '/',
    start_url: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules', 'defu'],
  },
}
