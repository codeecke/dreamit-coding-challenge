<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
  <header>

    <div class="wrapper">
      <div class="brand">My Fantasy-Lottery</div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/results">Results</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;

  --hue: 160;
    --saturation: 100%;
    --brightness: 37%;

    border-bottom: 1px solid hsl(160, 100%, 37%);


  .brand {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
  }

  nav {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    width: 100%;
    font-size: 12px;

    a {
      display: inline-block;
      padding: 0 1rem;
      border-left: 1px solid var(--color-border);

      &.router-link-exact-active {
        color: var(--color-text);

        &:hover {
          background-color: transparent;
        }
      }

      &:first-of-type {
        border: 0;
      }
    }
  }
}



@media (min-width: 1024px) {
  header {
    display: flex;


    .wrapper {
      display: flex;
      place-items: normal;
      justify-content: space-between;
      width: 100%;
      align-items: center;
    }

    .brand {
      white-space: nowrap;
    }

    nav {
      justify-content: flex-end;
      margin: 0;
      text-align: right;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;

    }
  }

}
</style>
