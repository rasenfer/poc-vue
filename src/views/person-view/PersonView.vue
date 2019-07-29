<template>
  <div>
    <div v-if="loading">loading... {{ loading }}</div>
    <div v-if="!loading">
      {{ person.name }}
    </div>
  </div>
</template>

<script>
import { peopleService } from "@/services";
import VueTypes from "vue-types";

export default {
  props: {
    id: VueTypes.number.isRequired
  },
  mounted() {
    peopleService.get(this.id);
  },
  computed: {
    peopleRequest: function() {
      return this.$store.getters.getApiRequest(`people-${this.id}`);
    },
    person: function() {
      return this.peopleRequest.data;
    },
    loading: function() {
      return this.peopleRequest.loading;
    }
  }
};
</script>

<style />
