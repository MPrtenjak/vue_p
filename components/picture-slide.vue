<template>
  <div class="row">
    <img v-if="slide.id === 'ages'" class="mp-image" src="~/assets/img/ages.png">
    <img v-if="slide.id === 'while'" class="mp-image" src="~/assets/img/while.png">
    <img v-if="slide.id === 'demo'" class="mp-image" src="~/assets/img/demo.png">
  </div>
</template>

<script>
import StoreMixin from '~/mixins/store'

export default {
  name: 'PictureSlide',

  mixins: [ StoreMixin ],
}
</script>

<style lang="scss">
.mp-image {
  max-height: 80vh;
  margin: 30px auto 0 auto;
}
</style>