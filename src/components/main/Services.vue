<template>
  <div class="service">
    <div class="container">
      <p class="service-title px32 fw500">Наши услуги</p>
      <div class="service-cards">
        <div class="service-cards__item">
          <img src="@/assets/images/icon1.png" alt="" />
          <p>Оклейка салона</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            ultrices pellentesque vulputate sit. Ut feugiat.
          </p>
          <button class="button">Подробнее</button>
        </div>
        <div class="service-cards__item">
          <img src="@/assets/images/icon2.png" alt="" />
          <p>Оклейка салона</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            ultrices pellentesque vulputate sit. Ut feugiat.
          </p>
          <button class="button">Подробнее</button>
        </div>
        <div class="service-cards__item">
          <img src="@/assets/images/icon3.png" alt="" />
          <p>Оклейка салона</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            ultrices pellentesque vulputate sit. Ut feugiat.
          </p>
          <button class="button">Подробнее</button>
        </div>
        <div class="service-cards__item">
          <img src="@/assets/images/icon4.png" alt="" />
          <p>Оклейка салона</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            ultrices pellentesque vulputate sit. Ut feugiat.
          </p>
          <button class="button">Подробнее</button>
        </div>
      </div>
    </div>
    <div class="service-modal">
      <p class="service-modal__title px32 fw500">ответим на любой вопрос</p>
      <div class="service-modal__inputs">
        <input type="text" placeholder="Имя" class="input" />
        <input type="text" placeholder="Телефон" class="input" />
        <textarea
          name=""
          placeholder="Комментарии (необязательно)"
          class="input"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="service-modal__btn">
        <button class="button">Отправить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.service {
  background-color: #141414;
  padding-bottom: 120px;
  &-title {
    margin-bottom: 25px;
    text-align: center;
    text-transform: uppercase;
  }
  &-cards {
    display: flex;
    justify-content: space-between;
    width: 100%;
    &__item {
      width: 24%;
      border: 1px solid #898989;
      padding: 20px 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: 0.4s;
      &:hover {
        transition: 0.4s;
        transform: scale(1.1);
      }
      img {
        width: 70px;
        height: 100px;
        object-fit: contain;
        margin-top: 30px;
      }
      p {
        margin-top: 25px;
      }
      button {
        margin: 20px 0;
      }
    }
  }
  &-modal {
    display: flex;
    flex-direction: column;
    &__title {
      text-transform: uppercase;
      text-align: center;
      padding: 80px 0 30px 0;
    }
    &__btn {
      display: flex;
      justify-content: center;
    }
    .input {
      width: 100%;
      max-width: 510px;
      margin-bottom: 20px;
    }
    &__inputs {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      width: 26%;
    }
  }
}
</style>
