<template>
  <div class="q-edit-content">
    <com-input v-if="!edit"
               @focus="focus"
               :type="value.detail.format"
               :max-length="value.detail.max?value.detail.max:0"
               :value.sync="value.value"></com-input>
    <com-input v-if="!edit&&value.verification==='Y'"
               class="code"
               @focus="focus"
               :local="true"
               :max-length="6"
               placeholder="请输入验证码"
               v-model="value.code"></com-input>
               <template v-if="isView">
                <com-button class="code"
                v-if="!edit&&value.verification==='Y'">获取验证码</com-button>
               </template>
               <template v-else>
                <com-button class="code"
                @click="getCode"
                v-if="!edit&&value.verification==='Y'">获取验证码</com-button>
               </template>
    <div v-if="!edit&&errorTip"
         class="error-msg">{{errorTip}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default () {
        return {}
      }
    },
    edit: {
      type: Boolean,
      default: false
    },
    isView: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      errorTip: ''
    }
  },
  methods: {
    getCode () {
      alert('获取验证码稍后实现')
    },
    focus () {
      this.errorTip = ''
    },
    validate () {
      let result = true
      if (!this.value.title) {
        result = false
        this.value.error = true
        this.value.title = '请设置问卷内容'
      }

      return result
    },
    check () {
      if (this.value.required && !this.value.value && this.value.detail.format !== 'mobile') {
        this.errorTip = '此项为必填项'
        return false
      } else if (this.value.detail.format === 'email' && this.value.value) {
        var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
        if (!re.test(this.value.value)) {
          this.errorTip = '请输入正确的邮箱格式'
        }
        return false
      } else if (this.value.detail.format === 'mobile') {
        if (!this.value.value || this.value.value.length < 11) {
          this.errorTip = '请输入正确的手机号'
        } else if (!this.value.code && this.value.verification === 'Y') {
          this.errorTip = '请输入验证码'
        }
        return false
      }
      return { id: this.value.id, value: this.value.value }
    }
  }
}
</script>

<style scoped lang="scss">
.q-edit-content {
  width: 90%;
  /deep/ {
    .com-input {
      &.code {
        margin-top: 5px;
        width: 140px;
      }
    }
    .com-button {
      font-size: 12px;
      padding: 6px 20px;
      &.code {
        text-align: center;
        margin-top: 5px;
        width: 140px;
        margin-left: 1px;
        position: absolute;
        bottom: 30px;
        right: 35px;
        height: 40px;
        line-height: 39px;
        border-color: #ffd021;
        background-color: #ffd021;
        padding: 0;
      }
    }
    .error-msg {
      position: absolute;
      color: #fc5659;
      padding-left: 10px;
      line-height: 20px;
      font-size: 12px;
    }
  }
}
</style>
