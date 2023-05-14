<template>
  <div class="condition">
    <div class="container">
      <p>{{ $t("cond1") }}</p>
      {{ $t("cond11") }}<br />
      {{ $t("cond12") }}
      <br />
      {{ $t("cond13") }}<br />
      {{ $t("cond14") }} <br />
      {{ $t("cond15") }}<br />
      {{ $t("cond16") }}
      <p>{{ $t("cond2") }}</p>
      {{ $t("cond21") }}<br />
      {{ $t("cond22") }}
      <p>{{ $t("cond3") }}</p>
      {{ $t("cond31") }} <br />
      {{ $t("cond32") }} <br />
      {{ $t("cond33") }} <br />
      {{ $t("cond34") }}
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.condition {
  padding: 100px 0 50px 0;
  background-color: #373737;
  font-size: 18px;
  line-height: 30px;
  p {
    margin: 20px 0 10px 0;
    font-size: 24px;
    font-weight: 600;
    color: #db3138;
  }
}
</style>
