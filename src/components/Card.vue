<template>
  <div>
    <div class="container justify-content-center">
      <h1>Random Cocktail</h1>
      <b-card no-body class="overflow-hidden shadow">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="drinks.drinks[0].strDrinkThumb"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="drinks.drinks[0].strDrink">
              <b-card-text>
                <strong>Alcoholic:</strong>
                {{ drinks.drinks[0].strAlcoholic }}
                <br />
                <strong>Category:</strong>
                {{ drinks.drinks[0].strCategory }}
                <br />
                <strong>Glass:</strong>
                {{ drinks.drinks[0].strGlass }}
              </b-card-text>
            </b-card-body>
            <div>
              <b-button @click="modalShow = !modalShow">How to</b-button>

              <b-modal v-model="modalShow">
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
              </b-modal>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.fetchData();
  },
  data() {
    return {
      drinks: null,
      modalShow: false
    };
  },

  methods: {
    fetchData() {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(result => {
          this.drinks = result;

          console.log(this.drinks);
        })
        .catch(err => console.log(err));
    }
  },
  name: "Card"
};
</script>

<style></style>
