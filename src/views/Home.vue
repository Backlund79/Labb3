<template>
  <div class="home">
    <Hero></Hero>
    <div class="container">
      <Card></Card>
    </div>
  </div>
</template>

<script>
// let drinksObj = [];
// fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
//   .then(response => response.json())
//   .then(result => {
//     drinksObj = result;
//     console.log(drinksObj);
//   })
//   .catch(err => console.log(err));

import Hero from "@/components/Hero.vue";
import Card from "@/components/Card.vue";
export default {
  name: "Home",
  components: {
    Hero,
    Card
  }
};
</script>
