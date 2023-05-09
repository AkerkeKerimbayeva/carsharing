<template>
  <div class="acc">
    <div class="container">
      <p class="px32 fw500">ЛИЧНЫЙ КАБИНЕТ</p>
      <div class="acc-wrap">
        <div class="acc-left">
          <accTab
            :tabItems="tabItems"
            @setTab="selectNewsTab"
            :selected="selectedNewsTab"
          >
          </accTab>
        </div>
        <div class="acc-right">
          <tab-block :isSelected="selectedNewsTab === 'Мои заказы'"
            >фывфыв</tab-block
          >
          <tab-block :isSelected="selectedNewsTab === 'Мои данные'">
            <div class="cab">
              <div class="cab-title px16 fw500">Мои данные</div>
              <!-- {{ this.userData }} -->
              <div class="cab-inputs">
                <div class="cab-inputs__top">
                  <input
                    :disabled="disabled"
                    class="input"
                    v-model="userData.name"
                    placeholder="Имя"
                    type="text"
                  />
                  <input
                    :disabled="disabled"
                    class="input"
                    v-model="userData.sname"
                    placeholder="Фамилия"
                    type="text"
                  />
                  <input
                    :disabled="disabled"
                    class="input"
                    v-model="userData.lname"
                    placeholder="Отчество"
                    type="text"
                  />
                </div>
                <div class="cab-inputs__btm">
                  <div class="card">
                    <p>Ваш е-mail</p>
                    <input
                      :disabled="disabled"
                      class="input"
                      v-model="userData.email"
                      placeholder="E-mail"
                      type="text"
                    />
                  </div>
                  <div class="card">
                    <p>Ваш телефон</p>
                    <input
                      :disabled="disabled"
                      v-mask="'+7 ### ### ## ##'"
                      class="input"
                      v-model="userData.phone_number"
                      placeholder="+7"
                      type="text"
                    />
                  </div>
                  <div class="card">
                    <p>Дата рождения</p>
                    <input
                      :disabled="disabled"
                      class="input"
                      v-model="userData.bday"
                      placeholder=""
                      type="date"
                    />
                  </div>
                </div>
              </div>
              <div class="cab-btns">
                <div class="cab-btns__left">
                  <button class="button" @click="updateUser">Сохранить</button>
                  <button class="button" @click="disabled = false">
                    Изменить
                  </button>
                </div>
                <!-- <div class="cab-btns__right">
                  <p @click="isOpen = true">Изменить пароль</p>
                </div> -->
              </div>
            </div>
          </tab-block>
          <!-- <tab-block :isSelected="selectedNewsTab === 'Корзина'"></tab-block> -->
        </div>
      </div>
    </div>
    <Modal :open="isOpen" @close="isOpen = !isOpen">
      <div class="modal">
        <p class="modal-title px24 fw500">Изменение пароля</p>
        <div class="modal-inputs">
          <input
            v-model="old_password"
            placeholder="Текущий пароль"
            type="password"
            class="input"
          />
          <input
            v-model="new_password"
            placeholder="Пароль"
            type="password"
            class="input"
          />
          <input
            v-model="new_password"
            placeholder="Подтвердите пароль"
            type="password"
            class="input"
          />
        </div>
        <div class="modal-btn">
          <button class="button-active" @click="changePassword">
            Изменить пароль
          </button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import accTab from "@/components/tab/AccTab.vue";
import TabBlock from "@/components/tab/tabBlock.vue";
import { ref } from "vue";
// import { mapGetters } from "vuex";
import axios from "axios";
import Modal from "@/components/Modal/Modal.vue";
// import Cabinet from "@/components/account/Cabinet.vue";
export default {
  components: {
    accTab,
    TabBlock,
    Modal,
  },
  data() {
    return {
      name: "",
      sname: "",
      lname: "",
      email: "",
      phone_number: null,
      phone: null,
      bday: "",
      new_password: "",
      old_password: "",
      disabled: true,
      userData: [],
      selectedNewsTab: "Мои данные",
      tabItems: ["Мои заказы", "Мои данные"],
    };
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen,
    };
  },
  created() {
    this.onSubmit();
  },
  methods: {
    selectNewsTab(tab) {
      this.selectedNewsTab = tab;
    },
    toBasket() {
      this.$router.push("/basket");
    },
    updateUser() {
      this.user = {
        name: this.userData.name,
        sname: this.userData.sname,
        lname: this.userData.lname,
        phone: this.userData.phone_number,
        email: this.userData.email,
        bday: this.userData.bday,
      };
      axios
        .post("auth/user-update", this.user, {
          headers: {
            Authorization: localStorage.getItem("access_token")
              ? `Bearer ${localStorage.getItem("access_token")}`
              : null,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            alert("Ваши данные удачно изменены!");
            this.disabled = true;
            this.SET_INFO(res.data);
            this.userData = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changePassword() {
      this.form = {
        old_password: this.old_password,
        new_password: this.new_password,
      };
      axios
        .post("auth/password-update", this.form, {
          headers: {
            Authorization: localStorage.getItem("access_token")
              ? `Bearer ${localStorage.getItem("access_token")}`
              : null,
          },
        })
        .then((res) => {
          if (res.status === 202) {
            alert("Пароль успешно обновлен!");
            this.isOpen = false;
            // setTimeout( () => this.disabledBtn = true, 5000),
            this.new_password = "";
            this.old_password = "";
          }
        })
        .catch((err) => {
          alert("Неправильно введённый текущий пароль!");
          console.log(err);
        });
    },
    onSubmit() {
      axios
        .post(
          "auth/me",
          {},
          {
            headers: {
              Authorization: localStorage.getItem("access_token")
                ? `Bearer ${localStorage.getItem("access_token")}`
                : null,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            this.userData = res.data;
            // console.log(this.userData);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    // ...mapGetters(["getUser"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/account.scss";
</style>
