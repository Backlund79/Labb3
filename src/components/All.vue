<template>
  <div class="container">
    <div>
      <span @click="listByFirstLetter(item)" v-for="(item) in az" :key="item">{{ item }}{{ space }}</span>
    </div>
    <ul v-if="sortByFirstLetter">
      <li
        @click="fetchDrink(cocktail)"
        v-for="(cocktail) in sortByFirstLetter.drinks"
        :key="cocktail.id"
      >{{ cocktail.strDrink }}</li>
    </ul>
    <b-modal v-if="drinks" v-model="modalShow">
      <h3>{{ drinks.drinks[0].strDrink }}</h3>
      <strong>Alcoholic:</strong>
      {{ drinks.drinks[0].strAlcoholic }}
      <br />
      <strong>Category:</strong>
      {{ drinks.drinks[0].strCategory }}
      <br />
      <strong>Glass:</strong>
      {{ drinks.drinks[0].strGlass }}
      <hr />
      <h4>Ingridents:</h4>
      <ul>
        <li v-if="drinks.drinks[0].strIngredient1">
          {{ drinks.drinks[0].strIngredient1 }} -
          {{ drinks.drinks[0].strMeasure1 }}
        </li>
        <li v-if="drinks.drinks[0].strIngredient2">
          {{ drinks.drinks[0].strIngredient2 }} -
          {{ drinks.drinks[0].strMeasure2 }}
        </li>
        <li v-if="drinks.drinks[0].strIngredient3">
          {{ drinks.drinks[0].strIngredient3 }} -
          {{ drinks.drinks[0].strMeasure3 }}
        </li>
        <li v-if="drinks.drinks[0].strIngredient4">
          {{ drinks.drinks[0].strIngredient4 }} -
          {{ drinks.drinks[0].strMeasure4 }}
        </li>
        <li v-if="drinks.drinks[0].strIngredient5">
          {{ drinks.drinks[0].strIngredient5 }} -
          {{ drinks.drinks[0].strMeasure5 }}
        </li>
        <li v-if="drinks.drinks[0].strIngredient6">
          {{ drinks.drinks[0].strIngredient6 }} -
          {{ drinks.drinks[0].strMeasure6 }}
        </li>
        <li v-if="drinks.drinks[0].strIngredient7">
          {{ drinks.drinks[0].strIngredient7 }} -
          {{ drinks.drinks[0].strMeasure7 }}
        </li>
        <li v-if="drinks.drinks[0].strIngredient8">
          {{ drinks.drinks[0].strIngredient8 }} -
          {{ drinks.drinks[0].strMeasure8 }}
        </li>
        <li v-if="drinks.drinks[0].strIngredient9">
          {{ drinks.drinks[0].strIngredient9 }} -
          {{ drinks.drinks[0].strMeasure9 }}
        </li>
        <li v-if="drinks.drinks[0].strIngredient10">
          {{ drinks.drinks[0].strIngredient10 }} -
          {{ drinks.drinks[0].strMeasure10 }}
        </li>
      </ul>
      <h4>Instructions:</h4>
      {{ drinks.drinks[0].strInstructions }}
      <hr />
      <img :src="drinks.drinks[0].strDrinkThumb" />
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    listByFirstLetter(item) {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + item)
        .then(response => response.json())
        .then(result => {
          this.sortByFirstLetter = result;

          console.log(this.sortByFirstLetter);
        })
        .catch(err => console.log(err));
    },
    fetchDrink(cocktail) {
      console.log(cocktail);
      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
          cocktail.strDrink
      )
        .then(response => response.json())
        .then(result => {
          this.drinks = result;
          this.modalShow = true;
          console.log(this.drinks);
        })
        .catch(err => console.log(err));
    }
  },
  data() {
    return {
      modalShow: false,
      drinks: null,
      sortByFirstLetter: null,
      space: " ",
      az: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  },
  name: "All"
};
</script>

<style scoped>
img {
  height: 100%;
  width: 200px;
}
span,
ul {
  cursor: pointer;
}
ul {
  list-style-type: none;
}
li {
  text-align: left;
}
</style>
