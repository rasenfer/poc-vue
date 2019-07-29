<template>
  <div>
    <div class="container-fluid">
      <Header class="header row" toggle="menu-view" :logo="logo" />
      <div class="row body withFooter">
        <div id="menu-view" class="menu withFooter col-sm-2 collapse navbar-collapse">
          <Menu :links="links" :onClick="navigate" />
        </div>
        <div class="content withFooter" :id="path">
          <router-view />
        </div>
      </div>
      <div class="footer">v{{version}}{{env !== 'production' ? ' - env: ' + env : ''}}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { menuService } from "@/services";
import { Header, Menu } from "@/components";

import logo from "@/assets/logo.png";

export default {
  components: {
    Menu,
    Header
  },
  data: function() {
    return {
      logo,
      version: process.env.VUE_APP_VERSION,
      env: process.env.NODE_ENV,
      links: menuService.getMenu()
    };
  },
  beforeUpdate: function() {
    if (this.$router.currentRoute.path != this.path) {
      this.navigate(this.path);
    }
  },
  methods: {
    ...mapActions(["navigate"])
  },
  computed: {
    path: function() {
      return this.$store.state.router.path;
    }
  }
};
</script>

<style lang="scss" src="./main-view-style.scss" />
