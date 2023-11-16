<template>
  <div class="home-container">
    <Menu />
    <div
      :class="{
        'main-app': true,
        'main-app-collapsed': $store.state.collapsed,
      }"
    >
      <slider-nav></slider-nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import SliderNav from "@/components/SliderNav.vue";
export default {
  components: { Menu, SliderNav },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import url("~@/assets/css/home.less");
</style>
