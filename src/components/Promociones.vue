<template>
  <div>
    <div v-for="post in promociones" :key="post.id">
      <div class="container-card">
        <div class="container-images">
          <img
            width="100%"
            src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/vue-project/69-plaza-vea-nanocell+1.png"
            alt=""
            @click="redirect(post)"
          />
          <img
            width="70px"
            style="position: absolute; margin-top: 150px"
            src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/vue-project/mirada-ojos-encuadre-primer-plano-sexy-810x540+1.png"
            alt=""
          />
        </div>
        <div class="card-title">Lg TV - 69% de descuento</div>
        <div class="card-description">{{ post.description }}</div>
      </div>
    </div>
    <div v-if="loading">Cargando más posts...</div>
  </div>
</template>
<script>
export default {
  name: 'Promociones',
  data() {
    return {
      loading: true,
    }
  },
  props: {
    promociones: {
      type: Array,
      default: [],
    },
  },
  methods: {
    redirect(data) {
      this.$router.push(`detalles?id=${data.id}`)
    },
  },
}
</script>

<style>
.container-principal {
  max-width: 450px;
  /* background: #f5a623; */
  margin: 100px auto;
}
.title {
  color: #fc2016;
  font-family: Poppins;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
}
.title-pag {
  font-weight: 800;
  color: #434343;
  font-size: 24px;
  margin-top: 50px;
}
.container-images {
  display: flex;
}
.container-card {
  width: 400px;
  margin: 70px auto;
}
.card-title {
  margin: 10px;
  font-size: 20px;
}
.card-description {
  margin: 10px;
  text-align: justify;
}
</style>
