/**
description: Proxying object - event bus second try

slide-text-start
This example is the same as before, again using an event bus, only now it hooks to event bus before proxy!
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
    this.$nuxt.$on('ACT_PROXY', (data) => {
      this.changes.push(`FROM PROXY: ${JSON.stringify(data)}`)
    });
    this.obj = GetProxy({ name: 'James' })
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