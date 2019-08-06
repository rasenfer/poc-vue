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
import VueTypes from 'vue-types';
import { charactersService } from '@/services';
import { mapServiceGetters } from '@/core/store';

export default {
  props: {
    id: VueTypes.number.isRequired
  },
  watch: {
    id: {
      immediate: true,
      handler: function(id) {
        charactersService.get(id);
      }
    }
  },
  computed: {
    ...mapServiceGetters([charactersService]),
    character: function() {
      return this.charactersResponse.data;
    },
    loading: function() {
      return this.charactersResponse.config.fetching;
    }
  }
};
</script>

<style />
