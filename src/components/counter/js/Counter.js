export default {
  name: "counter",
  props: {
    start: Number
  },
  data: function () {
    return {
      counter: this.start
    }
  },
  methods: {
    increment: function () {
      this.counter++;
    },
    decrement: function () {
      this.counter--;
    }
  }
};