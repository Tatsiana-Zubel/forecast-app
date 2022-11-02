<template>
  <div class="toggle">
    <button @click="switchToCelsius()">&#8451;</button>
    <span>|</span>
    <button @click="switchToFahrenheit()">&#8457;</button>
  </div>
</template>

<script>
import './ToggleComponent.scss'
import { ToggleValues } from '../contstants/constants'
export default {
  name: "ToggleComponent",
  data() {
    return {
      toggleValue: null
    }
  },

  methods: {
    switchToCelsius() {
      this.toggleValue = ToggleValues.celsius;
      this.$emit('switch', this.toggleValue)
    },
    switchToFahrenheit() {
      this.toggleValue = ToggleValues.fahrenheit
      this.$emit('switch', this.toggleValue)
    }
  }
}

</script>