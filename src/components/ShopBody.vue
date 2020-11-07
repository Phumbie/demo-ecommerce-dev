<template>
  <div class="body">
    <div class="container">
      <SingleProduct v-for="i in 8" :key="i" />
    </div>
  </div>
</template>
<script>
import SingleProduct from "./SingleProduct";
export default {
  components: {
    SingleProduct,
  },
};
</script>
<style lang="scss" scoped>
.body {
  background-color: #e2e6e3;
  padding: 5rem 0rem;

  & .container {
    width: 85%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, auto);
  }
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: repeat(2, auto) !important;
    width: 90%;
  }
}
</style>
