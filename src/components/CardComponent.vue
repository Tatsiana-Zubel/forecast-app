<template>
  <div class="card">
    <span>{{ title }}</span>
    <ForecastComponent/>
  </div>
</template>

<script>
import './CardComponent.scss'
import ForecastComponent from "@/components/ForecastComponent";
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
