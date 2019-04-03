/**
description: Using computed properties

slide-text-start
We have to use computed properties, which is better for (at least) TWO reasons
Separation of concerns
Reusability and testability
NOTE: We are using two divs under a template, so template has two children which is not allowed
slide-text-end
**/
<template>
  <div v-if="isC3PO">This is C-3PO</div>
  <div v-else>Upsi, not C-3PO</div>
</template>

<script>
import chees from './constants1.js'

export default {
  data: function() {
    return {
      variable: chees.C3PO,
    }
  },

  computed: {
    isC3PO() {
      return this.variable === chees.C3PO
    }
  }
}
</script>
