<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="drink name here">
            <b-card-text>Drink descriptions here</b-card-text>
          </b-card-body>
          <div>
            <b-button @click="modalShow = !modalShow">How to</b-button>

            <b-modal v-model="modalShow"
              >här skall all info om hur och vad som behövs i</b-modal
            >
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  .then(response => response.json())
  .then(result => {
    // this.drinks = result;
    console.log(result);
  })
  .catch(err => console.log(err));

export default {
  data() {
    return {
      // drinks: null,
      modalShow: false
    };
  },
  name: "Card"
};
</script>

<style></style>
