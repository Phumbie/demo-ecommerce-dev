<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header />
    <ShopBody />
    <SideCart />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import ShopBody from "@/components/ShopBody.vue";
import SideCart from "@/components/SideCart.vue";

export default {
  name: "Home",
  components: {
    Header,
    ShopBody,
    SideCart,
  },
};
</script>
