<template>
  <div>
    <van-nav-bar class="header" :title="title" left-text="" left-arrow>
      <template #right>
        <!-- <van-icon name="search" size="18" /> -->
        <van-icon
          v-if="$route.path !== '/'"
          @click="$router.push('/')"
          slot="right"
          size="14"
          >{{ userInfo.userName }}</van-icon
        >
        <van-icon v-else @click="exitLogin()" slot="right" size="14">{{
          userInfo.userName === '未登录' ? '' : '退出'
        }}</van-icon>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Headercommon',
  data() {
    return {
      title: '',
    }
  },
  components: {},
  computed: {
    ...mapState(['userInfo']),
  },
  beforeRouteEnter: (to, from, next) => {
    next((vm) => {
      if (to.path !== '/') {
        vm.title = to.meta.title
        return
      }
      vm.title = vm.userInfo.userName === '未登录' ? to.meta.title : '我的'
    })
  },
  created() {},
  methods: {
    ...mapActions(['loginAction']),
    exitLogin() {
      this.loginAction({
        userName: '未登录',
      })
      this.$router.replace('/')
    },
  },
}
</script>
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
</style>
