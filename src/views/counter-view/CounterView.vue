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
import { Counter, CounterState } from '@/components';
import mapActions from './CounterMapActions';
import mapState from './CounterMapState';

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
    ...mapActions
  },
  computed: {
    ...mapState
  }
};
</script>

<style />
