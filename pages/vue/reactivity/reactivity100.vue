/**
description: Javascript Proxy object

slide-text-start
Reactivity means "react to change". But reacting is quite easy, just executing a function! Detecting is the problem!
Detecting is done by using a design pattern called 'Proxy'
Newer versions of JavaScript do have the exact object - 'Proxy'. And we can hook to proxy and detect all changes!
slide-text-end
**/
<template>
  <div>
    <button @click="test1">Get the whole object</button>
    <button @click="test2">Get name</button>
    <button @click="test3">Get "full name"</button>
    <br><hr>
    <button @click="test4">Set name</button>
  </div>
</template>

<script>

function Person () {
  this.name = "James Bond"
  this.age = 56
}

Person.prototype.getFullName = function() {
  return `${this.name} is ${this.age} old`
};

function GetPersonProxy() {
  let james = new Person()

  return new Proxy(james, {
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
  created() {
    this.jBond = GetPersonProxy()
  },

  methods: {
    test1() {
      console.log(this.jBond)
    },
    test2() {
      const result = this.jBond.name
    },
    test3() {
      const result = this.jBond.getFullName()
    },
    test4() {
      this.jBond.name = "Jessie Bond";
    }
  },
}
</script>