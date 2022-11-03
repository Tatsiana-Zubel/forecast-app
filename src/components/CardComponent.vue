<template>
  <div class="card">
    <span class="title">{{ title }}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    title: String
  }
}
</script>

<style lang="scss">
.card {
  border-style: solid dashed solid;
  padding: 10px;
  width: 160px;

  * {
    text-transform: uppercase;
    cursor: default;
  }
}
</style>
