/**
description: Proxying object - event bus

slide-text-start
To make the talk a little more exciting. Console.log is ok, but how can we hook Vue to proxy and display changes on screen.
We can use another design pattern called observer~subscriber and by using event bus Vue can be notified when changes ocures.
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
function GetProxy(object) {
  return new Proxy(object, {
    get: function(target, prop, receiver) {
      $nuxt.$emit('ACT_PROXY', { type: 'GET', prop });
      return target[prop]
    },

    set: function(obj, prop, value) {
      $nuxt.$emit('ACT_PROXY', { type: 'SET', prop, value });
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
    this.obj = GetProxy({ name: 'James' })
    this.$nuxt.$on('ACT_PROXY', (data) => {
      this.changes.push(`FROM PROXY: ${JSON.stringify(data)}`)
    });
  },

  beforeDestroy() {
    this.$nuxt.$off('ACT_PROXY');
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