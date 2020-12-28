<template>
  <div>
    <van-tabbar class="footer" v-model="active" route>
      <van-tabbar-item icon="home-o" to="/Fountproduct">发现</van-tabbar-item>
      <van-tabbar-item icon="bar-chart-o" to="/Allproduct"
        >分类</van-tabbar-item
      >
      <van-tabbar-item icon="shopping-cart-o" to="/Shopingcar"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="contact" to="/">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Footercommon',
  data() {
    return {
      active: 3,
    }
  },
  components: {},
}
</script>
<style lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
