<template>
  <div class="home">
    <div class="container">
      <h1>Random Cocktails served: {{ this.number }}</h1>
      <h2 v-if="this.number > 7">Do you really need more cocktails?</h2>
      <Card @random="logServed"></Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  methods: {
    logServed() {
      this.number = this.number + 1;
    }
  },
  name: "Home",
  components: {
    Card
  },
  data() {
    return {
      number: 0
    };
  }
};
</script>
