<template>
  <div>
    <div v-if="loading">
      loading... {{ loading }}
    </div>
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
import charactersService from '@/services/characters-service';
import { mapApiGetters } from '@/core/store';

export default {
  props: {
    id: { type: Number, required: true }
  },
  computed: {
    ...mapApiGetters({
      character: { service: charactersService, props: ['id'] }
    }),
    loading: function() {
      return !this.characterResponse.status;
    }
  },
  watch: {
    id: {
      immediate: true,
      handler: function(id) {
        charactersService.get(id);
      }
    }
  }
};
</script>

<style />
