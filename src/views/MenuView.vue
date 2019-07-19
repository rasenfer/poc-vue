<template>
  <Menu :links="links"/>
</template>

<script>
import menuService from "@/services/MenuService";
import Menu from "@/components/menu/Menu";

export default {
  name: "menuView",
  components: { Menu },
  data: function() {
    return {
      links: menuService.getMenu()
    };
  }
};
</script>

<style scoped>
.logo {
  width: 1rem;
  height: 1rem;
}
</style>
