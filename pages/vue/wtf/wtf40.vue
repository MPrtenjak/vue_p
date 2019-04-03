/**
description: ASI === Automatic Semicolon Insertion II

slide-text-start
JavaScript interpreter makes totally wrong decision only regarding return statements other statements are not affected by this "stupidity"
Us ESLint option 'consistent-return'!
slide-text-end
**/
<template>
  <div>
    {{ result }}<br>
    <button @click="result = forLoop(5)">For Loop</button>
    <button @click="result = whileLoop(5)">While Loop</button>
    <button @click="result = decision(true)">Decision</button>
    <button @click="result = decision(false)">Decision</button>
    <button @click="result = fancyDecision(true)">Fancy Decision</button>
    <button @click="result = fancyDecision(false)">Fancy Decision</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      result: null
    }
  },

  methods: {
    forLoop (max) {
      var tmp = ['for:']

      for (var i = 0; i < max; ++i)


        tmp.push(i)

      return tmp;
    },
    whileLoop (max) {
      var tmp = ['while:']
      var i = 0

      while (i < max)
      {
        tmp.push(++i)
      }

      return tmp;
    },
    decision (value) {
      return (value) ?
        "This is positive decision" :
        "This is negative decision"
    },
    fancyDecision (value) {
      return
        (value) ?
          "This is positive decision" :
          "This is negative decision"
    }
  }
}
</script>