<template>
  <div>
    <div class="body">
      <h5 class="cancel">X</h5>
      <div>
        <div class="body-content">
          <h5>Classic Maintenence Set</h5>
        </div>
        <div class="body-image">
          <img
            style="max-height: 5rem; max-width: 100%"
            src="https://cdn.shopify.com/s/files/1/2960/5204/products/age-management_1024x1024_ad6e7a36-7242-469c-9fb5-242f5ee9c83f_1024x1024.png?v=1602809968 "
            alt=""
          />
        </div>
      </div>
      <div class="bottom">
        <div class="count">
          <button>+</button>
          <p>0</p>
          <button>-</button>
        </div>

        <div class="price">
          US$ 177.00
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.body {
  background-color: white;
  padding: 1rem;
  margin-top: 2rem;

  > div {
    display: flex;
  }

  & .body-image {
    margin-left: auto;
  }

  & .cancel {
    display: flex;
    justify-content: flex-end;
    margin: 0.5rem;
    cursor: pointer;
  }
}

.count {
  display: flex;
  border: 1px solid black;
  width: 5rem;
  padding: 0.5rem;
  text-align: center;

  button {
    width: 2rem;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
  }
}

.bottom {
  display: flex;
  align-items: center;

  & .price {
    text-align: center;
    width: 100%;
  }
}
</style>
