/**
description: Whole object in template section

slide-text-start
Put constants in data section and they can be used in HTML template
Bad decision, because data section is for reactive (changing) elements, but constants DO NOT CHANGE
slide-text-end
**/
<template>
  <div>
    <div>Whole object = {{ chees }}</div>
    <hr>
    <div>One (constant) element = {{ chees.C3PO }}</div>
  </div>
</template>

<script>
import chees from './constants1.js'

export default {
  data: function() {
    return {
      chees
    }
  }
}
</script>
