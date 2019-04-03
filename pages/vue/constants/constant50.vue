/**
description: Check, with constant, in template

slide-text-start
Use-case: Conditional display of HTML elements
Again you cant't use constant in HTML template
slide-text-end
**/
<template>
  <div>
    <div v-if="variable === chees.C3PO">This is C-3PO</div>
    <div v-else>Upsi not C3PO</div>
  </div>
</template>

<script>
import chees from './constants1.js'

export default {
  data: function() {
    return {
      variable: chees.C3PO,
    }
  },
}
</script>
