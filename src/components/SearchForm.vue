<template>
  <div class="container">
    <b-input-group>
      <b-form-input
        v-model="text"
        @keydown.enter="searchForDrinks"
        :placeholder="place"
      ></b-form-input>
      <b-input-group-append>
        <b-button
          size="sm"
          text="Button"
          @click="searchForDrinks"
          variant="success"
          >Search</b-button
        >
      </b-input-group-append>
    </b-input-group>

    <div v-if="drinks" class="mt-2">
      Searching for:
      <b-spinner
        v-if="!drinks"
        style="width: 3rem; height: 3rem;"
        label="Large Spinner"
      ></b-spinner>
    </div>
    <div v-if="drinks" class="container justify-content-center">
      <h1>{{ this.$store.state.text }}</h1>
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
  methods: {
    addressSearch() {
      if (this.$route.params.drinkName) {
        fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
            this.$route.params.drinkName
        )
          .then(response => response.json())
          .then(result => {
            this.drinks = result;

            console.log(this.drinks);
          })
          .catch(err => console.log(err));
      }
    },
    searchForDrinks() {
      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
          this.$store.state.text
      )
        .then(response => response.json())
        .then(result => {
          this.drinks = result;

          console.log(this.drinks);
        })
        .catch(err => console.log(err));
    }
  },

  name: "SearchForm",
  computed: {
    text: {
      get() {
        return this.$store.state.text;
      },
      set(value) {
        this.$store.commit("updateText", value);
      }
    }
  },
  created() {
    this.addressSearch();
  },
  data() {
    return {
      place: this.ph,
      drinks: null,
      modalShow: false
    };
  },
  props: {
    ph: {
      type: String
    }
  }
};
</script>

<style></style>
