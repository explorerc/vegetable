<template>
  <div class="v-user-info">
    <a :href="MOBILE_HOST+'user'" class="v-return-user clearfix">
      <i class="iconfont icon-Loading fl"></i>个人中心
    </a>
    <div class="v-list">
      <a class="v-item v-avatar clearfix" @click="upload">
        <ve-upload ref="uploadFile" title="图片支持jpg、png、bmp格式，建议比例16:9，大小不超过2M" accept="png|jpg|jpeg|bmp" :defaultImg="defaultImg" :fileSize="2048" @error="uploadError" @success="uploadImgSuccess"></ve-upload>
        <span class="v-title">
          头像
        </span>
        <i class="iconfont icon-Loading fr"></i>
        <img :src="defaultImg" alt="" class="fr">
      </a>
      <a class="v-item clearfix" :href="MOBILE_HOST+'userInfoEdit/name'">
        <span class="v-title">
          昵称
        </span>
        <i class="iconfont icon-Loading fr"></i>
        <span class="v-content fr">
          {{loginInfo.nickName === '' ? '未填写':loginInfo.nickName}}
        </span>
      </a>
      <a class="v-item clearfix" href="javascript:;">
        <span class="v-title">
          手机号
        </span>
        <i class="iconfont icon-Loading fr v-hidden"></i>
        <span class="v-content fr">
          {{loginInfo.mobile === '' ? '未填写':loginInfo.mobile}}
        </span>
      </a>
      <a class="v-item clearfix" :href="MOBILE_HOST+'userInfoEdit/email'">
        <span class="v-title">
          邮箱
        </span>
        <i class="iconfont icon-Loading fr"></i>
        <span class="v-content fr">
          {{loginInfo.email === '' ? '未填写':loginInfo.email}}
        </span>
      </a>
    </div>
    <com-login @login="loginSuccess"></com-login>
  </div>
</template>
<script>
import loginMixin from 'components/login-mixin'
import { mapMutations, mapState } from 'vuex'
import * as types from '../../store/mutation-types.js'
import VeUpload from 'src/components/common/ve-upload-image'
export default {
  mixins: [loginMixin],
  data () {
    return {
      MOBILE_HOST: process.env.MOBILE_HOST,
      user: {
        name: '',
        avatar: ''
      }
    }
  },
  components: {
    've-upload': VeUpload
  },
  created () {
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
    }),
    defaultImg () {
      console.log(this.loginInfo)
      return this.loginInfo.avatar ? this.$imgHost + '/' + this.loginInfo.avatar : ''
    }
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
    },
    upload () {
      this.$refs.uploadFile.overUpload()
    },
    uploadImgSuccess (data) {
      console.log(data)
    },
    uploadError (data) {
      console.log('上传失败:', data)
    }
  }
}
</script>
<style lang="scss" scoped>
.v-user-info {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .iconfont {
    &.fr {
      margin-left: 26px;
    }
    &.v-hidden {
      opacity: 0;
    }
  }
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
    font-size: 30px;
    color: #555555;
    .v-item {
      width: 100%;
      height: 100px;
      line-height: 100px;
      border-bottom: 1px solid #e2e2e2;
      padding: 0 40px;
      &.v-avatar {
        height: 170px;
        line-height: 170px;
        img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          vertical-align: middle;
          margin-top: 25px;
        }
      }
      .v-content {
        color: #222222;
      }
      .ve-upload-box {
        display: none;
      }
    }
  }
}
</style>

