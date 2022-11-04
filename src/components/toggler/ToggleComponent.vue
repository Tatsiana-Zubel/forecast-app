<template>
  <div class="toggle">
    <button @click="switchToCelsius()">&#8451;</button>
    <span>|</span>
    <button @click="switchToFahrenheit()">&#8457;</button>
  </div>
</template>

<script>
import { ToggleValues } from '@/shared/ToggleValues'

export default {
  name: "ToggleComponent",
  data() {
    return {
      toggleValue: null
    }
  },
  methods: {
    switchToCelsius() {
      this.toggleValue = ToggleValues.Celsius;
      this.$emit('toggle', this.toggleValue)
    },
    switchToFahrenheit() {
      this.toggleValue = ToggleValues.Fahrenheit
      this.$emit('toggle', this.toggleValue)
    }
  }
}
</script>

<style lang="scss">
.toggle {
  display: flex;
  justify-content: center;
  margin: 5px 0;

  button {
    width: 50%;
  }

  button:hover {
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }
}
</style>
