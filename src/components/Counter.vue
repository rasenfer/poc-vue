<template>
  <div class="counter">
    <input v-model="counter" />
    {{ counter }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  props: {
    start: Number
  },
  data: function() {
    return {
      counter: this.start
    };
  },
  methods: {
    increment: function() {
      this.counter++;
    },
    decrement: function() {
      this.counter--;
    }
  }
};
</script>

<style scoped lang="scss" src="@/components/styles/counter-style.scss" />


