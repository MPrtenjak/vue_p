/**
description: Basic usage of computed element

slide-text-start
Using computed properties is easy
slide-text-end
**/
<template>
  <div>
    <input v-model="number" placeholder="number">

    {{ number || 0 }} * 2 = {{ double }}
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
    double ()  {
      return this.number * 2
    },
  },
}
</script>