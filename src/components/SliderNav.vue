<template>
  <div class="main-header">
    <a-button type="primary" @click="$store.dispatch('changeCollapsed')">
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">统计</a></a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="user-info">
      <div class="user-name">
        欢迎<span class="uname" ref="uname">{{
          $store.state.user.username
        }}</span>
      </div>
      <div class="out" ref="out" @click="logout">
        退出
        <div class="out-pointer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    if (this.$refs.uname.innerText === "") {
      this.$refs.out.style.display = "none";
    }
  },

  methods: {
    logout() {
      this.$router.push({ name: "Login" });
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="less" scoped>
</style>