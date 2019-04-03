/**
description: Change element of the array

slide-text-start
Change of array element is not reactive
Well changing an element is just changing a memory slot and Vue can't detect that by inspection a pointer to the beginning of an array
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
      this.name[0] = "Julia";
    }
  }
}
</script>