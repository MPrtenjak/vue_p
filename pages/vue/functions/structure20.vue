/**
description: Basic structure of VUE single file II

slide-text-start
No, You can use the same semantics; with function keyword
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

  created: function () {
    this.fullName = "James Bond"
  }
}
</script>