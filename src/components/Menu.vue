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
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  }
};
</script>

<style />
