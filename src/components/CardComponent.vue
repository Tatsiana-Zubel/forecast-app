<template>
  <div class="card">
    <span>{{ title }}</span>
    <p>
      Hey,<br>
      this is card paragraph
    </p>
  </div>
</template>

<script>
import './CardComponent.scss'
export default {
  name: 'CardComponent',
  props: {
    title: String
  }
}
</script>

<style>
</style>
