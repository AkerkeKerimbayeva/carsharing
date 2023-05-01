<template>
  <div class="head-wrap">
    <div class="container">
      <div class="head">
        <div class="head-left">
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
        <div class="head-right">
          <div class="head-right__logo">
            <router-link to="/"
              ><img src="@/assets/images/car-logo.png" alt=""
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
  &-left {
    ul {
      display: flex;
      li {
        margin-right: 15px;
      }
    }
  }
  &-right {
    &__logo {
      background-color: #fff;
      padding: 5px;
    }
    img {
      width: 150px;
    }
  }
}
</style>
