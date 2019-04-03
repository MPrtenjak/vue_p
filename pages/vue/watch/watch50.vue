/**
description: searching when input change + created hook

slide-text-start
We can easily solve the problem, by calling search function in two places, at startup and when search expression changes
slide-text-end
**/
<template>
  <div>
    <input v-model="search" placeholder="search expr.">

    <ol>
      <li v-for="(name, idx) in names" :key="idx">
        {{ name }}
      </li>
    </ol>
  </div>
</template>

<script>
const allNames = ['Erazem', 'Eric', 'Erik', 'Erika', 'Erin', 'Ermin', 'Ermina',
                  'Erminija', 'Erna', 'Ernes', 'Ernest', 'Erneata', 'Ernestina',
                  'Ernst', 'Eros', 'Ersan', 'Ervin', 'Ervina'];

export default {
  data() {
    return {
      search: '',
      names: [],
    }
  },

  watch: {
    search(value) {
      this.findNames(value)
    }
  },

  created() {
    this.findNames(this.search)
  },

  methods: {
    findNames(value) {
      this.names = allNames.filter((name) => name.indexOf(value) >= 0)
    }
  },
}
</script>