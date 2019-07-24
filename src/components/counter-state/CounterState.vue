<template>
  <div class="counter">
    <input v-model="counter" />
    {{counter}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import VueTypes from "vue-types";

export default {
  props: {
    counter: VueTypes.number.isRequired,
    increment: VueTypes.func.isRequired,
    decrement: VueTypes.func.isRequired
  }
};
</script>

<style scoped lang="scss" />


