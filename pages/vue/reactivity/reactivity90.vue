/**
description: Change the whole object, change the property and add one - reactivity?

slide-text-start
By carefully examining single action, we can see than actions do change object, but Vue can't detect all the changes.
slide-text-end
**/
<template>
  <div>
    <div>My name is {{ name }}</div>
    <button @click="display(changeObject)">Change Object</button>
    <button @click="display(changeCompany)">Change Company</button>
    <button @click="display(addNewProperty)">Add new Property</button>

    <hr>
    Value of 'name' before action: [<span ref="nameSpanBefore" />]

    <hr>
    Value of 'name' after action: [<span ref="nameSpanAfter" />]
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
    display(action) {
      this.$refs.nameSpanBefore.innerText = JSON.stringify(this.name)
      action();
      this.$refs.nameSpanAfter.innerText = JSON.stringify(this.name)
    },
    changeObject() {
      this.name = {
        company: "BMW",
        model: "X3",
      }
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