<template>
  <div class="row">
    <div class="col-md-4 col-lg-3 col-xl-2 mp-menu">
      <div class="sticky-top" >
        <div class="accordion" >
          <div class="card-header" >
            <div class="mp-code-zoom">
              <input v-model="fontSize" type="range" class="form-control-range" min="100" max="250" >
              <div class="mp-file-name">{{ fileCaption }}</div>
            </div>
          </div>
        </div>

        <div class="accordion" >
          <template v-for="folder in folders">
            <div :key="'folder_' + folder.id" class="card">
              <div class="card-header" >
                <h5 class="navbar-link" @click="currentFolder = (currentFolder == folder.id) ? null : folder.id">
                  {{ folder.caption }}
                </h5>
              </div>

              <div :class="{ collapse: true, show: currentFolder == folder.id}">
                <div class="card-body">
                  <template v-for="(page, pidx) in folder.pages">
                    <div :key="folder.id + '_page_' + pidx" >
                      <button type="button" class="btn btn-link" @click="openFile(page)">{{ pages[page].caption }}</button>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div :style="{ 'font-size': fontSize + '%' }" class="col-md-8 col-lg-9 col-xl-10 mp-content">
      <div class="mp-code-header sticky-top">
        <div class="mp-code-desc">
          {{ codeDescription }}
          <nuxt-link v-if="whenRunJumpToPage" :to="whenRunJumpToPage" target="_blank" class="btn-run btn btn-success mp-code-run">Run</nuxt-link>
        </div>

        <div v-show="slideText" class="mp-demo-slide-info">
          <div v-for="(text, tidx) in slideText" :key="'slide-text-' + tidx">
            > {{ text }}
          </div>
        </div>

        <div v-show="nextCodeDescription" class="mp-next-code-desc">
          Next: {{ nextCodeDescription }}
        </div>
      </div>

      <pre class="hljs" v-html="content" />
    </div>
  </div>
</template>

<script>
import _ from 'underscore'
import {} from '~/assets/js/highlight.pack.js'

import StoreMixin from '~/mixins/store'

export default {
  name: 'Demo',

  mixins: [ StoreMixin ],

  data: function() {
    return {
      content: null,
      currentFolder: null,
      currentPageIndex: null,
      whenRunJumpToPage: null,
    }
  },

  computed: {
    codeDescription() {
      return (this.currentPageIndex !== null) ? this.pages[this.currentPageIndex].description : null
    },
    nextCodeDescription () {
      return (this.currentPageIndex !== null) && (this.currentPageIndex < this.pages.length - 1) ? this.pages[this.currentPageIndex + 1].description : null
    },
    fileCaption() {
      return (this.currentPageIndex !== null) ? this.pages[this.currentPageIndex].caption : null
    },
    slideText() {
      return (this.currentPageIndex !== null) ? this.pages[this.currentPageIndex].slideText : null
    }
  },

  watch: {
    currentSlide () {
      this.openFile(this.getPage2DemoPage(this.currentSlide))
    }
  },

  mounted () {
    const a = this.getPage2DemoPage(this.currentSlide)
    this.openFile(this.getPage2DemoPage(this.currentSlide))
  },

  created() {
    this.$nuxt.$on('ACT_RUN', () => {
      const link = document.getElementsByClassName("btn-run")
      if ((!link) || (!link.length) || (link.length == 0)) return

      link[0].click()
    });
  },

  beforeDestroy() {
    this.$nuxt.$off('ACT_RUN');
  },

  methods: {
    openFile(index) {
      var getColoredSubstring = (sourceString, language) => {
        if (!sourceString) return null
        return hljs.highlight(language, sourceString).value
      }

      this.currentSlide = this.getDemoPage2Page(index)
      if ((index < 0) || (index >= this.pages.length)) return

      const pageInfo = this.pages[index]
      this.currentPageIndex = index
      this.currentFolder = pageInfo.folderSort
      this.whenRunJumpToPage = pageInfo.link

      const html = getColoredSubstring(pageInfo.html, 'html')
      const js = getColoredSubstring(pageInfo.js, 'js')

      if (pageInfo.ext == 'vue') {
        this.content = '&lt;template&gt;' + html + '&lt;/template&gt;<br/><br/>&lt;script&gt;' + js + '&lt;/script&gt;'
      } else {
        this.content = js
      }
    },
  },
}
</script>

<style lang="scss">
h5 {
  cursor: pointer;
}

.mp-code-zoom {
  text-align: center;
}

.mp-demo-slide-info {
  margin: 10px 0px;
  padding: 0px 10px;
  border: 2px outset #00bc8c;
  background-color: #444444;
  font-size: 80%;

  div {
    padding-left: 22px;
    text-indent: -22px;
    margin-bottom: 5px;
  }
}

.mp-file-name {
  color: aquamarine;
  margin-top: 15px;
}

.mp-code-run {
 font-weight: 900;
 margin-left: 30px;
 padding: 5px 20px;
}

.mp-menu {
  padding: 10px 20px;
}

.mp-content {
  /* background-color: lightblue; */
  padding: 10px 20px;
}

.mp-code-header {
  padding: 10px 0px 10px 10px;
  background-color: #333333;

  * {
    margin-right: 20px;
  }
}

.mp-code-desc {
  color: #00bc8c;
  font-weight: 900;
}

.mp-next-code-desc {
  color: #01bc8c;
  font-weight: 500;
  font-size: 80%;
}

.mp-epp {
  color: #00bc8c;
  font-weight: 900;
}
</style>
