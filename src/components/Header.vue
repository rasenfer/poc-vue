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
      <span class="navbar-toggler-icon" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    toggle: { type: Boolean, default: false },
    logo: { type: String, required: true }
  }
};
</script>

<style scoped lang="scss" src="@/components/styles/header-style.scss" />