<template>
  <div>
    <div>Counter</div>
    <Counter :start="start" />
    <div>Counter With Vuex</div>
    <CounterState
      :counter="counter.counter"
      :increment="countIncrement"
      :decrement="countDecrement"
    />
  </div>
</template>

<script>
import Counter from "@/components/Counter";
import CounterState from "@/components/CounterState";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      start: 10
    };
  },
  components: {
    Counter,
    CounterState
  },
  methods: {
    ...mapActions(["countIncrement", "countDecrement"])
  },
  computed: {
    ...mapState(["counter"])
  }
};
</script>

<style />
