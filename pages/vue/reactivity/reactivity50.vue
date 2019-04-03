/**
description: Add a property to the object

slide-text-start
But, adding a new property to an object is again not reactive :(
slide-text-end
**/
<template>
  <div>
    <div>My name is {{ name }}</div>
    <button @click="addNewProperty">Add new property</button>
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
    addNewProperty() {
      this.name.newProperty = 1;
    }
  }
}
</script>