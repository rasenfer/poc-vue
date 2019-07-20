<template>
  <div id="header" class="navbar navbar-light">
    <div class="navbar-brand">
      <img :src="logo" />
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      :data-target="'#'+ toggle"
      :aria-controls="toggle"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</template>

<script src="./header-script.js" />

<style scoped lang="scss" src="./header-style.scss" />