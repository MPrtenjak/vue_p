<template>
  <section class="container-fluid">
    <nuxt/>
  </section>
</template>

<script>
import StoreMixin from '~/mixins/store'

export default {
  mixins: [ StoreMixin ],

  created () {
    if (process.client) {
      window.addEventListener('keypress', this.onkeypress);
    }
  },

  destroyed() {
    if (process.client) {
      window.removeEventListener('keypress', this.onkeypress);
    }
  },

  methods:  {
    onkeypress (event) {
      if (event.code === "KeyR") {
        this.$nuxt.$emit('ACT_RUN');
      }

      if ((event.code == "KeyN") || (event.code === "Space") || (event.key === ">")) {
        this.moveCurrentSlideByID(1)
      }

      if ((event.code == "KeyP") || (event.key === "<")) {
        this.moveCurrentSlideByID(-1)
      }
    }
  }
}
</script>
