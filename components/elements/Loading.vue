<template>
  <div class="spinner"></div>
</template>

<style lang="scss" scoped>
.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid #fff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spinner 0.7s linear infinite;
}
@keyframes spinner {
  from {
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
