/**
description: Basic structure of VUE single file V

slide-text-start
The reason is arrow functions bind the parent context, so this will not be the Vue instance
slide-text-end
**/
<template>
  <div>
    <input v-model="fullName" placeholder="your name">

    <div>My name is {{ name }} aka {{ nameA }}</div>
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
    name() {
      console.log('name (clasical): ', this)
      return this.fullName.split(" ")[0]
    },
    nameA: () => {
      console.log('nameA (arrow): ', this)
      try {
        return this.fullName.split(" ")[0]
      } catch(err) {
        console.log(err)
        return err
      }
    }
  },

  created() {
    this.fullName = "James Bond"
  }
}
</script>