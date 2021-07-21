<template>
  <div class="error">
      <img src="@/assets/images/error.jpg" alt="error page image">
      <h1>"I think you have lost"</h1>
      <p><a href="/">Go back to the homepage</a></p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.error {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url("@/assets/images/noise.jpg");
    background-position-y: 100px;
    height: 100vh;

    & > img {
        pointer-events: none;
        user-select: none;
    }

    & > h1 {
        font-style: italic;
        font-weight: 300;
        color: #f9f755;
        font-size: 1.2rem;
    }

    & > p > a {
        font-size: 0.89rem;
        color: var(--primary-blue);
    }
}
</style>

<style lang="scss">
body {
    background: #1e1e1e;
}
</style>