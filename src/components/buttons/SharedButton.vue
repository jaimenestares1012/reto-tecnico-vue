<template>
  <v-btn
    dark
    class="shared-button"
    :class="backgroundButtonColor"
    :style="{
      width: totalWidth + '%',
      borderRadius: `${radius}px`,
      fontSize: `${sizeText}px`,
    }"
    :type="type"
    :loading="loading"
    :height="height"
    @click="$emit('click', $event)"
  >
    <img v-if="imageSrc" :src="imageSrc" alt="" />
    <span v-else>{{ text }}</span>
  </v-btn>
</template>

<script>
export default {
  props: {
    loading: { type: Boolean, default: false },
    type: { type: String, default: 'button' },
    text: { type: String, default: '' },
    buttonOrange: { type: Boolean, default: false },
    buttonSilver: { type: Boolean, default: false },
    totalWidth: { type: Number, default: 0 },
    backgroundButton: { type: String, default: '' },
    radius: { type: Number, default: 0 },
    height: { type: Number, default: 36 },
    imageSrc: { type: String, default: '' },
    sizeText: { type: Number, default: 20 },
  },
  computed: {
    backgroundButtonColor() {
      return this.backgroundButton === ''
        ? 'background-button-orange'
        : this.backgroundButton
    },
  },
}
</script>

<style lang="scss">
.shared-button {
  color: rgb(255, 255, 255);
  padding: 3px;
}
.shared-button-silver {
  background: silver !important;
}
// .background-button-orange {
//   background: linear-gradient(180deg, #eb7b36 0%, #eb9436 13.54%, #eb7b36 100%);
// }
</style>
