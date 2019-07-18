<template>
  <div id="app">
    <HeaderView />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderView from "@/views/HeaderView";

export default {
  name: "app",
  components: {
    HeaderView
  }
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
