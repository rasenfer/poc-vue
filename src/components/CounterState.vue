<template>
  <div class="counter">
    <input v-model="counter" />
    {{ counter }}
    <button @click="increment">
      +
    </button>
    <button @click="decrement">
      -
    </button>
  </div>
</template>

<script>
export default {
  props: {
    counter: { type: Number, required: true },
    increment: { type: Function, required: true },
    decrement: { type: Function, required: true }
  }
};
</script>

<style scoped lang="scss" />


