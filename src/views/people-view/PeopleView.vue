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
        <tr v-for="person in people" :key="`person-${person.id}`">
          <td>{{ person.id }}</td>
          <td>{{ person.name }}</td>
        </tr>
      </tbody>
    </table>
    <nav v-if="!loading && pages" aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">Previous</a>
        </li>
        <li class="page-item" v-for="page in pages" :key="`page-${page}`">
          <a class="page-link" href="#" @click="list(page)">{{ page }}</a>
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
      pages: 0,
      currentPage: 1
    };
  },
  methods: {
    list(page) {
      peopleService.list({ page }).then(response => {
        const { count } = response.data;
        this.pages = Math.round(count / 10);
      });
    }
  },
  mounted() {
    console.log("mounted");
    this.list(this.currentPage);
  },
  computed: {
    people() {
      return this.$store.getters.getApiRequest("people").data.results;
    },
    loading() {
      return this.$store.getters.getApiRequest("people").loading;
    }
  }
};
</script>

<style />
