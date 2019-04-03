/**
description: Basic structure of VUE single file

slide-text-start
In most of examples Vue lifecycle hooks are semantically written differently than other functions
Are they special?
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
  data: function() {
    return {
      fullName: null
    }
  },

  computed: {
    surName: function () {
      return this.fullName.split(" ")[1]
    },
    name: function () {
      return this.fullName.split(" ")[0]
    }
  },

  created() {
    this.fullName = "James Bond"
  }
}
</script>