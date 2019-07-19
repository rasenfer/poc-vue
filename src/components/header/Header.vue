<template>
  <div class="navbar navbar-light">
    <div class="navbar-brand">
      <img :src="logo" />
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      :data-target="'#'+ menuId"
      :aria-controls="menuId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</template>

<script>
import VueTypes from "vue-types";
export default {
  props: {
    menuId: VueTypes.string,
    logo: VueTypes.string.isRequired
  }
};
</script>

<style />
