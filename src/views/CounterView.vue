<template>
  <Counter :start="start" />
</template>

<script>
import Counter from "@/components/counter/Counter";

export default {
  components: {
    Counter
  },
  data: function() {
    return {
      start: 10
    };
  }
};
</script>

<style />
