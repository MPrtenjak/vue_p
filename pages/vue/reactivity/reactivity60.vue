/**
description: Add a property to the object (array style)

slide-text-start
And, again, adding a property through a function, make it detectable by Vue
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
      this.$set(this.name, 'newProperty', 1);
    }
  }
}
</script>