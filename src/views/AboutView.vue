<template>
  <About v-bind="$data"/>
</template>

<script>
import About from "@/components/about/About";

export default {
  components: {
    About
  },
  data: function() {
    return {
      version: process.env.VUE_APP_VERSION,
      env: process.env.NODE_ENV,
      endpointUrl: endpoint,
      lodashVersion: _.VERSION
    };
  }
};
</script>

<style />
