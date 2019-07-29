<template>
  <div>
    <div v-if="loading">loading... {{ loading }}</div>
    <ul v-if="!loading">
      <li v-for="person in people" :key="`person-${person.id}`">
        {{ person.name }}
      </li>
    </ul>
    <nav v-if="!loading && pages" aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">Previous</a>
        </li>
        <li class="page-item" v-for="page in pages" :key="`page-${page}`">
          <a class="page-link" href="#">{{ page }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { peopleService } from "@/services";

export default {
  data: function() {
    return {
      people: [],
      pages: 0,
      loading: true
    };
  },
  mounted() {
    peopleService.list().then(response => {
      this.loading = false;
      const { count, results } = response.data;
      this.pages = Math.round(count / results.length);
      this.people = response.data.results;
    });
  }
};
</script>

<style />
