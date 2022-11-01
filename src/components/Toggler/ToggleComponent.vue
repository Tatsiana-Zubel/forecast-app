<template>
  <div class="toggle">
    <button @click="switchToCelsius()">&#8451;</button>
    <span>|</span>
    <button @click="switchToFahrenheit()">&#8457;</button>
  </div>
</template>

<script>
import './ToggleComponent.scss'
export default {
  name: "ToggleComponent",
  methods: {
    switchToCelsius() {
      console.log('switchToCelsius')
    },
    switchToFahrenheit() {
      console.log('switchToFahrenheit')
    }
  }
}

</script>