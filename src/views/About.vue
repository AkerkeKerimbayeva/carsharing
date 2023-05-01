<template>
  <div class="about">
    <div class="container">
      <div class="about-title px32 fw500">Біз туралы</div>
      <div class="about-wrap">
        <div class="about-left">
          <p class="title">Lorem ipsum</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            eaque aliquam in non, voluptate accusantium. Libero quibusdam
            placeat eaque ratione, eius doloribus inventore modi excepturi quod.
            Delectus dolore deserunt repellat. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            eaque aliquam in non, voluptate accusantium. Libero quibusdam
            placeat eaque ratione, eius doloribus inventore modi excepturi quod.
            Delectus dolore deserunt repellat. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            eaque aliquam in non, voluptate accusantium. Libero quibusdam
            placeat eaque ratione, eius doloribus inventore modi excepturi quod.
            Delectus dolore deserunt repellat. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            eaque aliquam in non, voluptate accusantium. Libero quibusdam
            placeat eaque ratione, eius doloribus inventore modi excepturi quod.
            Delectus dolore deserunt repellat.
          </p>
        </div>
        <div class="about-right">
          <img src="@/assets/images/material1.png" alt="" />
        </div>
      </div>
      <div class="about-bottom">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  background-color: #141414;
  padding: 120px 0 100px 0;
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
</style>
