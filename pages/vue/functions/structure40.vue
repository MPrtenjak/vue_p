/**
description: Basic structure of VUE single file IV

slide-text-start
But you can't use arrow functions
slide-text-end
**/
<template>
  <div>
    <input v-model="fullName" placeholder="your name">

    <div>My name is {{ surName }},  {{ name }} {{ surName }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: null
    }
  },

  computed: {
    surName: () => {
      return this.fullName.split(" ")[1]
    },
    name() {
      return this.fullName.split(" ")[0]
    }
  },

  created() {
    this.fullName = "James Bond"
  }
}
</script>