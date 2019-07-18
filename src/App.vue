<template>
  <div id="app">
    <span>
      <img class="logo" src="@/assets/logo.png" />
    </span>
    <span>
      <router-link to="/counter">Counter</router-link>
    </span>
    <span>
      <router-link to="/about">About</router-link>
    </span>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.logo {
  width: 1rem;
  height: 1rem;
}
</style>
