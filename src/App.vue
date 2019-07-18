<template>
  <div id="app">
    <MenuView />
    <router-view></router-view>
  </div>
</template>

<script>
import MenuView from "@/views/MenuView";

export default {
  name: "app",
  components: {
    MenuView
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
