<template>
  <div class="card">
    <span class="title">{{ title }}</span>
    <ForecastComponent/>
  </div>
</template>

<script>
import ForecastComponent from "@/components/ForecastComponent"

export default {
  name: 'CardComponent',
  components: {
    ForecastComponent
  },
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
