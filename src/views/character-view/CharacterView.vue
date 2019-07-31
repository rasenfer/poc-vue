<template>
  <div>
    <div v-if="loading">loading... {{ loading }}</div>
    <div v-if="!loading">
      {{ character.name }}
    </div>
  </div>
</template>

<script>
import { charactersService } from "@/services";
import VueTypes from "vue-types";

export default {
  props: {
    id: VueTypes.number.isRequired
  },
  mounted() {
    charactersService.get(this.id);
  },
  computed: {
    charactersRequest: function() {
      return this.$store.getters.getEntity(`people-${this.id}`);
    },
    character: function() {
      return this.charactersRequest.data;
    },
    loading: function() {
      return this.charactersRequest.loading;
    }
  }
};
</script>

<style />
