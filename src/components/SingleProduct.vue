<template>
  <div>
    <div class="product">
      <div class="image">
        <img
          style="height: 170px; max-width: 90%"
          :src="productData.image_url"
          alt=""
        />
      </div>
      <div>
        <p class="product-description">{{ productData.title }}</p>
      </div>

      <p>From: &#8358;{{ productData.price }}</p>
      <button class="product-button" @click="addToCart">
        Add to Cart
      </button>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["productData"],

    // mounted() {
    //   console.log(this.productData);
    // },
    data() {
      return {};
    },

    methods: {
      addToCart() {
        this.$store.dispatch("openSideBar", true);
        this.$store.dispatch("addToCart", this.productData);
      },
    },
  };
</script>
<style lang="scss" scoped>
  .product {
    text-align: center;
    padding: 3rem 2rem;

    & .image {
      height: 170px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }

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
      cursor: pointer;
    }
    > div {
      height: 3rem;
    }
  }

  @media (max-width: 768px) {
    .product {
      padding: 1rem 0.5rem;
      // height: 20rem;
      & .image {
        height: 170px;
        display: flex;
        align-items: flex-end;
        justify-content: center;

        img {
          object-fit: contain;
        }
      }

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

      > div {
        height: 3rem;
      }
    }
  }
</style>
