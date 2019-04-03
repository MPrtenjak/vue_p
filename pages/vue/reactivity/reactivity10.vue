/**
description: Change property of an object

slide-text-start
Simple variables and object properties are reactive
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
      name: {
        firstName: "James",
        surName: "Bond",
      }
    }
  },

  methods: {
    changeName() {
      this.name.firstName = "Julia";
    }
  }
}
</script>