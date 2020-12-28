<template>
  <div class="container">
    <div class="detail" v-show="detailObj.productname">
      <img :src="detailObj.productimg" alt="" class="detail-img" />
      <p class="detail-name">{{ detailObj.productname }}</p>
      <p class="detail-price">
        ¥：<span class="detail-price-number">{{ detailObj.productprice }}</span>
      </p>
    </div>
    <van-goods-action>
      <!-- <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" /> -->
      <van-goods-action-icon icon="cart-o" @click="shopingCar" text="购物车" />
      <van-goods-action-icon
        icon="star"
        @click="shopingRemember"
        text="已收藏"
        color="#ff5000"
      />
      <van-goods-action-button
        type="warning"
        @click="addshopingCar"
        text="加入购物车"
      />
      <van-goods-action-button
        type="danger"
        @click="buyShoping"
        text="立即购买"
      />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: 'Userlogin',
  data() {
    return {
      // productImg:'',
      // productName:'',
      // productPrice:'',
      detailObj: null,
    }
  },
  created() {
    // const { productimg, productname, productprice } = this.$route.query
    this.detailObj = this.$route.query
  },
  components: {},
  methods: {
    shopingCar() {},
    shopingRemember() {},
    addshopingCar() {},
    buyShoping() {},
  },
}
</script>
<style scoped lang="scss">
.container {
  padding-top: 0.46rem;
}
.detail {
  &-img {
    width: 100%;
  }
  &-name {
    padding: 0.2rem 0.15rem;
    font-size: 0.18rem;
  }
  &-price {
    line-height: 0.18rem;
    padding: 0.05rem 0.15rem;
    &-number {
      font-size: 0.18rem;
      color: rgba(208, 61, 61, 0.919);
    }
  }
}
</style>
