/**
description: Google like change detection - with a twist

slide-text-start
But, as any javascript property, computed properties can have getters and setters
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
  data() {
    return {
      number: 5,
    }
  },

  computed: {
    double: {
      get () { return this.number * 2 },
      set (newValue) { this.number = newValue / 2 }
    },
  },
}
</script>