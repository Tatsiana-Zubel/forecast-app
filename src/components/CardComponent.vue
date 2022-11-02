<template>
  <div class="card">
    <span class="title">{{ title }}</span>
    <ForecastComponent/>
  </div>
</template>

<script>
import './CardComponent.scss'
import ForecastComponent from "@/components/ForecastComponent";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Card',
  components: {
    ForecastComponent
  },
  props: {
    title: String
  }
}
</script>
