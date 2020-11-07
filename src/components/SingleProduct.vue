<template>
  <div>
    <div class="product">
      <img
        style="max-height: 170px; max-width: 100%"
        src="https://cdn.shopify.com/s/files/1/2960/5204/products/age-management_1024x1024_ad6e7a36-7242-469c-9fb5-242f5ee9c83f_1024x1024.png?v=1602809968"
        alt=""
      />
      <p class="product-description">Modern Bathroom Set</p>
      <p>From: $52.00</p>
      <button class="product-button">
        Add to Cart
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.product {
  text-align: center;
  padding: 3rem 2rem;

  & .product-description {
    font-size: 1.2rem;
  }

  p {
    margin-top: 1.5rem;
  }

  & .product-button {
    background-color: #4b5548;
    color: white;
    border-radius: 5px;
    padding: 1rem 0;
    width: 10rem;
    margin-top: 1.5rem;
    border: none;
  }
}

@media (max-width: 768px) {
  .product {
    padding: 1rem 0.5rem;

    & .product-description {
      font-size: 0.8rem;
    }

    p {
      margin-top: 1rem;
    }

    & .product-button {
      width: 100%;
      padding: 0.7rem 0;
    }
  }
}
</style>
