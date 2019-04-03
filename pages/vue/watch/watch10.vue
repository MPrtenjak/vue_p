/**
description: Watch for object change

slide-text-start
But you can't watch, when an element of an object will change!
Or can you?
slide-text-end
**/
<template>
  <div>
    <input v-model="name.firstName" placeholder="your first name">
    <input v-model="name.surName" placeholder="your family name">

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
      name: {
        firstName: "James",
        surName: "Bond",
      },
      changes: [],
    }
  },

  watch: {
    name: function(value, oldValue) {
      this.changes.push({ value, oldValue })
    },
  }
}
</script>