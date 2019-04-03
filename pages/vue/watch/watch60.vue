/**
description: searching when input change + option immediate

slide-text-start
But again, Vue has a hidden gem, immediate property
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
    search: {
      handler (value) { this.names = allNames.filter((name) => name.indexOf(value) >= 0) },
      immediate: true,
    }
  },
}
</script>