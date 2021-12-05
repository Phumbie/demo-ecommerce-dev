<template>
  <div class="body">
    <div class="container">
      <SingleProduct
        v-for="product in products"
        :key="product.id"
        :productData="product"
      />
    </div>
    <!-- <ApolloQuery
      :query="
        (gql) => gql`
          query products($currency: Currency) {
            products {
              id
              title
              image_url
              price(currency: $currency)
            }
          }
        `
      "
      :variables="{ currency }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>

        <div v-if="error" class="error apollo">An error occurred</div>

        <div v-if="data" class="result apollo container">
        </div>

        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery> -->
  </div>
</template>
<script>
  import SingleProduct from "./SingleProduct";
  import gql from "graphql-tag";
  export default {
    components: {
      SingleProduct,
    },
    data() {
      return {
        // currency: "USD",
        products: [],
      };
    },
    // apollo: {
    //   products: {
    //     query: gql`
    //       query products($currency: Currency) {
    //         id
    //         title
    //         image_url
    //         price(currency: $currency)
    //       }
    //     `,
    //     variables: {
    //       currency: "USD",
    //     },
    //   },
    // },
    mounted() {
      this.getProducts()
        .then((response) => {
          this.$store.commit("TOGGLE_LOADER", false);
          this.products = response.data.products;
        })
        .catch((e) => {
          this.$store.commit("TOGGLE_LOADER", false);
          alert("error loading, please try again");
          console.log(e);
        });
    },
    watch: {
      currency(val) {
        this.getProducts()
          .then((response) => {
            this.$store.commit("TOGGLE_LOADER", false);
            this.products = response.data.products;
            this.$store.dispatch("updateCartCurrency", this.products);
          })
          .catch((e) => {
            this.$store.commit("TOGGLE_LOADER", false);
            alert("error loading, please try again");
            console.log(e);
          });
      },
    },

    computed: {
      currency() {
        return this.$store.state.currency;
      },
    },

    methods: {
      getProducts() {
        this.$store.commit("TOGGLE_LOADER", true);
        const GET_PRODUCTS = gql`
          query getProducts {
            products {
              id
              title
              image_url
              price(currency: NGN)
            }
          }
        `;
        return this.$apollo.query({
          query: GET_PRODUCTS,
        });
      },
    },
  };
</script>
<style lang="scss" scoped>
  .body {
    background-color: #e2e6e3;
    padding: 5rem 0rem;
    min-height: 100%;

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
