<template>
  <ul class="navbar-nav">
    <li v-for="link in links" :key="link.name" class="nav-item">
      <router-link class="nav-link" :to="link.path">
        {{ link.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  props: {
    links: {
      type: VueTypes.arrayOf(
        VueTypes.shape({
          name: VueTypes.string.isRequired,
          path: VueTypes.string.isRequired
        })
      ),
      required: true
    }
  }
};
</script>

<style />
