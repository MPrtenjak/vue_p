/**
description: ASI === Automatic Semicolon Insertion

slide-text-start
JavaScript interpreter will insert semicolons where it thinks they should be
slide-text-end
**/
<template>
  <div>
    {{ result }}<br>
    <button @click="result = calculate(null)">Calculate 1</button>
    <button @click="result = calculate('this is some input value')">Calculate 2</button>
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
    calculate(input) {
      if (!input)
        return `Empty value`;

      return;
        `Long string with result [${input}]`;
    }
  }
}
</script>