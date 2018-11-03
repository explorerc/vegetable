<template>
  <div class="v-user-edit">
    <a :href="MOBILE_HOST+'userinfo'" class="v-return-userinfo clearfix">
      <i class="iconfont icon-jiantouzuo fl"></i>修改{{title}}
    </a>
    <div class="v-edit">
      <div class="v-content">
      <com-input :value.sync="val"
                 :placeholder="placeholder"
                 class="v-input"
                 type="input"
                 :isCharacter="isCharacter"
                 :max-length="maxLength"
                 v-if="maxLength"></com-input>
      <com-input :value.sync="val"
                 :placeholder="placeholder"
                 class="v-input"
                 type="input"
                 :isCharacter="isCharacter"
                 @focus="inputFocus"
                 v-else></com-input>
      </div>
      <p class="v-error">
        <i class="iconfont icon-Shapex fl" v-if="errorTips"></i>{{errorTips}}
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
import userService from 'src/api/user-service'
export default {
  mixins: [loginMixin],
  data () {
    return {
      MOBILE_HOST: process.env.MOBILE_HOST,
      title: '', // 修改类型名称
      errorTips: '', // 错误提示信息
      val: '', // 用户填写的信息
      type: '',
      placeholder: '',
      maxLength: 0,
      isCharacter: 'false'
    }
  },
  created () {
    this.type = this.$route.params.type
    if (this.getLoginInfo()) {
      this.storeLoginInfo(this.getLoginInfo())
      if (!this.centerInfo.consumerUser.consumerUserId) {
        this.$config({ handlers: true }).$post(userService.GET_CENTER_INFO, {}).then((res) => {
          this.storeCenterInfo(res.data)
          switch (this.type) {
            case 'name': this.title = '昵称'
              this.val = this.centerInfo.consumerUser.nickName
              this.placeholder = '请填写昵称'
              this.maxLength = 14
              break
            case 'email': this.title = '邮箱'
              this.val = this.centerInfo.consumerUser.email
              this.placeholder = '请填写邮箱'
              this.isCharacter = true
              this.maxLength = 40
              break
          }
        }).catch(err => {
          this.$messageBox({
            header: '提示',
            content: err.msg,
            confirmText: '确定',
            handleClick: (e) => {
              if (e.action === 'cancel') {
                this.$router.replace('/user')
              } else if (e.action === 'confirm') {
                this.$router.replace('/user')
              }
            }
          })
        })
      }
    } else {
      location.replace(`${this.MOBILE_HOST}user`)
    }
  },
  computed: {
    ...mapState('login', {
      centerInfo: state => state.centerInfo,
      loginInfo: state => state.loginInfo
    })
  },
  props: {
  },
  watch: {
  },
  methods: {
    ...mapMutations('login', {
      storeCenterInfo: types.CENTER_INFO,
      storeLoginInfo: types.LOGIN_INFO
    }),
    save () {
      if (!this.val) {
        switch (this.type) {
          case 'name':
            this.errorTips = '请输入昵称'
            break
          case 'email':
            this.errorTips = '请输入邮箱'
            break
        }
        return false
      }
      if (!this.verification(this.val, true, this.type)) {
        this.errorTips = `${this.title}格式有误`
        return false
      }
      let data = {}
      switch (this.$route.params.type) {
        case 'name':
          data.nickName = this.val
          break
        case 'email':
          data.email = this.val
          break
      }
      this.$config({ handlers: true }).$post(userService.POST_CENTER_UPDATE, data).then((res) => {
        let tempLoginInfo = JSON.parse(JSON.stringify(this.centerInfo))
        let tempCenterInfo = JSON.parse(JSON.stringify(this.centerInfo))
        switch (this.$route.params.type) {
          case 'name': this.title = '昵称'
            tempLoginInfo.nickName = this.val
            tempCenterInfo.consumerUser.nickName = this.val
            break
          case 'email': this.title = '邮箱'
            tempLoginInfo.email = this.val
            tempCenterInfo.consumerUser.email = this.val
            break
        }
        this.storeLoginInfo(tempLoginInfo)
        this.storeCenterInfo(tempCenterInfo)
        this.$router.replace('/userinfo')
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
    },
    inputBlur () {
    },
    inputFocus () {
      this.errorTips = ''
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
  .v-edit /deep/ {
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
      height: 50px;
      font-size: 20px;
      color: #888;
      height: 56px;
      line-height: 56px;
      .iconfont {
        margin-right: 10px;
        color: #fc5659;
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

