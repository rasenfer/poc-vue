<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png" />
    <Counter :start="start" />
    <About />
  </div>
</template>

<script>
import Counter from "./components/counter/Counter";
import About from "./components/about/About";

export default {
  name: "App",
  components: {
    Counter,
    About
  },
  data: function() {
    return {
      start: 10
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
