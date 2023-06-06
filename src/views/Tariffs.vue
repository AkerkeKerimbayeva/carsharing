<template>
  <div class="tariff-wrap">
    <div class="container">
      <div class="tariff">
        <div class="tariff-cards">
          <div class="tariff-cards__item" v-for="(item, index) in cars" :key="index">
            <p class="px24 fw500 black" v-html="item.name"></p>
            <p class="par" v-html="item.description"></p>
            <img class="car" :src="'https://admin-carsharing.devup.kz' + item.image" alt="" />
            <div class="box">
              <div class="box-card" v-for="(cr, index) in item.carAs" :key="index">
                <img class="hour" src="@/assets/images/hour1.svg" alt="" />
                <p class="title px18 fw500">{{ cr.type }}</p>
                <p class="title px18 fw500 red">{{formatPrice( cr.price) }}</p>
                <div class="box-card__items">
                  <div class="box-card__item">
                    <button @click="(isOpen = true),(selectedItem = cr)" class="button">{{ $t("try") }}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal :open="isOpen" @close="isOpen = !isOpen">
      <div class="modal" v-if="selectedItem">
        <div class="modal-wrap">
          <p class="modal-title">{{ $t("arenda") }}</p>
          <!-- <input type="text" placeholder="Введите адрес" class="input"> -->
          <label for="">{{ $t("type") }}</label>
          <select v-model="payment" name="" class="input" id="">
            <option value="Наличными">{{ $t("pay1") }}</option>
            <option value="Банковской картой">{{ $t("pay2") }}</option>
            <option value="Каспи QR">{{ $t("pay3") }}</option>
          </select>
          <div class="text">
            <p>Тариф: {{ type_tariff = selectedItem.type }}</p>
            <p>{{ $t("total") }}: {{ formatPrice(total = selectedItem.price) }}</p>
          </div>
          <button @click="sendOrder" class="button">{{ $t("send") }}</button>
        </div>
      </div>
    </Modal>
    <Modal :open="isOpen" @close="isOpen = !isOpen">
      <div class="modal" v-if="selectedItem">
        <div class="modal-wrap">
          <p class="modal-title">{{ $t("arenda") }}</p>
          <!-- <input type="text" placeholder="Введите адрес" class="input"> -->
          <label for="">{{ $t("type") }}</label>
          <select v-model="payment" name="" class="input" id="">
            <option value="Наличными">{{ $t("pay1") }}</option>
            <option value="С карточкой">{{ $t("pay2") }}</option>
            <option value="Kaspi QR">{{ $t("pay3") }}</option>
          </select>
          <div class="text">
            <p>Тариф: {{ type_tariff = selectedItem.type }}</p>
            <p>{{ $t("total") }}: {{ formatPrice(total = selectedItem.price) }}</p>
          </div>
          <button @click="sendOrder" class="button">{{ $t("send") }}</button>
        </div>
      </div>
    </Modal>
    <Modal :open="isOpen1" @close="isOpen1 = !isOpen1">
      <div class="modal">
        <form class="modal-wrap" @submit.prevent="sendPay">
          <p class="modal-title">{{ $t("payOrder") }}</p>
          <!-- <input type="text" placeholder="Введите адрес" class="input"> -->
          <label for="">{{ $t("req") }}:</label>
          <input required placeholder="Введите номер карты" type="text" class="input">
          <input required placeholder="Введите CVV" type="text" class="input">
          <input required placeholder="Срок карты" type="text" class="input">
          <input required placeholder="Имя владельца" type="text" class="input">
          <button @submit.prevent="sendPay" class="button">{{ $t("send") }}</button>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from 'axios'
import {ref} from "vue"
import Modal from '@/components/Modal/Modal.vue';
export default {
  components: {Modal},
  data() {
    return {
      cars: [],
      type_tariff: [],
      total: []
    }
  },
  created() {
    this.getTarif()
  },
  setup() {
    const isOpen = ref(false);
    const isOpen1 = ref(false);
    return {
      isOpen,
      isOpen1
    }
  },
  methods: {
    sendOrder() {
      // console.log(this.selectedItem.id);
      this.form = {
        type_tariff: this.selectedItem.id,
        total: this.total,
        payment: this.payment,
      }
      axios.post('client/orders', this.form, {
        headers: {
          Authorization: localStorage.getItem("access_token")
            ? `Bearer ${localStorage.getItem("access_token")}`
            : null,
        },
      })
      .then( response => {
        if( response.status === 200) {
          alert("Успешно отправлен!")
          this.isOpen = false;
          console.log(this.payment);
          if(this.payment == "С карточкой") {
            this.isOpen1 = true;
          }
        }
      })
      
    },
    sendPay() {
      alert("Ваш заказ оплачен!")
      this.isOpen1 = false
    },
    getTarif() {
      axios.get('cars')
      .then(response => {
        this.cars = response.data
      })
    },
    formatPrice: price => `${(+price).toLocaleString()} ₸`,
  }
};
</script>

<style lang="scss" scoped>
.modal {
  background-color: #373737;
  padding: 30px;
  select {
    width: 96%;
    margin: 30px 0 10px 0;
    option {
      color: #373737;
    }
  }
  &-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
  &-title {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  button {
    width: 200px;
  }
  input {
    width: 90%;
    margin-bottom: 20px;
  }
  label {
    margin-bottom: -20px;
  }
  .text {
    width: 95%;
    margin: 20px 0;
    p {
      padding-bottom: 5px;
    }
  }
}
.tariff {
  padding: 120px 0 50px 0;
  &-wrap {
    background-color: #373737;
  }
  &-cards {
    &__item {
      margin: 50px 0 30px 0;
      .par {
        padding: 20px 0;
      }
      .car {
        width: 250px;
        margin-bottom: 30px;
      }
      .box {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        &-card {
          padding: 15px 10px;
          border: 1px solid red;
          width: 19%;
          margin-bottom: 30px;
          background-color: #fff;
          transition: 0.4s;
          margin-right: 2%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          &:hover {
            transform: scale(1.1);
            transition: 0.4s;
          }
          p {
            color: #373737;
          }
          .title {
            padding: 25px 0 15px 0;
          }
          .hour {
            width: 100px;
          }
          &__item {
            .wrap {
              display: flex;
              margin-bottom: 10px;
              img {
                margin-right: 5px;
              }
            }
            img {
              width: 22px;
              height: 22px;
              object-fit: contain;
            }
            &-par {
              p {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 940px) {
  .tariff {
    padding: 40px 0;
    .box {
      width: 100%;
      &-card {
        width: 48%;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
