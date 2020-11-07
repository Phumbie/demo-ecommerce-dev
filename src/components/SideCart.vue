<template>
  <div>
    <div class="cart">
      <div></div>
      <div class="cart-section">
        <h5>Your Cart</h5>

        <div class="currency">
          <select id="cars" name="carlist" form="carform">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div class="cart-items">
          <CartItem v-for="i in 3" :key="i" />
        </div>
        <div class="total">
          <div>
            <hr />
            <div class="calculation">
              <h4>Total:</h4>
              <h5>0</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartItem from "./CartItem";
export default {
  components: {
    CartItem,
  },
  mounted() {
    document.body.style.overflow = "hidden";
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
  height: 100%;
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
</style>
