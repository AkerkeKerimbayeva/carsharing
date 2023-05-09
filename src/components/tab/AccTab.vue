<template>
  <div class="tab-items m-none">
    <ul class="tab-list">
      <li
        v-for="tab in tabItems"
        :key="tab"
        class="tab-item"
        :class="{ activeItem: tab === selected }"
      >
        <div
          :class="{ active: tab === selected }"
          class="tab-link tab-title"
          @click="setTab(tab)"
        >
          {{ tab }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tabItems: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  methods: {
    setTab(tab) {
      this.$emit("setTab", tab);
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  color: #fff;
}
.activeItem {
  background: #959595 !important;
}
.tab {
  &-list {
    display: flex;
    flex-direction: column;
  }
  &-item {
    background: #efefef;
    color: #000;
    font-size: 18px;
    padding-left: 25px;
    font-weight: 500;
    line-height: 40px;
    &:not(:last-child) {
      padding-right: 20px;
    }
  }
  &-link {
    cursor: pointer;
  }
}
</style>
