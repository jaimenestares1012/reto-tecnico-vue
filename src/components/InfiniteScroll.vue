<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <!-- Renderiza cada post -->
      <p>{{ post }}</p>
    </div>
    <div v-if="loading">Cargando más posts...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      page: 1,
      limit: 10,
      loading: false,
    }
  },
  mounted() {
    this.loadMore()
  },
  methods: {
    loadMore() {
      if (this.loading) return

      this.loading = true
      const url = `https://61c35faa9cfb8f0017a3eb2e.mockapi.io/api/v1/posts/?page=${this.page}&limit=${this.limit}`

      // Realiza la solicitud GET utilizando $axios (proporcionado por el módulo @nuxtjs/axios)
      this.$axios
        .get(url)
        .then((response) => {
          this.posts = this.posts.concat(response.data)
          this.page++
          this.loading = false
        })
        .catch((error) => {
          console.error(error)
          this.loading = false
        })
    },
  },
}
</script>