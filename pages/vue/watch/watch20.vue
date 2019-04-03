/**
description: Watch for object change II

slide-text-start
With special syntax, you can watch or be notified whenever a concrete property of on object changes
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
    'name.firstName': function(value, oldValue) {
      this.changes.push({ value, oldValue })
    },
    'name.surName': function(value, oldValue) {
      this.changes.push({ value, oldValue })
    },
  },
}
</script>