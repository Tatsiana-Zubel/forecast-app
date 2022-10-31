<template>
  <CardComponent title="Current weather"/>
</template>

<script>
import CardComponent from './components/CardComponent.vue'

export default {
  name: 'App',
  components: {
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
