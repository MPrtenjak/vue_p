/**
description: safely access or query DOM

slide-text-start
By using nextTick in mounted hook you can safely access or query DOM
slide-text-end
**/
<template>
  <div>
    some html
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null
    }
  },

  mounted() {
    this.$nextTick(() => {
      // The whole view is rendered, so you can safely access or query DOM
    })
  },
}
</script>
