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
          <td>{{ character.name || character.aliases[0] }}</td>
          <td>
            <router-link
              :to="{ name: 'character', params: { id: character.id } }"
              >-></router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <nav v-if="!loading && pageMetadata" aria-label="Page navigation example">
      <ul class="pagination">
        <li v-if="page !== 1" class="page-item">
          <router-link
            class="page-link"
            :to="{ path: '/characters', query: { page: page - 1 } }"
            >Prev</router-link
          >
        </li>
        <div
          v-for="pageNumber in pageMetadata.totalPages"
          :key="`page-${pageNumber}`"
        >
          <li
            v-if="
              pageNumber == page ||
                (page - 5 < 0 && pageNumber < 10) ||
                (page + 5 > pageMetadata.totalPages &&
                  pageNumber > pageMetadata.totalPages - 9) ||
                (pageNumber < page && pageNumber > page - 5) ||
                (pageNumber > page && pageNumber < page + 5)
            "
            class="page-item"
          >
            <router-link
              class="page-link"
              :to="{ path: '/characters', query: { page: pageNumber } }"
              >{{ pageNumber }}</router-link
            >
          </li>
        </div>
        <li v-if="page !== pageMetadata.totalPages" class="page-item">
          <router-link
            class="page-link"
            :to="{ path: '/characters', query: { page: page + 1 } }"
            >Next</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import { charactersService } from '@/services';
import { mapServiceGetters } from '@/core/store';

export default {
  props: {
    page: VueTypes.number.def(1)
  },
  watch: {
    page: {
      immediate: true,
      handler: function(page) {
        charactersService.list({ page });
      }
    }
  },
  computed: {
    ...mapServiceGetters([charactersService]),
    characters: function() {
      return this.charactersResponse.data.content;
    },
    pageMetadata: function() {
      return this.charactersResponse.data.pageMetadata;
    },
    loading: function() {
      console.log(this.charactersResponse.config.fetching);
      return this.charactersResponse.config.fetching;
    }
  }
};
</script>

<style />
