<template>
  <div class="form">
    <ValidationObserver ref="observer">
      <form ref="form" @submit.prevent="sendLead">
        <div class="pagos-form__inputs">
          <ValidationProvider
            v-slot="{ errors }"
            name="Nombre"
            rules="required"
          >
            <v-text-field
              v-model="nameClient"
              outlined
              color="#1B76B4"
              label="Nombres"
              placeholder="Nombres"
              :error-messages="errors"
              background-color="#E6E6E6"
              :height="59"
              class="input-text"
            />
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            name="Apellidos"
            rules="required"
          >
            <v-text-field
              v-model="lastNameClient"
              outlined
              label="Apellidos"
              color="#1B76B4"
              placeholder="Apellidos"
              :error-messages="errors"
              background-color="#E6E6E6"
              :height="59"
              class="input-text"
            />
          </ValidationProvider>
        </div>
        <div class="container-button">
          <v-btn
            width="100%"
            :height="50"
            class="btn-generic"
            outlined
            type="submit"
            >Ingresar</v-btn
          >
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { required, length, numeric, max, min } from 'vee-validate/dist/rules'
import {
  extend,
  ValidationProvider,
  ValidationObserver,
  setInteractionMode,
} from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: 'El campo {_field_} es obligatorio',
})
extend('numeric', {
  ...numeric,
  message: 'El campo {_field_} solo debe contener números',
})
extend('length', {
  ...length,
  message: 'El campo {_field_} debe contener {length} caracteres',
})
extend('max', {
  ...max,
  message: 'El campo {_field_} debe contener máximo {length} caracteres',
})
extend('min', {
  ...min,
  message: 'El campo {_field_} debe contener mínimo {length} caracteres',
})
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      lastNameClient: null,
      nameClient: null,
      prueba: null,
      typeDocument: 1,
      perfil: null,
      itemsTipoDoc: [
        {
          name: 'DNI',
          value: 1,
        },
        {
          name: 'CE',
          value: 2,
        },
      ],
    }
  },
  methods: {
    async sendLead() {
      console.log('EBVIO DATA')
      const respuesta = await this.$refs.observer.validate()
      // const respuesta = true
      if (respuesta) {
        this.$router.push('/promociones')
      }
    },
  },
}
</script>

<style>
.form {
  margin: 30px;
}
.logo {
  width: 133px;
  height: 45px;
  top: 29px;
  left: 93px;
}
.btn-generic {
  background: #ffe81e;
  width: 100%;
  color: #fc2016 !important;
}
.container-button {
  width: 60%;
  margin: auto;
}
</style>