<template>
  <div class="container">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 热门商品 -->
    <div class="hot">
      <p class="hot-title">热门商品</p>
      <swiper class="hot-swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          class="hot-swiper-slide"
          v-for="(item, index) in hotProductlist"
          :key="index"
        >
          <img class="hot-swiper-slide-img" :src="item.productImg" alt="" />
          <p class="hot-swiper-slide-name">{{ item.productName }}</p>
          <p class="hot-swiper-slide-price">¥:{{ item.productPrice }}</p>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 推荐商品 -->
    <div class="recommend">
      <p class="recommend-title">推荐商品</p>
      <div class="recommend-product">
        <div
          class="recommend-product-item"
          v-for="(item, index) in recommendProductlist"
          :key="index"
        >
          <img
            class="recommend-product-item-img"
            :src="item.productImg"
            alt=""
          />
          <p class="recommend-product-item-title">{{ item.productName }}</p>
          <p
            class="recommend-product-item-price"
            v-show="item.productPrice !== ''"
          >
            ¥:{{ item.productPrice }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import url from '@/assets/js/serve.config.js'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Userlogin',
  data() {
    return {
      hotProductlist: [],
      recommendProductlist: [],
      swiperOptions: {
        pagination: {},
        slidesPerView: 3,
        loop: true,
        // Some Swiper option/callback...
      },
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  created() {
    this.hotProduct()
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  methods: {
    hotProduct() {
      // alert(url.hotProduct)
      this.$axios({
        url: url.hotProduct,
        method: 'post',
        data: {},
      })
        .then((res) => {
          this.hotProductlist = res.data.hotProductlist.slice(0, 20)
          this.recommendProductlist = res.data.hotProductlist
          console.log(JSON.stringify(this.recommendProductlist))
          console.log(this.recommendProductlist.length)
          if (this.recommendProductlist.length % 2 !== 0) {
            this.recommendProductlist.push({ productPrice: '' })
          }
        })
        .catch(() => {
          this.$toast.success('查询失败')
        })
    },
  },
}
</script>
<style scoped lang="scss">
.container {
  padding-top: 0.46rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.hot {
  padding: 0 0.15rem;
  &-title {
    padding: 0.1rem 0;
  }
  &-swiper {
    &-slide {
      display: flex;
      flex-direction: column;
      text-align: center;
      &-img {
        border: 1px solid #333;
        margin-right: 0.1rem;
      }
      &-name {
        margin-top: 0.1rem;
        font-size: 0.12rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &-price {
        margin-top: 0.05rem;
      }
    }
  }
}
.recommend {
  padding: 0 0.15rem 1rem;
  &-title {
    padding: 0.1rem 0;
  }
  &-product {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    &-item {
      flex-basis: 45%;

      &-img {
        width: 100%;
      }
      &-title {
        font-size: 0.12rem;
        margin-top: 0.1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &-price {
        padding: 0.1rem 0;
      }
    }
  }
}
</style>
