/**
description: Error in template

slide-text-start
We can't use two IF statements, because they are (in general) unrelated so they can both be true
The solution IF - ELSE is in error description
slide-text-end
**/
/*
<template>
  <div v-if="isC3PO">This is C-3PO</div>
  <div v-if="notC3PO">Upsi, not C-3PO</div>
</template>

***********************************************************
  Error compiling template:

  <div v-if="isC3PO">This is C-3PO</div>
  <div v-if="notC3PO">Upsi, not C-3PO</div>

  - Component template should contain exactly one root element.

    If you are using v-if on multiple elements,
    use v-else-if to chain them instead.
***********************************************************

<script>
...
</script>
*/