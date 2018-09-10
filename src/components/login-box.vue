<template>
  <div class="login-container">
    <com-dialog
    :visible.sync="visible"
    center
    >
      <div>
        <div class="rule">登录参与直播互动</div>
        <com-input class="mobile" type="input" placeholder="请输入手机"></com-input>
        <com-input class="code" type="input" placeholder="请输入验证码"></com-input>
        <com-button class="codeBtn" :disabled="code" @click="getCode" type="primary" >{{codeText}}</com-button>
      </div>
      <div class="footer" slot="footer">
        <com-button type="primary">登录</com-button>
      </div>
    </com-dialog>
  </div>
</template>

<script>
export default {
  name: 'ComLogin',
  data () {
    return {
      visible: false,
      code: false,
      time: 60
    }
  },
  methods: {
    getCode () {
      this.code = true
      this.timer = setInterval(() => {
        this.time--
        if (this.time === 0) {
          clearInterval(this.timer)
          this.code = false
          this.time = 60
        }
      }, 1000)
    }
  },
  computed: {
    codeText () {
      if (!this.code) {
        return '发送验证码'
      } else {
        return `倒计时${this.time}秒`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container /deep/ {
  .dialog-wrap {
    width: 540px;
    .dialog-body {
      padding: 30px 40px 10px;
      .rule {
        a {
          color: #0000ff;
        }
        padding-bottom: 30px;
      }
      .mobile {
        margin-bottom: 20px;
        height: 80px;
        width: 100%;
      }
      .code {
        height: 80px;
        margin-bottom: 20px;
        display: inline-block;
        width: 292px;
      }
      .codeBtn {
        width: 160px;
        padding: 10px 0;
        height: 80px;
      }
    }
    .footer {
      padding: 0 40px 20px;
      display: inline-block;
      width: 100%;
      button {
        width: 100%;
        height: 80px;
      }
    }
  }
}
</style>
