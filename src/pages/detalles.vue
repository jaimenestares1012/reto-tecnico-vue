<template>
  <div>
    <div class="container-principal">
      <Logo></Logo>
      <cardProducto :promocion="promocion"></cardProducto>
      <cardComentarios :comentarios="comentarios"></cardComentarios>

      <div>
        <form ref="form" @submit.prevent="sendLead">
          <div class="pagos-form__inputs">
            <v-text-field
              v-model="comentario"
              outlined
              color="#1B76B4"
              placeholder="Escribe un comentario..."
              background-color="#E6E6E6"
              :height="59"
              class="input-text"
            />
          </div>
          <div class="container-button">
            <v-btn
              width="100%"
              :height="50"
              class="btn-generic"
              outlined
              type="submit"
              >Enviar</v-btn
            >
          </div>
        </form>
      </div>
    </div>
    <ModalAlert ref="modalAlert" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SharedButton from '@/components/buttons/SharedButton'
import ModalAlert from '@/components/modals/ModalAlert'
import Logo from '@/components/Logo'
import cardProducto from '@/components/CardProducto'
import cardComentarios from '@/components/CardComentarios'
export default {
  name: 'IndexPage',
  components: {
    SharedButton,
    Logo,
    ModalAlert,
    cardProducto,
    cardComentarios,
  },
  data() {
    return {
      loading: null,
      comentario: null,
    }
  },
  methods: {
    async sendLead() {
      console.log('comentario', this.comentario)
      const estado = await this.$store.dispatch(
        'producto/postComentario',
        this.comentario
      )
      let data = {}
      if (estado.codRes == '00') {
        data = {
          img: '😃',
          titulo: 'Estimado usuario',
          message: 'Proximamente',
        }
      } else {
        data = {
          img: '😟',
          titulo: 'Estimado usuario',
          message: 'Hubo un error',
        }
      }
      this.$refs.modalAlert.open(data)
    },
  },
  computed: {
    ...mapGetters('producto', ['promocion', 'comentarios']),
  },
  async mounted() {
    const id = this.$route.query.id
    console.log('id', id)
    await this.$store.dispatch('producto/getPromocion', id)
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
