<template>
  <div>
    <span v-for="item in az" :key="item">{{ item }}{{ space }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
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

<style></style>
