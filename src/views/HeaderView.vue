<template>
  <Header :links="links"/>
</template>

<script>
import Header from "@/components/header/Header";

export default {
  name: "headerView",
  components: { Header },
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
