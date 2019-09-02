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
      type: Array,
      validator: VueTypes.arrayOf(
        VueTypes.shape({
          name: { type: String, required: true },
          path: { type: String, required: true }
        })
      ).validator,
      required: true
    }
  }
};
</script>

<style />
