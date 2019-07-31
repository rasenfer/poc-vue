<template>
  <div>
    <div v-if="loading">loading... {{ loading }}</div>
    <table v-if="!loading" class="table">
      <thead>
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="character in characters" :key="`character-${character.id}`">
          <td>{{ character.id }}</td>
          <td>{{ character.name }}</td>
          <td>
            <router-link :to="{ name: 'character', params: { id: character.id } }">
              ->
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <nav v-if="!loading && pages" aria-label="Page navigation example">
      <ul class="pagination">
        <li v-if="page !== 1" class="page-item">
          <router-link
            class="page-link"
            :to="{ name: 'characters', query: { page: page - 1 } }"
          >
            Previous
          </router-link>
        </li>
        <li
          class="page-item"
          v-for="pageNumber in pages"
          :key="`page-${pageNumber}`"
        >
          <router-link
            class="page-link"
            :to="{ name: 'characters', query: { page: pageNumber } }"
          >
            {{ pageNumber }}
          </router-link>
        </li>
        <li v-if="page !== totalPages" class="page-item">
          <router-link
            class="page-link"
            :to="{ name: 'characters', query: { page: page + 1 } }"
          >
            Next
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import VueTypes from "vue-types";
import { charactersService } from "@/services";

export default {
  props: {
    page: VueTypes.number.def(1)
  },
  data: function() {
    return {
      pages: 0,
      totalPages: 0
    };
  },
  mounted() {
    charactersService.list({ page: this.page })
  },
  watch: {
    page: function(page) {
      charactersService.list({ page: this.page })
    },
    charactersRequest: function(response) {
      const { count } = response.data;
      this.totalPages = count;
      this.pages = Math.round(count / 10);
    }
  },
  computed: {
    charactersRequest: function() {
      return this.$store.getters.getEntity("people");
    },
    characters: function() {
      return this.charactersRequest.data.results;
    },
    loading: function() {
      return this.charactersRequest.loading;
    }
  }
};
</script>

<style />
