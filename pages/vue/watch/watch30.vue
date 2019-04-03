/**
description: Watch for object change - deep option

slide-text-start
But Vue also has special, hidden, gem.
Deep property
But now, old and new values seems to be the same?
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
    name: {
      handler: function(value, oldValue) {
        this.changes.push({ value, oldValue })
      },
      deep: true,
    }
  },
}
</script>