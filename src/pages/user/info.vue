<template>
  <div class="v-user-info">
    <a :href="MOBILE_HOST+'user'" class="v-return-user clearfix">
      <i class="iconfont icon-Loading fl"></i>个人中心
    </a>
    <div class="v-list">

    </div>
    <com-login @login="loginSuccess"></com-login>
  </div>
</template>
<script>
import loginMixin from 'components/login-mixin'
import { mapMutations, mapState } from 'vuex'
import * as types from '../../store/mutation-types.js'
export default {
  mixins: [loginMixin],
  data () {
    return {
      MOBILE_HOST: process.env.MOBILE_HOST
    }
  },
  mounted () {
    if (this.getLoginInfo()) {
      this.storeLoginInfo(this.getLoginInfo())
    } else {
      location.replace(`${this.MOBILE_HOST}user`)
    }
  },
  computed: {
    ...mapState('login', {
      userInfo: state => state.userInfo,
      loginInfo: state => state.loginInfo
    })
  },
  props: {
  },
  watch: {
  },
  methods: {
    ...mapMutations('login', {
      storeUserInfo: types.USER_INFO,
      storeLoginInfo: types.LOGIN_INFO
    }),
    loginSuccess (res) {
      this.storeLoginInfo(res)
      this.$router.go(0)
    }
  }
}
</script>
<style lang="scss" scoped>
.v-user-info {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .v-return-user {
    display: block;
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 32px;
    color: #222;
    padding: 0 30px;
  }
  .v-list {
    width: 100%;
    background-color: #fff;
  }
}
</style>

