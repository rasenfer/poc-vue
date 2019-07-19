<template>
  <div id="app">
    <Header menuId="menu-view"/>
    <div class="container-fluid">
      <div class="row">
        <Menu class="menu col-sm-2" id="menu-view" :links="links"/>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import menuService from "@/services/MenuService";

import Header from "@/components/header/Header";
import Menu from "@/components/menu/Menu";

import logo from "@/assets/logo.png";

export default {
  name: "app",
  components: {
    Menu,
    Header
  },
  data: function() {
    return {
      logo,
      links: menuService.getMenu()
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header img {
  width: 1rem;
  height: 1rem;
}
.menu {
  background-color: blue;
  max-width: 250px;
  height: 100%;
}
</style>
