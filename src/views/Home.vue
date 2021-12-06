<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header />
    <ShopBody />

    <transition name="fade">
      <SideCart v-if="openCart" />
    </transition>
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
    computed: {
      openCart() {
        return this.$store.state.toggleSideBar;
      },
    },
  };
</script>
<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
