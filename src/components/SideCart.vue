<template>
  <div>
    <div class="cart">
      <div></div>
      <div class="cart-section">
        <div class="top-cart">
          <div>
            <p @click="closeSide"><</p>
          </div>
          <h5>Your Cart</h5>
        </div>

        <div class="currency">
          <select v-model="currentCurrency" id="cars" name="carlist" form="carform">
            <option :value="current" v-for="(current, index) in currency" :key="index">{{ current }} </option>
          </select>
        </div>

        <div class="cart-items">
          <CartItem v-for="cart in cartData" :key="cart.id" :cartProduct="cart" />
        </div>
        <div class="total">
          <div>
            <hr />
            <div class="calculation">
              <h4>Total:</h4>
              <h5>${{ totalCart }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartItem from "./CartItem";
import gql from "graphql-tag";

export default {
  components: {
    CartItem,
  },
  apollo: {
    currency: gql`
      query {
        currency
      }
    `,
  },
  data() {
    return {
      currentCurrency: "",
    };
  },
  watch: {
    currentCurrency(val) {
      this.$store.commit("SET_CURRENCY", val);
      // console.log(val);
    },
  },

  mounted() {
    document.body.style.overflow = "hidden";
  },
  beforeDestroy() {
    document.body.style.overflow = "initial";
  },
  computed: {
    cartData() {
      return this.$store.state.cart;
      console.log(this.$store.state.cart);
    },
    totalCart() {
      return this.$store.getters.totalCart;
    },
  },
  methods: {
    closeSide() {
      this.$store.dispatch("openSideBar", false);
    },
  },
};
</script>
<style lang="scss" scoped>
.cart {
  position: fixed;
  top: 0;
  height: 100%;
  background-color: rgba(205, 209, 206, 0.8);
  width: 100%;
  display: flex;

  & .cart-section {
    width: 30%;
    margin-left: auto;
    background-color: #f2f2ef;
    padding: 2rem 1rem;
    position: relative;
    // overflow: auto;

    h5 {
      text-align: center;
    }

    & .currency > select {
      background-color: white;
      padding: 0.8rem;
      margin-bottom: 1rem;
    }
  }
}

.cart-items {
  //   overflow-y: auto;
  height: calc(100% - 11rem);
  overflow: auto;

  //   margin-top: 1rem;
}

.total {
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0rem;
  width: 90%;
  background-color: white;
  padding: 1rem;
  height: 3rem;
  -webkit-box-shadow: 0px -8px 11px 0px rgba(220, 220, 220, 1);
  -moz-box-shadow: 0px -8px 11px 0px rgba(220, 220, 220, 1);
  box-shadow: 0px -8px 11px 0px rgba(220, 220, 220, 1);
  > div {
    width: 100%;
  }

  & .calculation {
    display: flex;
    justify-content: space-between;
  }
  hr {
    margin: 0.5rem;
  }
}

@media (max-width: 768px) {
  .cart .cart-section {
    width: 100%;
    // overflow-y: auto;
    // min-height: 100vh;
  }

  //   .total {
  //     position: initial;
  //   }
}

.top-cart {
  display: flex;
  margin: 1rem;

  > div {
    border-radius: 50%;
    border: 1px solid black;
    width: 1rem;
    height: 1rem;
    text-align: center;
    cursor: pointer;
  }

  h5 {
    width: 100%;
  }
}
</style>
