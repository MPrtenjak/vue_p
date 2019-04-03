/**
description: Add an element to the array

slide-text-start
But, Vue can certainly detect using a function on an array
Adding element by using a function is detectible so it is reactive
slide-text-end
**/
<template>
  <div>
    <div>My name is {{ name }}</div>
    <button @click="addName">Add Name</button>
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
    addName() {
      this.name.push("Julia");
    }
  }
}
</script>