<template>
  <ul class="navbar-nav">
    <li class="nav-item" v-for="link in links" :key="link.name">
      <a class="nav-link" @click="onClick(link.path)" href="#">{{link.name}}</a>
    </li>
  </ul>
</template>

<script>
import VueTypes from "vue-types";

export default {
  props: {
    links: VueTypes.arrayOf(
      VueTypes.shape({
        name: VueTypes.string.isRequired,
        path: VueTypes.string.isRequired
      })
    ).isRequired,
    onClick: VueTypes.func.isRequired
  }
};
</script>

<style />
