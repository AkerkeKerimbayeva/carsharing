<template>
  <div class="main-wrap">
    <div class="container">
      <div class="main">
        <p class="main-title red px64 fw600">CARSHARING</p>
        <p class="main-desc white px32 fw400">
          {{ $t("mainText") }}
        </p>
        <div class="main-btn">
          <button class="button" @click="isOpen = true">
            {{ $t("callBack") }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="main-service">
    <div class="container">
      <div class="main-cards">
        <div class="main-cards__item">
          <p class="px18 fw400">{{ $t("plusTitle1") }}</p>
          <p class="card red px24 fw500">
            {{ $t("plusDesc1") }}
          </p>
        </div>
        <div class="main-cards__item">
          <p class="px18 fw400">{{ $t("plusTitle2") }}</p>
          <p class="card red px24 fw500">
            {{ $t("plusDesc2") }}
          </p>
        </div>
        <div class="main-cards__item">
          <p class="px18 fw400">{{ $t("plusTitle3") }}</p>
          <p class="card red px24 fw500">
            {{ $t("plusDesc3") }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="main-slider">
    <div class="container">
      <p class="main-slider__title px32 fw500">{{ $t("plus") }}</p>
      <div class="main-slider__card">
        <swiper
          :slidesPerView="3"
          :spaceBetween="30"
          :navigation="navigation"
          :modules="modules"
          :breakpoints="breakpoints"
          class="mySwiper"
        >
          <swiper-slide>
            <div class="card">
              <img src="@/assets/images/slide1.png" alt="" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <img src="@/assets/images/slide2.png" alt="" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <img src="@/assets/images/slide3.png" alt="" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <img src="@/assets/images/slide1.png" alt="" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <img src="@/assets/images/slide2.png" alt="" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </swiper-slide>
        </swiper>
        <div class="nav">
          <div class="swiper-button-prev">
            <img src="@/assets/images/arrow-left.png" alt="" />
          </div>
          <div class="swiper-button-next">
            <img src="@/assets/images/arrow-right.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Services />
  <Modal :open="isOpen" @close="isOpen = !isOpen">
    <div class="modal">
      <p class="modal-title px24 fw500">{{ $t("callBack") }}</p>
      <div class="modal-inputs">
        <input type="text" placeholder="Имя" class="input" />
        <input type="text" placeholder="Телефон" class="input" />
        <input type="text" placeholder="Email" class="input" />
      </div>
      <div class="modal-btn">
        <button class="button">{{ $t("send") }}</button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Services from "@/components/main/Services.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Modal from "@/components/Modal/Modal.vue";
import { ref } from "vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    Services,
    Modal,
  },
  data() {
    return {
      breakpoints: {
        970: {
          spaceBetween: 10,
          slidesPerView: 3,
        },
        0: {
          spaceBetween: 10,
          slidesPerView: 2,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };
  },
  setup() {
    const isOpen = ref(false);
    return {
      modules: [Navigation],
      isOpen,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  &-wrap {
    background-image: url("@/assets/images/main.png");
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
  }
  padding-top: 150px;
  &-desc {
    padding-top: 40px;
    width: 80%;
    margin: 0 auto;
  }
  p {
    text-align: center;
  }
  &-cards {
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    &__item {
      width: 30%;
      p {
        text-align: center;
      }
      .card {
        padding-top: 20px;
      }
    }
  }
  &-btn {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  &-service {
    background: #373737;
  }
  &-slider {
    background: #373737;
    padding: 120px 0;
    &__title {
      text-align: center;
      margin-bottom: 30px;
    }
    &__card {
      position: relative;
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
          padding-top: 20px;
        }
        img {
          width: 100%;
          max-width: 420px;
        }
      }
    }
  }
}
.swiper-button {
  &-prev,
  &-next {
    &::after {
      opacity: 0;
    }
  }
  &-prev {
    left: 20px;
  }
  &-next {
    right: 0;
  }
}
.nav {
  position: absolute;
  top: 50%;
  width: 100%;
}
.modal {
  background-color: #373737;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-title {
    margin: 20px 0;
  }
  &-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    .input {
      width: 100%;
      margin-bottom: 15px;
    }
  }
}
@media (max-width: 940px) {
  .main {
    &-cards {
      flex-direction: column;
      align-items: center;
      &__item {
        width: 100%;
        margin: 20px 0;
        .card {
          padding-top: 10px;
        }
      }
    }
    &-slider {
      padding: 40px 0;
    }
  }
}
</style>
