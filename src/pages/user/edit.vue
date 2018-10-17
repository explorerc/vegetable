<template>
  <div class="v-user-edit">
    <a :href="MOBILE_HOST+'userinfo'" class="v-return-userinfo clearfix">
      <i class="iconfont icon-Loading fl"></i>修改{{title}}
    </a>
    <div class="v-edit">
      <div class="v-content">
        <input type="text" v-model="val">
      </div>
      <p class="v-error" v-if="error">
        <i class="iconfont icon-Loading fl"></i>{{error}}
      </p>
      <button class="primary-button" @click="save">
        保存
      </button>
    </div>
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
      MOBILE_HOST: process.env.MOBILE_HOST,
      title: '', // 修改类型名称
      error: '', // 错误提示信息
      val: '', // 用户填写的信息
      type: ''
    }
  },
  created () {
    if (this.getLoginInfo()) {
      this.storeLoginInfo(this.getLoginInfo())
    } else {
      location.replace(`${this.MOBILE_HOST}user`)
    }
    this.type = this.$route.params.type
    switch (this.$route.params.type) {
      case 'name': this.title = '昵称'
        this.val = this.loginInfo.nickName
        break
      case 'email': this.title = '邮箱'
        this.val = this.loginInfo.email
        break
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
    save () {
      if (!this.verification(this.val, true, this.type)) {
        this.error = `请输入正确的${this.title}`
        return false
      }
      switch (this.$route.params.type) {
        case 'name': this.title = '昵称'
          this.val = this.loginInfo.nickName
          break
        case 'email': this.title = '邮箱'
          this.val = this.loginInfo.email
          break
      }
    },
    verification (val, isRequired, type) {
      let emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
      if (type === 'name') {
        if (val.gbLength() >= 0 && val.gbLength() <= 14) {
          return true
        } else {
          return false
        }
      }
      if (type === 'email') {
        return emailReg.test(val)
      }
      return true
    }
  }
}
</script>
<style lang="scss" scoped>
.v-user-edit {
  width: 100%;
  height: 100%;
  .v-return-userinfo {
    background-color: #f5f5f5;
    display: block;
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 32px;
    color: #222;
    padding: 0 30px;
  }
  .v-edit {
    width: 100%;
    .v-content {
      width: 100%;
      height: 100px;
      border-bottom: 1px solid #e2e2e2;
      input {
        width: 100%;
        height: 100%;
        border: none;
        background-color: rgba(0, 0, 0, 0);
        padding: 0 35px;
        font-size: 30px;
        color: #222;
      }
    }
    .v-error {
      padding: 0 40px;
      font-size: 20px;
      color: #888;
      height: 56px;
      line-height: 56px;
      .iconfont {
        margin-right: 10px;
      }
    }
    .primary-button {
      width: 570px;
      height: 90px;
      line-height: 90px;
      border-radius: 45px;
      margin: 60px auto 0;
      display: block;
    }
  }
}
</style>

