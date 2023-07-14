<template>
  <div>
    <div class="container-principal">
      <Logo></Logo>

      <div class="title">TODAS LAS PROMOCIONES</div>
      <div class="title-pag">Ultimas promociones</div>
      <CardPromociones :promociones="promociones"></CardPromociones>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '@/components/Logo'
import CardPromociones from '@/components/Promociones'
export default {
  name: 'Promociones',
  components: {
    Logo,
    CardPromociones,
  },
  data() {
    return {
      loading: null,
    }
  },
  methods: {
    redirect(data) {
      this.$router.push(`detalles?id=${data.id}`)
    },
  },
  computed: {
    ...mapGetters('producto', ['promociones']),
  },
  async mounted() {
    const paylodad = {}
    await this.$store.dispatch('producto/getPromociones', paylodad)
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
