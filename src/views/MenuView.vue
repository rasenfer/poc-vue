<template>
  <Menu :links="links"/>
</template>

<script>
import Menu from "@/components/menu/Menu";

export default {
  name: "menuView",
  components: { Menu },
  data: function() {
    return {
      links: [
        {
          name: "Counter",
          path: "/counter"
        },
        {
          name: "About",
          path: "/about"
        }
      ]
    };
  }
};
</script>

<style />
