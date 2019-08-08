<template>
  <div id="header" class="navbar navbar-light">
    <div class="navbar-brand">
      <img :src="logo" />
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      :data-target="`#${toggle}`"
      :aria-controls="toggle"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
export default {
  props: {
    toggle: VueTypes.string,
    logo: VueTypes.string.isRequired
  }
};
</script>

<style scoped lang="scss" src="@/components/styles/header-style.scss" />