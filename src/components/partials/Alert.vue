<template>
  <transition name="fade">
    <div class="modal" @click="clickTarget" v-if="display">
      <div class="modal-card">
        <div class="modal-card__close">
          <img
            src="@/assets/icons/close.svg"
            alt="close icon"
            @click="closeModal"
          />
        </div>
        <div class="modal-card__content">
          <div class="icons">
            <img
              v-show="type == 'success'"
              src="@/assets/icons/success.png"
              alt="success icon"
            />
            <img
              v-show="type == 'error'"
              src="https://res.cloudinary.com/zillaafrica/image/upload/q_auto/v1629045373/Group_12919_be2tin.svg"
              alt="error icon"
            />
            <img
              v-show="type == 'info'"
              src="@/assets/icons/info.svg"
              alt="info icon"
            />
          </div>
          <!-- <h3>{{ title }}</h3> -->
          <p>
            {{ description }}
          </p>
          <!-- <Button text="close" @click="closeModal" class="modal-button" /> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  // import Button from "@/UI/Button";
  export default {
    name: "Modal",
    // components: {
    //   Button,
    // },
    data() {
      return {};
    },

    computed: {
      ...mapState({
        display: (state) => state.alert.display,
        description: (state) => state.alert.description,
        type: (state) => state.alert.type,
      }),
      //   ...mapState("notification", {
      //
      //     display: (state) => state.modal.display,
      //     title: (state) => state.modal.title,
      //     callback: null,
      //   }),
      //    description: "",
      // display: false,
      // type: "",
      // title: "",
      // callback: null,
      // buttonText: "",
    },
    methods: {
      ...mapActions(["showAlert"]),
      closeModal() {
        this.showAlert({
          description: "",
          display: false,
          type: "",
        });
      },
      clickTarget() {
        if (event.target.className === "modal") {
          this.closeModal();
        }
      },
    },
  };
</script>
<style scoped>
  .modal {
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    z-index: 1000;
  }

  .modal-card {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    max-width: 23rem;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 600px) {
    .modal-card {
      min-width: 80%;
    }
  }
  .icons {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    height: 6rem;
  }
  .modal-card__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    justify-content: flex-end;
  }
  .modal-card__close img {
    cursor: pointer;
    height: 14px;
  }
  .modal-card__content {
    /* display: flex; */
    text-align: center;
    margin: 1rem auto 1rem auto;
  }
  /* .modal-button {
    width: 100%;
    margin-top: 5rem;
  } */
  .icons img {
    width: 6rem;
    height: 6rem;
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #333333;
  }
  p {
    /* max-width: 15rem; */
    /* color: #666666; */
    /* font-family: Graphik; */
    font-size: 1.2rem;
    line-height: 1.6rem;
    margin: auto;
    font-weight: 600;
    margin-top: 2rem;
  }

  @media screen and (max-width: 600px) {
    p {
      font-size: 1rem;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s cubic-bezier(0.45, 0.25, 0.6, 0.95);
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    /* transform: translate(0%, -10px); */
    opacity: 0;
  }
</style>
