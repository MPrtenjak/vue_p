/**
description: Proxying object - notification

slide-text-start
Design patterns are great and we should definitely use them, but in this concrete example the event bus is a bit of an "over-kill".
Here we can use simple call-back function and the code is smaller and easier to read.
NOTE: Something is displayed at the beginning! Here you can see that Vue is inspecting object
slide-text-end
**/
<template>
  <div>
    <button @click="test1">Get name</button>
    <button @click="test2">Change name</button>
    <button @click="test3">Add surname</button>
    <button @click="changes=[]">Clear</button>

    <ol>
      <li v-for="(cng, cidx) in changes" :key="cidx">{{ cng }}</li>
    </ol>
  </div>
</template>

<script>
function GetProxy(object, notifierFunction) {
  return new Proxy(object, {
    get: function(target, prop, receiver) {
      notifierFunction({ type: 'GET', prop });
      return target[prop]
    },

    set: function(obj, prop, value) {
      notifierFunction({ type: 'SET', prop, value });
      return Reflect.set(...arguments)
    }
  });
}

export default {
  data() {
    return {
      obj: null,
      changes: [],
    }
  },

  created() {
    this.obj = GetProxy({ name: 'James' }, (data) => {
      this.changes.push(`FROM PROXY: ${JSON.stringify(data)}`)
    });
  },

  methods: {
    test1() {
      let n = this.obj.name
    },
    test2() {
      this.obj.name = 'Jessie'
    },
    test3() {
      this.obj.surName = 'Bond'
    }
  },
}
</script>