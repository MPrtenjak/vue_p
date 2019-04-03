/**
description: Constant in template section

slide-text-start
Importing and just using constants in template does not work
slide-text-end
**/
<template>
  <div>My constant = {{ chees.C3PO }}</div>
</template>

<script>
import chees from './constants1.js'

export default {
}
</script>
