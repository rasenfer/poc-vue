<template>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item" v-for="link in links" :key="link.name">
        <router-link class="nav-link" :to="link.path">{{link.name}}</router-link>
      </li>
    </ul>
  </div>
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
    ).isRequired
  }
};
</script>

<style />
