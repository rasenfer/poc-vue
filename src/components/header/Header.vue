<template>
  <div class="header">
    <span>
      <img class="logo" src="@/assets/logo.png" />
    </span>
    <span v-for="link in links" :key="link.name">
      <router-link :to="link.path">{{link.name}}</router-link>
    </span>
  </div>
</template>

<script>
import VueTypes from "vue-types";

export default {
  name: "headerComponent",
  props: {
    links: VueTypes.arrayOf(
      VueTypes.shape({
        name: VueTypes.string.isRequired,
        path: VueTypes.string.isRequired
      })
    ).isRequired
  }
};
</script>

<style />
