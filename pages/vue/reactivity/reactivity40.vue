/**
description: Replace an element in the array - reactivity works

slide-text-start
All the same is with changing an element in array, by using a function, Vue can detect and react to change
slide-text-end
**/
<template>
  <div>
    <div>My name is {{ name }}</div>
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ["James", "Bond"]
    }
  },

  methods: {
    changeName() {
      this.$set(this.name, 0, "Julia")
    }
  }
}
</script>