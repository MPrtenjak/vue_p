/**
description: Watch variable for change

slide-text-start
It is easy to watch changes on "simple" variables
slide-text-end
**/
<template>
  <div>
    <input v-model="firstName" placeholder="your first name">

    <ol>
      <li v-for="(change, idx) in changes" :key="idx">
        {{ change }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "James",
      changes: [],
    }
  },

  watch: {
    firstName: function(value, oldValue) {
      this.changes.push({ value, oldValue })
    },
  }
}
</script>