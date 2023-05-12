<template>
  <div class="head-wrap">
    <div class="container">
      <div class="head">
        <div class="head-left">
          <img
            class="d-none"
            src="@/assets/images/burger.svg"
            @click="isActive = true"
            alt=""
          />
          <ul class="m-none">
            <li>
              <router-link
                to="/tariffs"
                class="fw500 px18 white"
                style="cursor: pointer"
                >{{ $t("tariffs") }}</router-link
              >
            </li>
            <li>
              <router-link
                to="/condition"
                class="fw500 px18 white"
                style="cursor: pointer"
                >{{ $t("cond") }}</router-link
              >
            </li>
            <li>
              <router-link
                to="/about"
                class="fw500 px18 white"
                style="cursor: pointer"
                >{{ $t("about") }}</router-link
              >
            </li>
            <!-- <li>
              <router-link
                to="/"
                class="fw500 px18 white"
                style="cursor: pointer"
                >FAQ</router-link
              >
            </li> -->
            <li>
              <router-link
                to="/contacts"
                class="fw500 px18 white"
                style="cursor: pointer"
                >{{ $t("contacts") }}</router-link
              >
            </li>
          </ul>
        </div>
        <div class="head-right">
          <div class="head-right__logo">
            <router-link to="/"
              ><img src="@/assets/images/car-logo.png" alt=""
            /></router-link>
          </div>
          <img
            v-if="!isAuth"
            @click="isOpen = true"
            class="head-login"
            src="@/assets/images/login.png"
            alt=""
          />
          <img
            v-if="isAuth"
            @click="toAcc"
            class="head-login"
            src="@/assets/images/login.png"
            alt=""
          />
          <img
          v-if="isAuth"
          @click="logOut"
          style="width: 25px; margin-left: 10px;"
          src="@/assets/images/logout.png"
          alt=""
        />
          <select
            class="px14"
            style="font-weight: 600; color: black; margin-left: 10px"
            name=""
            id=""
            v-model="lang"
            @change="handleChange($event)"
          >
            <option value="ru" selected>RU</option>
            <option value="kz">KZ</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </div>
    <div class="head-mobile d-none" v-if="isActive">
      <img src="@/assets/images/close.png" @click="isActive = false" alt="" />
      <ul class="">
        <li>
          <router-link
            @click="isActive = false"
            to="/tariffs"
            class="fw500 px18 white"
            style="cursor: pointer"
            >{{ $t("tariffs") }}</router-link
          >
        </li>
        <li>
          <router-link
            @click="isActive = false"
            to="/condition"
            class="fw500 px18 white"
            style="cursor: pointer"
            >{{ $t("cond") }}</router-link
          >
        </li>
        <li>
          <router-link
            @click="isActive = false"
            to="/about"
            class="fw500 px18 white"
            style="cursor: pointer"
            > {{ $t("about") }}</router-link
          >
        </li>
        <li>
          <router-link
            @click="isActive = false"
            to="/contacts"
            class="fw500 px18 white"
            style="cursor: pointer"
            >{{ $t("contacts") }}</router-link
          >
        </li>
      </ul>
    </div>
    <ModalVue :open="isOpen" @close="isOpen = !isOpen">
      <div class="modal">
        <div class="modal-wrap">
          <p class="px24 fw500 modal-title">Авторизация</p>
          <div class="modal-inputs">
            <input v-model="email" placeholder="Email" type="text" class="input" />
            <input v-model="password" placeholder="Пароль" type="text" class="input" />
          </div>
          <div class="check">
            <input checked type="checkbox" name="" id="" />
            <label for=""
              >Нажимая вы соглашаетесь с политикой конфиденциальности и
              обработкой персональных данных</label
            >
          </div>
          <div class="modal-btn">
            <button @click="onSubmit" class="button">Войти</button>
          </div>
          <p class="modal-text">
            Ещё нет аккаунта?
            <span @click="(isOpen1 = true), (isOpen = false)"
              >Зарегистрироваться</span
            >
          </p>
        </div>
      </div>
    </ModalVue>
    <ModalVue :open="isOpen1" @close="isOpen1 = !isOpen1">
      <div class="modal">
        <div class="modal-wrap">
          <p class="px24 fw500 modal-title">Регистрация</p>
          <div class="modal-inputs">
            <input v-model="name" placeholder="Имя" type="text" class="input" />
            <input v-model="email" placeholder="Email" type="text" class="input" />
            <input v-model="phone" placeholder="Номер телефона" type="text" class="input" />
            <input v-model="password" placeholder="Пароль" type="text" class="input" />
            <input v-model="password" placeholder="Повторить пароль" type="text" class="input" />
          </div>
          <div class="check">
            <input checked type="checkbox" name="" id="" />
            <label for=""
              >Нажимая вы соглашаетесь с политикой конфиденциальности и
              обработкой персональных данных</label
            >
          </div>
          <div class="modal-btn">
            <button @click="getRegister" class="button">Зарегистрироваться</button>
          </div>
          <p class="modal-text">
            Уже есть аккаунт?
            <span @click="(isOpen = true), (isOpen1 = false)">Войти</span>
          </p>
        </div>
      </div>
    </ModalVue>
  </div>
