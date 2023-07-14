<template>
  <div class="container-comment">
    <div class="title-card">Comentarios</div>
    <div v-for="comment in comentarios.slice(0, 10)" :key="comment.id">
      <div class="container-card color-background">
        <div class="card-title">
          <div class="contendor-avatar">
            <img
              width="70px"
              src="https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/vue-project/mirada-ojos-encuadre-primer-plano-sexy-810x540+1.png"
              alt=""
            />
            <div class="name-avatar">
              {{ comment.user ? comment.user.firstName : '' }}
              {{ comment.user ? comment.user.lastName : '' }}
            </div>
          </div>
        </div>
        <div class="card-description">{{ comment.text }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'promocion',
  data() {
    return {
      loading: true,
    }
  },
  props: {
    comentarios: {
      default: [],
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
.title-card {
  font-weight: 800;
  color: #434343;
  font-size: 24px;
  margin-top: 50px;
  margin-bottom: 20px;
}
.contendor-avatar {
  display: flex;
}
.name-avatar {
  margin-top: 20px;
}
.container-card {
  width: 400px;
  margin: 70px auto;
}
.color-background {
  background: #c4c4c40d;
}
.card-title {
  font-size: 20px;
}
.card-description {
  text-align: justify;
  margin: 30px 0px;
}
</style>
