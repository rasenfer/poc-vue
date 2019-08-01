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
import { charactersService } from '@/services';
import VueTypes from 'vue-types';

export default {
  props: {
    id: VueTypes.number.isRequired
  },
  data: () => ({ loading: true, character: {} }),
  methods: {
    getCharacter: function(id) {
      charactersService.get(id).then(response => {
        this.loading = false;
        this.character = response.data.content;
      });
    }
  },
  mounted: function() {
    this.getCharacter(this.id);
  },
  watch: {
    id: function(id) {
      this.getCharacter(id);
    }
  }
};
</script>

<style />