</template>

<script>
import ModalVue from "@/components/Modal/Modal.vue";
import { ref } from "vue";
import axios from 'axios'
import { mapActions, mapGetters } from "vuex";
export default {
  components: { ModalVue },
  data() {
    const lang = localStorage.getItem("lang") || "ru";
    return {
      lang: lang,
      isActive: false,
    };
  },
  setup() {
    const isOpen = ref(false);
    const isOpen1 = ref(false);
    return {
      modules: [Navigation],
      isOpen,
      isOpen1,
    };
  },
  created() {
    this.checkAuth();
  },
  methods: {
    ...mapActions(["checkAuth", "logout"]),
    toAcc() {
      this.$router.push("/account");
      this.isOpen = false;
    },
    handleChange(event) {
      localStorage.setItem("lang", event.target.value);
      window.location.reload();
    },
    logOut() {
      this.$store.dispatch("logout");
      this.$store.dispatch("checkAuth");
      this.$router.push("/");
    },
    onSubmit() {
      axios
        .post("client/auth/login", {
          email: this.email,
          password: this.password,
          headers: {
          Authorization: localStorage.getItem("access_token")
              ? `Bearer ${localStorage.getItem("access_token")}`
              : null,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            alert("Вы удачно зашли в свой аккаунт!");
            console.log(this.isAuth);
            this.isOpen = false;
            this.password = "";
            this.email = "";
            this.$router.push("/account");
            localStorage.setItem("access_token", res.data.accessToken);
            this.checkAuth();
          }
        })
        .catch((error) => {
          alert("Неправильный логин или пароль!")
          console.error("There was an error!", error);
        });
    },
    getRegister() {
      axios
        .post("client/auth/register", {
          phone: this.phone,
          name: this.name,
          email: this.email,
          password: this.password,
          headers: {
            Authorization: localStorage.getItem("access_token")
              ? `Bearer ${localStorage.getItem("access_token")}`
              : null,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            alert("Вы удачно зарегистрировались!");
            // console.log(this.isAuth);
            this.isOpen1 = false;
            this.password = "";
            this.phone = "";
            this.$router.push("/account");
            localStorage.setItem("access_token", res.data.accessToken);
            this.checkAuth();
          }
        })
        .catch((error) => {
          alert("Пользователь уже зарегистрирован!");
          console.error("There was an error!", error);
        });
    }
  },
  computed: {
    ...mapGetters({
      isAuth: "getIsAuth",
      isUnAuth: "getUnAuth",
      getUser: "getUser",
    })
  }
};
</script>

<style lang="scss" scoped>
.modal {
  background-color: #373737;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-title {
    text-align: center;
    margin-bottom: 30px;
  }
  &-inputs {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    .input {
      margin-bottom: 20px;
    }
  }
  span {
    cursor: pointer;
    border-bottom: 1px solid #fff;
    line-height: 15px;
  }
  .check {
    display: flex;
    input {
      margin-right: 10px;
      width: 20px;
      height: 20px;
    }
  }
  button {
    width: 200px;
    margin: 0 auto;
  }
  &-btn {
    display: flex;
    justify-content: center;
    margin: 25px 0;
  }
  &-text {
    text-align: center;
  }
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  &-wrap {
    // position: fixed;
    margin-bottom: -85px;
    width: 100%;
    background: transparent;
  }
  &-login {
    width: 25px !important;
    margin-left: 10px;
    cursor: pointer;
  }
  &-left {
    ul {
      display: flex;
      li {
        margin-right: 15px;
      }
    }
  }
  &-right {
    display: flex;
    align-items: center;
    &__logo {
      background-color: #fff;
      padding: 5px;
    }
    img {
      width: 150px;
    }
  }
}
@media (max-width: 940px) {
  .head {
    &-mobile {
      position: absolute;
      background-color: #373737;
      top: 0;
      width: 100%;
      height: 100%;
      ul {
        padding: 20px 0 0 40px;
        li {
          margin-bottom: 10px;
          a {
            font-size: 20px;
          }
        }
      }
      img {
        position: absolute;
        right: 40px;
        top: 20px;
        background-color: #fff;
      }
    }
  }
}
</style>
