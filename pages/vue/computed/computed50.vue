/**
description: When does computed property gets recalculated?

slide-text-start
Single, "insignificant" change can have unexpected results
slide-text-end
**/
<template>
  <div>
    <button @click="calculateTimes(10)">Do calculate</button>
    <hr>
    {{ time1 }}
    <hr>
    {{ time2 }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      time1: null,
      time2: null
    }
  },

  computed: {
    currentTime () {
      console.log(this.time1);
      return new Date();
    },
  },

  methods: {
    calculateTimes (offsetInMin) {
      const calcNewTime = (date) => {
        return new Date(date.getTime() + (offsetInMin * 60 * 1000))
      }

      this.time1 = calcNewTime(new Date())
      this.time2 = calcNewTime(this.currentTime)
    }
  }
}
</script>