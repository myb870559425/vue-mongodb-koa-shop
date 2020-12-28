<template>
  <div class="container">
    <van-tabs
      v-if="userInfo.userName === '未登录'"
      v-model="active"
      color="#1989fa"
    >
      <van-tab title="登录">
        <van-cell-group>
          <van-field
            required
            clearable
            v-model="loginUsername"
            label="用户名"
            placeholder="请输入用户名"
          />
          <van-field
            required
            clearable
            v-model="loginpPassworld"
            label="密码"
            placeholder="请输入密码"
          />
        </van-cell-group>
        <van-button size="large" @click="loginHander" type="primary"
          >登录</van-button
        >
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field
            required
            clearable
            v-model="registerUsername"
            label="用户名"
            placeholder="请输入用户名"
          />
          <van-field
            required
            clearable
            v-model="registPassworld"
            label="密码"
            placeholder="请输入密码"
          />
        </van-cell-group>
        <van-button size="large" @click="registerHander" type="primary"
          >注册</van-button
        >
      </van-tab>
    </van-tabs>
    <div v-else>
      <div class="myself">
        <p class="myself-name">{{ userInfo.userName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import url from '@/assets/js/serve.config.js'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Userlogin',
  data() {
    return {
      active: 0,
      loginUsername: '',
      loginpPassworld: '',
      registerUsername: '',
      registPassworld: '',
    }
  },
  components: {},
  computed: {
    ...mapState(['userInfo']),
  },
  created() {},
  methods: {
    ...mapActions(['loginAction']),
    registerHander() {
      this.$axios({
        url: url.registUser,
        method: 'post',
        data: {
          userName: this.registerUsername,
          passWord: this.registPassworld,
        },
      })
        .then((res) => {
          // console.log(res)
          console.log(JSON.stringify(res))
          if (res.data.code === 200) {
            this.$toast.success('注册成功')
            this.registerUsername = ''
            this.registPassworld = ''
          }
        })
        .catch(() => {
          this.$toast.success('注册失败')
        })
    },
    loginHander() {
      this.$axios({
        url: url.loginUser,
        method: 'post',
        data: {
          userName: this.loginUsername,
          passWord: this.loginpPassworld,
        },
      })
        .then((res) => {
          // console.log(res)
          console.log(JSON.stringify(res))
          if (res.data.code === 200) {
            this.$toast.success('登录成功')
            this.$router.push('/Fountproduct')
            this.loginAction(res.data.userInfo)
            // this.loginUsername = ''
            // this.loginpPassworld = ''
          }
        })
        .catch(() => {
          this.$toast.fail('登录失败')
        })
    },
  },
}
</script>
<style scoped lang="scss">
.container {
  padding-top: 0.46rem;
}
.myself {
  &-name {
    background-color: #e6e6e6;
    padding: 1rem 0 0.2rem;
    text-align: center;
  }
}
</style>
