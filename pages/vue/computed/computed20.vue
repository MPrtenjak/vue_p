/**
description: Google like change detection computed -> watch

slide-text-start
But what if we want dependant computed properties?
Will this create an endless loop?
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
      double: 10,
    }
  },

  /* can't do that
  // ERROR: Duplicate key
  computed: {
    double ()  {
      return this.number * 2
    },
    number () {
      return this.double / 2
    }
  },
  */

  watch: {
    number () {
      this.double = this.number * 2
    },
    double () {
      this.number = this.double / 2
    },
  }
}
</script>