<template>
  <v-dialog
    v-model="dialogVisible"
    max-width="300.8pt !important"
    class="v-dialog"
  >
    <v-card>
      <div style="text-align: end; margin-right: 7px">
        <button @click="close">
          <v-icon color="#005793" style="font-size: 40px"
            >mdi-close-circle-outline</v-icon
          >
        </button>
      </div>

      <div class="container-body">
        <div class="container-title">
          <span class="message-title"> {{ tituloModal }}</span>
        </div>
        <div class="container-msg">
          <span class="message-modal"> {{ msgModal }}</span>
        </div>

        <div>
          <v-btn
            class="buttom-close"
            style="font-size: 23px; padding: 10px"
            @click="close"
          >
            OK
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      msgModal: null,
      tituloModal: null,
      imgModal: null,
      nextStep: null,
      nameSpace: null,
      resetPath: null,
    }
  },
  computed: {},
  methods: {
    open(payload) {
      console.log('PAYLOAD', payload)
      const { img, message, titulo } = payload
      this.msgModal = message
      this.tituloModal = titulo
      this.imgModal = img
      this.dialogVisible = true
      this.nextStep = payload.nextStep
      this.nameSpace = payload.nameSpace
    },
    close() {
      this.dialogVisible = false
    },
  },
}
</script>
<style>
.message-title {
  color: #005092;
  font-size: 40px;
  line-height: 28px;
  font-weight: 700;
}
.message-modal {
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 50px;
  text-align: center;
  color: #000000;
}
.buttom-close {
  width: 50%;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 21px;
  background: #005191 !important;
  text-align: center;
  color: #ffffff !important;
}
.container-body {
  margin: auto;
  text-align: center;
  margin-top: -16px;
  width: 90%;
  padding: 0px 50px 40px 30px;
}
.container-title {
  margin: 70px 0px 50px 0px;
}
.container-msg {
  margin: 0px 0px 50px 0px;
}
</style>
