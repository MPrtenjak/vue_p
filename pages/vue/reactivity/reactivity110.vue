/**
description: Proxying array

slide-text-start
The same example as previous, but using array instead of object
slide-text-end
**/
<template>
  <div>
    <button @click="test1">Get the whole array</button>
    <button @click="test2">Change second element to 22</button>
    <button @click="test3">Add element</button>
  </div>
</template>

<script>
function GetProxy(object) {
  return new Proxy(object, {
    get: function(target, prop, receiver) {
      console.log(`##PROXY get##: ${prop} was accessed.`)
      return target[prop]
    },

    set: function(obj, prop, value) {
      console.log(`##PROXY set##: ${prop} set to ${value}`)
      return Reflect.set(...arguments)
    }
  });
}

export default {
  created () {
    this.array = GetProxy([10, 20, 30])
  },

  methods: {
    test1() {
      console.log(this.array)
    },
    test2() {
      this.array[1] = 22
    },
    test3() {
      this.array.push(40)
    }
  },
}
</script>