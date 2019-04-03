import pagesData from '~/assets/pages.json'
import _ from 'underscore'

export const state = () => ({
  fontSize: localStorage.getItem('fontSize') || 100,
  slideID: 0,
  slides: null,
  pagesData,
})

export const getters = {
  getFontSize(state) {
    return state.fontSize
  },
  getSlideID(state) {
    return state.slideID
  },
  getSlide(state) {
    return state.slides[state.slideID]
  },
  getPages(state) {
    return state.pagesData.pages
  },
  getFolders(state) {
    return state.pagesData.folders
  },
  getPage2DemoPage(state) {
    return (page) => {
      const startOfDemo = _.findIndex(state.slides, (element) => element.pageType === 'demoSlide')
      return page - startOfDemo
    }
  },
  getDemoPage2Page(state) {
    return (demoPage) => {
      const startOfDemo = _.findIndex(state.slides, (element) => element.pageType === 'demoSlide')
      return demoPage + startOfDemo
    }
  }
}

export const mutations = {
  initializeState(state) {
    if (state.slides) return;

    state.slides = []
    state.slides.push({ pageType: 'pictureSlide', id: 'ages' })
    state.slides.push({ pageType: 'textSlide', id: 'cv' })
    state.slides.push({ pageType: 'pictureSlide', id: 'while' })
    // state.slides.push({ pageType: 'textSlide', id: 'open' })
    state.slides.push({ pageType: 'pictureSlide', id: 'demo' })
    state.pagesData.pages.forEach((page) => {
      state.slides.push({ pageType: 'demoSlide', id: page.index })
    })
    state.slides.push({ pageType: 'textSlide', id: 'take-away' })
    state.slides.push({ pageType: 'textSlide', id: 'close' })
  },
  setFontSize(state, newValue) {
    localStorage.setItem('fontSize', newValue)
    state.fontSize = newValue
  },
  setSlideID(state, newValue) {
    state.slideID = newValue
  },
}

export const actions = {
  changeSlideBy({ commit, state }, changeBy) {
    const numOfSlides = state.slides.length
    var newSlideID = state.slideID + changeBy
    if (newSlideID > numOfSlides - 1) newSlideID = numOfSlides - 1
    if (newSlideID < 0) newSlideID = 0

    commit('setSlideID', newSlideID)
  },
}
