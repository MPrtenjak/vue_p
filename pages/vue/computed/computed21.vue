/**
description: Google like change detection - is this smart?

slide-text-start
This will not work
slide-text-end
**/
<template>
  <div>
    <input v-model="number" placeholder="number">
    <input v-model="double" placeholder="double">
  </div>
</template>

<script>
export default {
  computed: {
    double ()  {
      return this.number * 2
    },
    number () {
      return this.double * 2
    }
  }
}
</script>