<template>
  <div>
    <div v-if="loading">loading... {{ loading }}</div>
    <div v-if="!loading">
      <div>Name: {{ character.name }}</div>
      <div>
        Aliases:
        <ul v-for="(alias, index) in character.aliases" :key="`alias-${index}`">
          <li>{{ alias }}</li>
        </ul>
      </div>
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
  mounted: function() {
    charactersService.get(this.id);
  },
  watch: {
    id: function(id) {
      charactersService.get(id);
    }
  },
  computed: {
    charactersRequest: function() {
      return this.$store.getters.getEntity(`characters-${this.id}`);
    },
    loading: function() {
      return this.charactersRequest.loading;
    },
    character: function() {
      return this.charactersRequest.data;
    }
  }
};
</script>

<style />
