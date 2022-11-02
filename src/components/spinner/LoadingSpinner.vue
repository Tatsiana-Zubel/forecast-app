<template>
  <div class="wrapper">
    <div class="spinner"></div>
  </div>
</template>

<style lang="scss">
.wrapper {
  padding: 20px 0;

  .spinner {
    border: 8px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    border-top: 8px solid #2196F3;
    border-bottom: 8px solid #2196F3;
    width: 60px;
    height: 60px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    margin: 0 auto;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
