/**
description: Watch for object change - deep option II

slide-text-start
If we transform and save the values, we see that they are not the same across calls
But they are the same in one single call! (Pointers!)
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
        const myValue = JSON.stringify(value)
        const myOldValue = JSON.stringify(oldValue)
        this.changes.push({ myValue, myOldValue })
      },
      deep: true,
    }
  },
}
</script>