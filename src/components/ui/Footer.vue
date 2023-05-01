<template>
  <div class="foot-wrap">
    <div class="container">
      <div class="foot">
        <div class="foot-left">
          <p class="px14">2023 Carsharing Все права защищены.</p>
        </div>
        <div class="foot-right">
          <ul>
            <li>
              <router-link
                to="/tariffs"
                class="fw500 px18 white"
                style="cursor: pointer"
                >Тарифтер</router-link
              >
            </li>
            <li>
              <router-link
                to="path"
                class="fw500 px18 white"
                style="cursor: pointer"
                >Талаптар</router-link
              >
            </li>
            <li>
              <router-link
                to="/about"
                class="fw500 px18 white"
                style="cursor: pointer"
                >Компания туралы</router-link
              >
            </li>
            <li>
              <router-link
                to="path"
                class="fw500 px18 white"
                style="cursor: pointer"
                >FAQ</router-link
              >
            </li>
            <li>
              <router-link
                to="/contacts"
                class="fw500 px18 white"
                style="cursor: pointer"
                >Байланыстар</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.foot {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #fff;
  padding: 30px 0;
  &-wrap {
    background-color: #141414;
  }
  &-right {
    ul {
      display: flex;
      li {
        margin-left: 15px;
      }
    }
  }
}
</style>
