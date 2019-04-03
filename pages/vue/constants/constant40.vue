/**
description: Variable (with constant value) in template

slide-text-start
Well we are using constants to check or set some variables and variable can be set to a constant and displayed
slide-text-end
**/
<template>
  <div>My constant {{ variable }}</div>
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
