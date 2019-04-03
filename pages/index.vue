<template>
  <span>
    <picture-slide v-if="isPictureSlide" />
    <text-slide v-if="isTextSlide" />
    <demo v-if="isDemo" />

    <div class="mp-navigation">
      <button type="button" class="btn btn-secondary" @click="moveCurrentSlideByID(-1)">&lt;&lt;</button>
      <button type="button" class="btn btn-secondary" @click="moveCurrentSlideByID(1)">&gt;&gt;</button>
    </div>
  </span>
</template>

<script>
import PictureSlide from '@/components/picture-slide'
import TextSlide from '@/components/text-slide'
import Demo from '@/components/demo'

import StoreMixin from '~/mixins/store'

export default {
  components: { PictureSlide, TextSlide, Demo },

  mixins: [ StoreMixin ],

  layout: 'index',

  computed: {
    isPictureSlide() { return this.slide.pageType === 'pictureSlide' },
    isTextSlide() { return this.slide.pageType === 'textSlide' },
    isDemo() { return this.slide.pageType === 'demoSlide' },
  },

  created() {
    this.initializeSlides()
  },
}
</script>

<style lang="scss">
.mp-navigation {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10000;
  font-size: 200%;

  button {
    margin-right: 10px;
  }
}
</style>