<template>
  <v-app dark>
    <LoadingGeneral :is-loading="isLoading" />
    <v-main class="HomeLayout container">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LoadingGeneral from '@/components/Loading/LoadingGeneral'
export default {
  name: 'DefaultLayout',
  components: {
    LoadingGeneral,
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    },
  },
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
</script>
<style>
.HomeLayout {
  background: #f5f6f7;
}
.container {
  max-width: none !important;
  /* height: 1900px; */
  padding: 0px;
  background: #ffffff;
}

/* .v-application {
  font-family: 'SAMSUNGSHARPSANS-REGULAR';
} */
</style>
