/**
description: Change the whole object

slide-text-start
Changing a whole object represents changing a pointer and Vue ca certainly detect that
slide-text-end
**/
<template>
  <div>
    <div>My name is {{ name }}</div>
    <button @click="change">Change object</button>
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
    change() {
      let newObject = {
        company: "BMW",
        model: "X3",
      }

      this.name = newObject
    }
  }
}
</script>