<template>
  <Menu :links="links"/>
</template>

<script>
import Menu from "@/components/menu/Menu";
import menuService from "@/services/MenuService"

export default {
  name: "menuView",
  components: { Menu },
  data: function() {
    return {
      ...menuService.getMenu()
    };
  }
};
</script>

<style />
