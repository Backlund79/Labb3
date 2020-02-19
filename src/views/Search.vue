<template>
  <div class="search">
    <h1>Search for cocktails</h1>
    <div class="container">
      <Search ph="Name of cocktail"></Search>
    </div>
  </div>
</template>

<script>
import Search from "@/components/SearchForm.vue";
export default {
  name: "SearchForm",
  components: {
    Search
  }
};
</script>
