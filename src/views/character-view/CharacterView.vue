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
  data: () => ({ loading: true, character: {} }),
  watch: {
    id: {
      immediate: true,
      handler: function(id) {
        this.loading = true;
        charactersService.get(id).then(response => {
          this.loading = false;
          this.character = response.data;
        });
      }
    }
  }
};
</script>

<style />
