<template>
  <div class="withdraw-wrap"
       v-show="isReady">
    <div class="header">
      <router-link class="back"
                   to="/user">
        <i class="iconfont icon-jiantouzuo fl"></i>
      </router-link>
      收益提现
    </div>
    <div class="withdraw-content">
      <div class="detail">
        <router-link to="/viewWithdrawDetail">
          查看明细
        </router-link>
      </div>
      <div class="balance-icon"></div>
      <div class="balance">
        <span class="b-des">当前余额</span>
        <div class="b-money"><span>￥</span><span>{{money}}</span></div>
      </div>
    </div>
    <div class="withdraw-operation">
      <div class="operation-des">提现金额</div>
      <div class="balance-input">
        <span>￥</span>
        <com-input v-model="withDrawValue"
                   type="float"
                   :max="money"
                   @focus="focusValue"
                   @blur="blurValue"></com-input>
      </div>
    </div>
    <div class="withdraw-btns">
      <com-button :disabled="btnDisabled"
                  @click="doWithDraw">提现</com-button>
    </div>
  </div>
</template>

<script>
import loginMixin from 'components/login-mixin'
import userService from 'src/api/user-service'
export default {
  mixins: [loginMixin],
  data () {
    return {
      money: '0',
      withDrawValue: '0',
      isReady: false
    }
  },
  mounted () {
    if (this.getLoginInfo()) {
      this.$config({ handlers: true }).$post(userService.GET_CENTER_INFO, {}).then((res) => {
        if (res.data.other.hasGzWechat === 'N') {
          this.doAuth()
        }
        this.money = res.data.consumerUser.balance
        this.isReady = true
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
    } else {
      this.$router.push('/user')
    }
  },
  methods: {
    doWithDraw () {
      this.$post(userService.POST_COMMIT_WITHDRAW, { fee: this.withDrawValue }).then((res) => {
        this.$toast({
          'content': '提现成功'
        })
      })
    },
    focusValue () {
      if (this.withDrawValue === '0') {
        this.withDrawValue = ''
      }
    },
    blurValue () {
      if (!this.withDrawValue) {
        this.withDrawValue = '0'
      }
    }
  },
  computed: {
    btnDisabled () {
      let _money = this.money - 0
      let _withDrawValue = this.withDrawValue - 0
      return !(_money > 0 && _withDrawValue > 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.withdraw-wrap {
  height: 100%;
  background-color: #f5f5f5;
  /deep/ {
    .header {
      height: 80px;
      line-height: 80px;
      text-align: center;
      font-size: 32px;
      .back {
        position: absolute;
        left: 0;
      }
      .icon-jiantouzuo {
        width: 40px;
        display: inline-block;
        margin-left: 20px;
      }
    }
    .withdraw-content {
      background-color: white;
      position: relative;
      margin-bottom: 20px;
      .detail {
        padding: 20px 30px 0 0;
        color: #555555;
        text-align: right;
        font-size: 28px;
      }
      .balance-icon {
        background-image: url("~assets/image/balance@2x.png");
        background-repeat: no-repeat;
        background-size: 320px 200px;
        background-position: center 16px;
        height: 472px;
      }
      .balance {
        position: absolute;
        bottom: 80px;
        width: 100%;
        text-align: center;
        color: #222222;
        .b-des {
          display: inline-block;
          font-size: 32px;
          margin-bottom: 10px;
        }
        .b-money {
          span {
            &:first-child {
              font-size: 40px;
            }
          }
          font-size: 56px;
        }
      }
    }
    .withdraw-operation {
      background-color: white;
      position: relative;
      margin-bottom: 80px;
      padding: 30px 35px 10px;
      .operation-des {
        font-size: 30px;
        color: #555555;
      }
      .balance-input {
        display: inline-block;
        span {
          font-size: 40px;
          margin-top: 19px;
          float: left;
        }
        .com-input {
          width: auto;
        }
        input {
          border: 0;
          padding: 0;
          font-size: 56px;
          color: #222222;
          display: block;
        }
      }
    }
    .withdraw-btns {
      button {
        width: 570px;
        height: 90px;
        font-size: 36px;
        line-height: 78px;
        border-radius: 45px;
        margin: auto;
        display: block;
      }
    }
  }
}
</style>
