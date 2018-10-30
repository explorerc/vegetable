<template>
  <div class="v-user">
    <div class="header">
      <img :src="defaultImg" alt="" v-if="defaultImg">
      <img src="../../assets/image/avatar@2x.png"
           alt="" v-else>
      <p v-if="isLogin">
        {{centerInfo.consumerUser.nickName?centerInfo.consumerUser.nickName:''}}
      </p>
      <p v-else @click="doLogin()">
        未登录
      </p>
    </div>
    <div class="v-list" v-if="isLogin">
      <div class="v-item">
        <a :href="MOBILE_HOST+'userInfo'"
           class="v-block">
          <i class="iconfont v-left-icon">
            <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5312"><path d="M512.5376 896.4608a38.4 38.4 0 0 1 0 76.8H165.8624c-63.1296 0-114.1248-51.6352-114.1248-115.072V141.1328c0-63.4368 50.9952-115.072 114.1248-115.072h693.3504c63.1296 0 114.1248 51.6352 114.1248 115.072v358.528a38.4 38.4 0 0 1-76.8 0V141.1328c0-21.248-16.8192-38.272-37.3248-38.272H165.8624c-20.5056 0-37.3248 17.024-37.3248 38.272v717.056c0 21.248 16.8192 38.272 37.3248 38.272h346.6752z" fill="#555555" p-id="5313"></path><path d="M320 307.2h384a38.4 38.4 0 0 1 0 76.8h-384a38.4 38.4 0 0 1 0-76.8zM320 537.6h384a38.4 38.4 0 0 1 0 76.8h-384a38.4 38.4 0 0 1 0-76.8zM630.6816 889.4208l271.5392-271.5392a38.4 38.4 0 1 1 54.2976 54.2976L684.9792 943.7184a38.4 38.4 0 1 1-54.2976-54.2976z" fill="#FFD021" p-id="5314"></path></svg>
          </i>
          <div class="v-item-right">
            <span class="v-title">
              个人信息
            </span>
            <i class="iconfont icon-jiantou1 fr"></i>
          </div>
        </a>
      </div>
      <div class="v-item">
        <a :href="MOBILE_HOST+'activityList'"
           class="v-block">
          <i class="iconfont v-left-icon">
            <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5281"><path d="M780.9792 179.6608a38.4 38.4 0 0 1 0-76.8h103.8336c63.1296 0 114.1248 51.6352 114.1248 115.072v614.656c0 63.4368-50.9952 115.072-114.1248 115.072H140.2624c-63.1296 0-114.1248-51.6352-114.1248-115.072V217.9328c0-63.4368 50.9952-115.072 114.1248-115.072H243.2a38.4 38.4 0 0 1 0 76.8H140.2624c-20.5056 0-37.3248 17.024-37.3248 38.272v614.656c0 21.248 16.8192 38.272 37.3248 38.272h744.5504c20.5056 0 37.3248-17.024 37.3248-38.272V217.9328c0-21.248-16.8192-38.272-37.3248-38.272h-103.8336z" fill="#555555" p-id="5282"></path><path d="M435.2 394.1888v235.6224L634.6752 512 435.2 394.1888z m39.0656-66.1504l199.4752 117.8112a76.8 76.8 0 0 1 0 132.2496l-199.4752 117.8112A76.8 76.8 0 0 1 358.4 629.8112v-235.6224a76.8 76.8 0 0 1 115.8656-66.1504z" fill="#FFD021" p-id="5283"></path><path d="M396.8 102.4h230.4a38.4 38.4 0 0 1 0 76.8h-230.4a38.4 38.4 0 0 1 0-76.8z" fill="#555555" p-id="5284"></path></svg>
          </i>
          <div class="v-item-right">
            <span class="v-title">
              我的活动
            </span>
            <i class="iconfont icon-jiantou1 fr"></i>
            <span class="fr">
              有<span class="v-red">{{centerInfo.other.planActivityCount?centerInfo.other.planActivityCount:''}}</span>场活动即将开始
            </span>
          </div>
        </a>
      </div>
      <!-- <div class="v-item">
        <a href=""
           class="v-block">
          <i class="iconfont icon-Loading v-left-icon"></i>
          <div class="v-item-right">
            <span class="v-title">
              我的订单
            </span>
            <i class="iconfont icon-jiantou1 fr"></i>
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
            <i class="iconfont icon-jiantou1 fr"></i>
            <span class="fr">
              有<span class="v-red">{{centerInfo.other.prizeCount?centerInfo.other.prizeCount:''}}</span>个奖品
            </span>
          </div>
        </a>
      </div> -->
    </div>
    <com-login @login="loginSuccess"></com-login>
  </div>
</template>
<script>
import loginMixin from 'components/login-mixin'
import { mapMutations, mapState } from 'vuex'
import * as types from '../../store/mutation-types.js'
import userService from 'src/api/user-service'
export default {
  mixins: [loginMixin],
  data () {
    return {
      MOBILE_HOST: process.env.MOBILE_HOST,
      // user: {
      //   name: '', // 姓名
      //   avatar: '', // 头像
      //   balance: '0', // 余额
      //   activityQuantity: 0, // 活动数量
      //   orderQuantity: 0, // 订单数量
      //   prizeQuantity: 0 // 奖品数量
      // },
      isLogin: false // 当前用户是否登录
    }
  },
  mounted () {
    if (this.getLoginInfo()) {
      this.storeLoginInfo(this.getLoginInfo())
      this.isLogin = true
      if (!this.centerInfo.consumerUser.consumerUserId) {
        this.$config({ handlers: true }).$post(userService.GET_CENTER_INFO, {}).then((res) => {
          this.storeCenterInfo(res.data)
        }).catch(err => {
          this.$messageBox({
            header: '提示',
            content: err.msg,
            confirmText: '确定',
            handleClick: (e) => {
              if (e.action === 'cancel') {
              } else if (e.action === 'confirm') {
              }
            }
          })
        })
      }
    }
  },
  beforeCreate () {

  },
  computed: {
    ...mapState('login', {
      centerInfo: state => state.centerInfo,
      loginInfo: state => state.loginInfo
    }),
    defaultImg () {
      return this.centerInfo.consumerUser.avatar ? this.$imgHost + '/' + this.centerInfo.consumerUser.avatar : ''
    }
  },
  watch: {
  },
  methods: {
    ...mapMutations('login', {
      storeCenterInfo: types.CENTER_INFO,
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
      font-size: 12px;
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
