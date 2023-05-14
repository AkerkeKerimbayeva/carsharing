<template>
  <div class="acc">
    <div class="container">
      <p class="px32 fw500">{{ $t("cab") }}</p>
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
          <tab-block :isSelected="selectedNewsTab === 'Мои заказы'">
            <div class="order">
              <p class="order-title px24 fw500 red">{{ $t("myOrders") }}</p>
              <div class="order-wrap">
                <div
                  class="order-data"
                  v-for="(item, index) in ord"
                  :key="index"
                >
                  <p>Заказ №{{ item.id }}</p>
                  <p>
                    Статус заказа: <span class="fw700">{{ item.status }}</span>
                  </p>
                  <p>
                    Статус оплаты: <span class="fw700">{{ item.payment }}</span>
                  </p>
                  <p>
                    Тариф: <span class="fw700">{{ item.type_tariff }}</span>
                  </p>
                  <p>
                    Сумма: <span class="fw700">{{ item.total }}</span>
                  </p>
                  <p>
                    Создано:
                    <span class="fw700">{{ format_date(item.createdAt) }}</span>
                  </p>
                </div>
              </div>
            </div>
          </tab-block>
          <tab-block :isSelected="selectedNewsTab === 'Мои данные'">
            <div class="cab">
              <div class="cab-title px16 fw500">{{ $t("myData") }}</div>
              <div class="cab-inputs">
                <div class="cab-inputs__btm">
                  <div class="card">
                    <p>E-mail</p>
                    <input
                      :disabled="disabled"
                      class="input"
                      v-model="info.email"
                      placeholder="E-mail"
                      type="text"
                    />
                  </div>
                  <div class="card">
                    <p>{{ $t("phonePl") }}</p>
                    <input
                      :disabled="disabled"
                      v-mask="'+7 ### ### ## ##'"
                      class="input"
                      v-model="info.phone"
                      placeholder="+7"
                      type="text"
                    />
                  </div>
                  <div class="card">
                    <p>{{ $t("namePl") }}</p>
                    <input
                      :disabled="disabled"
                      class="input"
                      v-model="info.name"
                      :placeholder="$t('namePl')"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </tab-block>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import accTab from "@/components/tab/AccTab.vue";
import TabBlock from "@/components/tab/tabBlock.vue";
import { ref } from "vue";
import moment from "moment";
import axios from "axios";
import Modal from "@/components/Modal/Modal.vue";
export default {
  components: {
    accTab,
    TabBlock,
    Modal,
  },
  data() {
    return {
      info: [],
      name: "",
      sname: "",
      lname: "",
      email: "",
      phone_number: null,
      phone: null,
      ord: [],
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
    this.getOrder();
    this.getInfo();
  },
  methods: {
    selectNewsTab(tab) {
      this.selectedNewsTab = tab;
    },
    format_date(value) {
      moment.locale("ru");
      return moment(String(value)).format("L");
    },
    toBasket() {
      this.$router.push("/basket");
    },
    getOrder() {
      axios
        .get("client/orders", {
          headers: {
            Authorization: localStorage.getItem("access_token")
              ? `Bearer ${localStorage.getItem("access_token")}`
              : null,
          },
        })
        .then((res) => {
          this.ord = res.data;
        });
    },
    getInfo() {
      axios
        .get("client/info", {
          headers: {
            Authorization: localStorage.getItem("access_token")
              ? `Bearer ${localStorage.getItem("access_token")}`
              : null,
          },
        })
        .then((res) => {
          this.info = res.data.user;
        });
    },
    onSubmit() {
      axios
        .get(
          "client/auth/me",
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
