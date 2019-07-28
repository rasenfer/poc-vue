<template>
  <MainView id="app">
    <router-view />
  </MainView>
</template>

<script>
import {MainView} from "@/views";
import Vue from "vue";
export default {
  name: Vue.config.appName,
  components: {
    MainView
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
