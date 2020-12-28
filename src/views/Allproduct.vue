<template>
  <div class="container">
    <van-row>
      <van-col span="6" class="type">
        <ul class="type-wraper">
          <li
            class="type-wraper-content"
            v-for="(item, index) in typeList"
            :key="index"
            @click="selectType(index)"
            :class="{ 'type-wraper-active': selectItem === index + 1 }"
          >
            {{ item.typeName }}
          </li>
        </ul>
      </van-col>

      <van-col span="18" class="product">
        <van-pull-refresh
          v-model="isLoading"
          success-text="刷新成功"
          @refresh="onRefresh"
        >
          <van-list
            class="product-wraper"
            finished-text="没有更多了"
            :finished="finished"
            :offset="30"
            @load="onLoad"
            v-model="loading"
            :immediate-check="false"
          >
            <div
              class="product-wraper-item"
              v-for="(item, index) in productList"
              :key="index"
            >
              <img
                :src="item.productImg"
                alt=""
                class="product-wraper-item-img"
              />
              <p class="product-wraper-item-name">{{ item.productName }}</p>
              <p class="product-wraper-item-price">{{ item.productPrice }}</p>
            </div>
          </van-list>
        </van-pull-refresh>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import url from '@/assets/js/serve.config.js'
export default {
  name: 'Allproduct',
  data() {
    return {
      typeList: [],
      productList: [],
      selectItem: 1,
      startSearch: 0,
      endSearch: 10,
      finished: false,
      loading: false,
      isLoading: false,
      count: 0,
    }
  },
  components: {},
  created() {
    this.productType()
  },
  methods: {
    selectType(_index) {
      this.finished = false
      this.productList = []
      this.selectItem = _index + 1
      this.productListsearch()
    },
    productListsearch() {
      this.isLoading = true
      this.$axios({
        url: url.productList,
        method: 'get',
        params: {
          startSearch: this.productList.length,
          endSearch: this.endSearch,
          typeId: this.selectItem,
        },
      })
        .then((res) => {
          console.log(333333)
          console.log(this.productList.length)
          setTimeout(() => {
            if (!res.data.length !== 0) {
              this.productList = this.productList.concat(res.data)
              this.loading = false
            } else {
              this.finished = true
            }
          }, 1000)
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    productType() {
      this.$axios({
        url: url.productType,
        method: 'get',
      })
        .then((res) => {
          this.typeList = res.data
          this.selectType(0)
          console.log(this.typeList)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onLoad() {
      console.log(22222)
      this.productListsearch()
    },
    onRefresh() {
      setTimeout(() => {
        this.finished = false

        this.productList = []
        this.productListsearch()
      }, 2000)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  width: 100%;
  top: 0;

  padding-top: 0.46rem;
  bottom: 0;
}
.type {
  text-align: center;
  background: #eaeaea;
  &-wraper-content {
    padding: 0.15rem 0;
  }
  &-wraper-active {
    background: #fff;
  }
}
.product {
  position: fixed;
  top: 0.46rem;
  margin-left: 25%;
  bottom: 0.5rem;
  overflow-y: scroll;
  &-wraper {
    height: 100%;

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    &-item {
      width: 45%;
      &-img {
        width: 100%;
        height: 0.8rem;
      }
      &-name {
        margin-top: 0.1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &-price {
        margin: 0.05rem 0;
      }
    }
  }
}
</style>
