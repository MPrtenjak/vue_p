/**
description: Access an element of DOM - nextTick

slide-text-start
By using nextTick promise, we can be sure that Vue has done his business and DOM in synched with virtual DOM
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
      this.$nextTick(() => {
        this.$refs.valueOfNameDiv.innerText = this.$refs.nameDiv.innerText
      });
    },
  }
}
</script>
