/**
description: Access an element of DOM

slide-text-start
When using other libraries with Vue that are dependant on DOM, results can be "strange"
slide-text-end
**/
<template>
  <div>
    <input v-model="name" placeholder="enter your name">
    <hr>
    <span ref="nameDiv" style="background-color: #464646;">My name is {{ name }}</span>
    <hr>
    Current value of 'nameDiv': [<span ref="valueOfNameDiv" />]
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null
    }
  },

  watch: {
    name() {
      this.$refs.valueOfNameDiv.innerText = this.$refs.nameDiv.innerText
    },
  }
}
</script>