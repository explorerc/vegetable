<template>
  <div class="v-user">
    <div class="header">
      <img :src="defaultImg" alt="" v-if="defaultImg">
      <img src="../../assets/image/avatar@2x.png"
           alt="" v-else>
      <p v-if="isLogin">
        {{loginInfo.nickName}}
      </p>
      <p v-else @click="doLogin()">
        未登录
      </p>
    </div>
    <div class="v-list" v-if="isLogin">
      <div class="v-item">
        <a :href="MOBILE_HOST+'userInfo'"
           class="v-block">
          <i class="iconfont icon-Loading v-left-icon"></i>
          <div class="v-item-right">
            <span class="v-title">
              个人信息
            </span>
            <i class="iconfont icon-Loading fr"></i>
          </div>
        </a>
      </div>
      <div class="v-item">
        <a :href="MOBILE_HOST+'activityList'"
           class="v-block">
          <i class="iconfont icon-Loading v-left-icon"></i>
          <div class="v-item-right">
            <span class="v-title">
              我的活动
            </span>
            <i class="iconfont icon-Loading fr"></i>
            <span class="fr">
              有<span class="v-red">{{user.activityQuantity}}</span>场活动即将开始
            </span>
          </div>
        </a>
      </div>
      <div class="v-item">
        <a href=""
           class="v-block">
          <i class="iconfont icon-Loading v-left-icon"></i>
          <div class="v-item-right">
            <span class="v-title">
              我的订单
            </span>
            <i class="iconfont icon-Loading fr"></i>
          </div>
        </a>
      </div>
      <div class="v-item">
        <a href=""
           class="v-block">
          <i class="iconfont icon-Loading v-left-icon"></i>
          <div class="v-item-right">
            <span class="v-title">
              我的奖品
            </span>
            <i class="iconfont icon-Loading fr"></i>
            <span class="fr">
              有<span class="v-red">{{user.prizeQuantity}}</span>个奖品
            </span>
          </div>
        </a>
      </div>
    </div>
    <com-login @login="loginSuccess"></com-login>
  </div>
</template>
<script>
import loginMixin from 'components/login-mixin'
import { mapMutations, mapState } from 'vuex'
import * as types from '../../store/mutation-types.js'
// import userService from 'src/api/user-service'
export default {
  mixins: [loginMixin],
  data () {
    return {
      MOBILE_HOST: process.env.MOBILE_HOST,
      user: {
        name: '', // 姓名
        avatar: '', // 头像
        balance: '0', // 余额
        activityQuantity: 0, // 活动数量
        orderQuantity: 0, // 订单数量
        prizeQuantity: 0 // 奖品数量
      },
      isLogin: false // 当前用户是否登录
    }
  },
  mounted () {
    if (this.getLoginInfo()) {
      this.storeLoginInfo(this.getLoginInfo())
      this.isLogin = true
      if (!this.userInfo) {
        // let data = {
        // }
        // this.$config({ handlers: true }).$post(userService.GET_666, data).then((res) => {
        //   this.name = res.data.name
        //   this.avatar = res.data.avatar
        //   this.balance = res.data.balance
        //   this.activityQuantity = res.data.activityQuantity
        //   this.orderQuantity = res.data.orderQuantity
        //   this.prizeQuantity = res.data.prizeQuantity
        //   this.storeUserInfo(res.data)
        // }).catch((err) => {
        //   this.$messageBox({
        //     header: '提示',
        //     content: err.msg,
        //     confirmText: '确定',
        //     handleClick: (e) => {
        //       if (e.action === 'cancel') {
        //       } else if (e.action === 'confirm') {
        //       }
        //     }
        //   })
        // })
      }
    }
  },
  computed: {
    ...mapState('login', {
      userInfo: state => state.userInfo,
      loginInfo: state => state.loginInfo
    }),
    defaultImg () {
      return this.user.avatar ? this.$imgHost + '/' + this.user.avatar : ''
    }
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
.v-user /deep/ {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  font-size: 30px;
  color: #222;
  .iconfont {
    &.v-left-icon {
      margin-right: 30px;
    }
    &.fr {
      margin: 0 40px 0 26px;
    }
  }
  .v-red {
    color: #fc5659;
  }
  .v-block {
    display: block;
    width: 100%;
    height: 100%;
    padding: 0 0 0 40px;
  }
  .header {
    width: 100%;
    height: 275px;
    padding: 45px 0;
    background-color: yellow;
    img {
      display: block;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin: 0 auto 20px;
    }
    p {
      text-align: center;
      font-size: 32px;
    }
  }
  .v-balance {
    width: 100%;
    height: 140px;
    line-height: 140px;
    margin-top: 20px;
    background-color: #fff;
    .v-content {
      font-size: 42px;
      margin-left: 20px;
    }
  }
  .v-list {
    width: 100%;
    background-color: #fff;
    margin-top: 20px;
    .v-item {
      width: 100%;
      height: 100px;
      line-height: 100px;
      .v-block {
        display: flex;
      }
      .v-item-right {
        display: inline-block;
        flex: 1;
        border-bottom: 1px solid #e2e2e2;
      }
      &:last-child {
        .v-item-right {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
