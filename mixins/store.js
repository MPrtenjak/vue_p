export default {
  computed: {
    fontSize: {
      get() { return this.$store.getters['settings/getFontSize'] },
      set (newValue) { this.$store.commit('settings/setFontSize', newValue) }
    },
    currentSlide: {
      get() { return this.$store.getters['settings/getSlideID'] },
      set (newValue) { this.$store.commit('settings/setSlideID', newValue) }
    },
    slide() {
      return this.$store.getters['settings/getSlide']
    },
    pages() {
      return this.$store.getters['settings/getPages']
    },
    folders() {
      return this.$store.getters['settings/getFolders']
    }
  },

  methods: {
    moveCurrentSlideByID (moveBy) {
      this.$store.dispatch('settings/changeSlideBy', moveBy)
    },

    initializeSlides () {
      this.$store.commit('settings/initializeState')
    },

    getPage2DemoPage (page) {
      return this.$store.getters['settings/getPage2DemoPage'](page)
    },

    getDemoPage2Page (demoPage) {
      return this.$store.getters['settings/getDemoPage2Page'](demoPage)
    },
  },
}
