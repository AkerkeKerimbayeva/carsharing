<template>
  <div class="about">
    <div class="container">
      <div class="about-title px32 fw500">{{ $t("about") }}</div>
      <div class="about-wrap">
        <div class="about-left">
          <!-- <p class="title">Lorem ipsum</p> -->
          <p>{{ $t("aboutText") }}</p>
        </div>
        <div class="about-right">
          <img src="@/assets/images/about-main.jpeg" alt="" />
        </div>
      </div>
      <!-- <div class="about-bottom">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quis
        officia. Blanditiis alias, sed illum ipsum obcaecati accusantium eveniet
        eum dignissimos harum iure, a nam sequi magnam laborum inventore
        suscipit! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Nostrum, quis officia. Blanditiis alias, sed illum ipsum obcaecati
        accusantium eveniet eum dignissimos harum iure, a nam sequi magnam
        laborum inventore suscipit! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Nostrum, quis officia. Blanditiis alias, sed illum
        ipsum obcaecati accusantium eveniet eum dignissimos harum iure, a nam
        sequi magnam laborum inventore suscipit! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Nostrum, quis officia. Blanditiis alias,
        sed illum ipsum obcaecati accusantium eveniet eum dignissimos harum
        iure, a nam sequi magnam laborum inventore suscipit!
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  background-color: #373737;
  padding: 120px 0 100px 0;
  min-height: 90vh;
  &-title {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
  }
  &-left {
    width: 60%;
    .title {
      margin-bottom: 20px;
    }
  }
  &-right {
    width: 35%;
    img {
      width: 100%;
    }
  }
  &-wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &-bottom {
    margin-top: 40px;
  }
}
@media (max-width: 940px) {
  .about {
    &-wrap {
      flex-direction: column;
    }
    &-left {
      width: 100%;
    }
    &-right {
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
