<template>
  <div class="list">
    <h1>Coctails listed A-Z</h1>
    <div class="container">
      <All></All>
    </div>
  </div>
</template>

<script>
import All from "@/components/All.vue";
export default {
  name: "List",
  components: {
    All
  }
};
</script>
