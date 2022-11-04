<template>
  <CardComponent title="Current weather">
    <ForecastComponent/>
  </CardComponent>
</template>

<script>
import CardComponent from './components/CardComponent.vue'
import ForecastComponent from "@/components/ForecastComponent";

export default {
  name: 'App',
  components: {
    ForecastComponent,
    CardComponent
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Menlo', sans-serif;
  color: #24292e;
  background-color: #f5f8fa;
  height: 100vh;
  padding: 25px;
}
</style>
