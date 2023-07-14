<template>
  <div>
    <div class="container-principal">
      <Logo></Logo>
      <div class="title">Registrate para ingresar</div>
      <div class="image-container" v-if="selectedImage">
        <img :src="selectedImage" alt="Selected Image" />
      </div>
      <input type="file" @change="handleImageUpload" accept="image/*" />
      <Form></Form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SharedButton from '@/components/buttons/SharedButton'
import Logo from '@/components/Logo'
import Form from '@/components/Form'
export default {
  name: 'IndexPage',
  components: {
    SharedButton,
    Logo,
    Form,
  },
  data() {
    return {
      loading: null,
      selectedImage:
        'https://ja-my-serverless-react-app-20-03-2023.s3.amazonaws.com/vue-project/bx-user+1.png',
    }
  },
  methods: {
    redirect() {
      this.$router.push('/eleccion')
    },
    handleImageUpload(event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        this.selectedImage = reader.result
      }
      reader.readAsDataURL(file)
    },
  },
  computed: {
    ...mapGetters('producto', ['idLast']),
  },
  async mounted() {},
}
</script>

<style>
.container-principal {
  max-width: 450px;
  margin: auto;
}
.title {
  color: #fc2016;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
}
.image-container {
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
}
</style>
