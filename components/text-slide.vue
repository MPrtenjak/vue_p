<template>
  <div class="row">
    <div class="col mp-slide">
      <div class="mp-slide-body">
        <dl v-for="(def, didx) in currentDefinition" :key="didx">
          <h1 v-if="def.header">{{ def.header }}</h1>
          <dt>{{ def.dt }}</dt>
          <dd v-html="def.dd" />
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import StoreMixin from '~/mixins/store'

export default {
  name: 'Slide',

  mixins: [ StoreMixin ],

  data() {
    return {
      definitions: {
        'open': [
          {
            dt: 'Content',
            dd: 'Show the path in learning VUE from the perspective of an experienced developer whose mindset is set to third generation languages with strong type checking.'
          },
          {
            dt: 'Difficulty',
            dd: '<b>#200</b> - Basic knowledge of VUE is desirable'
          },
          {
            dt: 'Expected Audience',
            dd: 'Developers using VUE'
          },
          {
            dt: 'Presented by',
            dd: 'Matjaž Prtenjak'
          },
        ],
        'cv': [
          {
            dt: 'Developer',
            dd: '<ul><li>> 20 years of professional work experience</li><li>> 30 years developing SW</li></ul>'
          },
          {
            dt: 'Begginings',
            dd: '<uč><li>Commodore 64 - <b>Basic</b></li><li>IBM360 - <b>PL/1</b></li><li>PC - <b>C/C++</b></li></ul>'
          },
          {
            dt: 'Currently',
            dd: `<ul><li>Head of a team, responsible for maintaining 20 years old POS System that I have designed (back-end: <b>PL/SQL / Pervasive Btrieve DB)</b>, middle-tear: <b>.NET</b>, front-end: <b>C++</b>)</li>
                     <li>Microsoft Office - macros in <b>VBA</b></li><li>Utilities: <b>PowerShell, python</b></li></ul>`
          },
          {
            dt: 'Freelancer',
            dd: `<ul><li>All of the above</li><li>+ web (<b>PHP, javascript, VUE...</b>)</li></ul>`
          },
        ],
        'take-away': [
          {
            header: 'Something to "take away"',
          },
          {
            dt: 'Javascript will definitely survive for a long time - Vue may not!'
          },
          {
            dt: 'Business logic is and should be on the middle-tier, but in practice a lot of business logic is also on front end. Do not put it in Vue!'
          },
          {
            dt: 'Create libraries in javascript. Today probability by using webpack, tomorrow something else, but this libraries, this logic, is there to stay and can be applied to any (JavaScript) front-end. Call this libraries from Vue. Put as minimal code in Vue as possibile'
          },
          {
            dt: 'Be aware of little differences between programming languages'
          },
          {
            dt: 'Use Nuxt :)'
          },
        ],
        'close': [
          {
            dt: 'GitHub project',
            dd: 'The whole presentation, written in NUXT, is available on my GitHub account: <span class="mp-info">https://github.com/MPrtenjak</span>'
          },
          {
            dt: 'Contacts',
            dd: `You can reach me: <ul>
            <li>on twitter / github: <span class="mp-info">@MPrtenjak</span></li>
            <li>by e.mail: <span class="mp-info">info@mnet.si</span></li>
            <li>by web: <span class="mp-info">mnet.si</span></li>
            </ul>`
          },
        ],
      }
    }
  },

  computed: {
    currentDefinition () {
      const prop = this.slide.id
      return this.definitions[prop]
    }
  }
}
</script>

<style lang="scss">
.mp-slide {
  padding-top: 10px;
  font-size: 3vh;

  &-body {
    margin-left: 100px;
    margin-right: 100px;

    dt {
      font-size: 120%;
      color: #00bc8c;
      margin-top: 20px;
    }

    dd {
      margin-left: 50px;
    }

    b {
      color: #00bc8c;
    }
  }
}

.mp-info {
  color: #00bc8c;
  font-weight: 900;
  font-size: 100%;
}
</style>