<template>
  <div>
    <div class="container-fluid">
      <Header class="header row" toggle="menu-view" :logo="logo" />
      <div class="row body withFooter">
        <div
          id="menu-view"
          class="menu withFooter col-sm-2 collapse navbar-collapse"
        >
          <Menu :links="links" />
        </div>
        <div class="content withFooter">
          <router-view />
        </div>
      </div>
      <div class="footer">
        v{{ version }}{{ env !== "production" ? " - env: " + env : "" }}
      </div>
    </div>
  </div>
</template>

<script>
import { menuService } from '@/services';
import { Header, Menu } from '@/components';

import logo from '@/assets/logo.png';

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
  }
};
</script>

<style lang="scss" src="./main-view-style.scss" />
