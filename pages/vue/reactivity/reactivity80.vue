/**
description: Change the whole object, change the property and add one

slide-text-start
Playing with actions can resemble Vue being able to detect adding a property?
Change object -> Add property -> Change Company
slide-text-end
**/
<template>
  <div>
    <div>My name is {{ name }}</div>
    <button @click="changeObject">Change Object</button>
    <button @click="changeCompany">Change Company</button>
    <button @click="addNewProperty">Add new Property</button>
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
    changeObject() {
      let newObject = {
        company: "BMW",
        model: "X3",
      }

      this.name = newObject
    },
    changeCompany() {
      this.name.company = 'Skoda'
    },
    addNewProperty() {
      this.name.newProperty = 1;
    }
  }
}
</script>