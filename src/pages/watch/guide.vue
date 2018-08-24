<template>
  <div class="liveguide-container">
    <img src="../../assets/image/1.jpg" alt="">
    <div class="v-frame-container">
      <p class="v-guide-title" v-if="isShowTitle">
        {{guideTitle}}
      </p>
      <a href="javascript:;" @click="alreadyRegistered()" v-if="isShowAlreadyRegisteredBtn">已报名</a>
      <div class="v-join" v-if="isShowIntroduction">
        <div class="v-introduction">
          {{introduction}}
        </div>
        <div class="v-countdown">
          {{countdown}}
        </div>
        <a href="javascript:;" @click="signUp()">报名</a>
      </div>
      <div class="v-from" v-else-if="isShowFrom">
        <div class="v-input-from">
          <p class="v-input-title">
            您的姓名
          </p>
          <input type="text" placeholder="输入姓名">
        </div>
        <div class="v-input-from">
          <p class="v-input-title">
            手机号码
          </p>
          <input type="text" placeholder="输入手机号" v-model="userPhone">
          <div id="captcha"></div>
          <input type="text" placeholder="输入动态码">
          <a href="javascript:;" class="v-getcode" :class="{prohibit:isProhibit}" @click="getCode()">获取动态码<span v-show="isSend" class="fr">(<em>{{second}}</em>s)</span></a>
        </div>
        <div class="v-input-from">
          <p class="v-input-title">
            最爱的美食
          </p>
          <el-select  v-model="food" placeholder="请选择">
            <el-option
              v-for="item in selectValue"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <a href="javascript:;" @click="submission()" >立即报名</a>
      </div>
      <div class="v-from" v-else-if="isShowAlreadyRegistered">
        <div class="v-input-from">
          <p class="v-input-title">
            手机号
          </p>
          <input type="text" placeholder="输入手机号" v-model="userPhone">
          <div id="captcha"></div>
          <input type="text" placeholder="输入动态码">
          <a href="javascript:;" class="v-getcode" :class="{prohibit:isProhibit}" @click="getCode()">获取动态码<span v-show="isSend" class="fr">(<em>{{second}}</em>s)</span></a>
        </div>
        <a href="javascript:;" @click="verification()" >提交</a>
      </div>
      <div class="v-success" v-else>
        <p class="v-success-title">
          报名成功
        </p>
        <p class="v-success-content">
          直播开始前我们会发送提醒消息，请注意查收
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  // import Editor from './info-editor'
  export default {
    data () {
      return {
        account: '1',
        guideTitle: '这里显示引导标题', // 引导标题
        introduction: '直播简介直播简介直播简介直播简介直播简介直播简介直播简介直播简介直播简介直播简介', // 引导简介
        countdown: '5天23小时44分钟12秒', // 倒计时
        isStartSoon: true, // 是否半小时之内开始或已开始
        isShowIntroduction: true, // 是否显示初始直播简介页面
        isShowTitle: true, // 是否显示引导标题
        isShowFrom: true, // 是否显示表单
        isShowAlreadyRegistered: false, // 是否显示已报名弹窗
        isShowAlreadyRegisteredBtn: false, // 是否显示已报名按钮
        key: 'b7982ef659d64141b7120a6af27e19a0',
        isProhibit: true,
        isSend: false,
        second: 60,
        timerr: '',
        phoneKey: '',
        isImg: false,
        cap: null,
        userName: '',
        userPhone: '',
        phoneStatus: false,
        food: '',
        selectValue: [{
          value: '黄金糕',
          label: '黄金糕'
        }, {
          value: '双皮奶',
          label: '双皮奶'
        }, {
          value: '蚵仔煎',
          label: '蚵仔煎'
        }, {
          value: '龙须面',
          label: '龙须面'
        }, {
          value: '北京烤鸭',
          label: '北京烤鸭'
        }
        ]}
    },
    mounted () {
    },
    components: {
      // 'com-editor': Editor
    },
    created () {
    },
    watch: {
      userPhone: function () {
        this.checkPhone(this.userPhone)
        this.isGetCodePermission()
      },
      phoneStatus: function (val) {
        this.isGetCodePermission()
      },
      isImg: function (val) {
        this.isGetCodePermission()
      }
    },
    methods: {
      signUp () {
        this.isShowIntroduction = false
        this.isShowTitle = true
        // ajax获取距离活动开始时间是否超过半小时
        this.isStartSoon = true
        this.isShowFrom = true
        this.isShowAlreadyRegistered = false
        if (this.isStartSoon) {
          this.isShowAlreadyRegisteredBtn = true
        }

        let _self = this
        window.initNECaptcha({
          captchaId: _self.key,
          element: '#captcha',
          mode: 'float',
          width: 300,
          onReady: function (instance) {
          },
          onVerify: function (err, data) {
            if (data) {
              _self.phoneKey = data.validate
              _self.isImg = true
            }
            if (err) {
              console.log(err)
            }
          },
          onError: function (data) {
            console.log(1)
            if (data) {
              console.log(data)
            }
          }
        }, function onload (instance) {
          _self.cap = instance
        })

        if (this.isStartSoon) {
          console.log(1)
        } else {
          console.log(2)
        }
      },
      submission () {
        // if200
        let code = 200
        if (code === 200) {
          if (this.isStartSoon) {
          // 跳转到观看页面
            console.log('跳转观看页')
          } else {
            this.isShowTitle = false
            this.isShowIntroduction = false
            this.isShowFrom = false
            this.isShowAlreadyRegistered = false
          }
        } else {
          console.log('报名失败')
        }
      },
      alreadyRegistered () {
        this.isShowTitle = true
        this.isShowIntroduction = false
        this.isShowFrom = false
        this.isShowAlreadyRegistered = true
        this.isShowAlreadyRegisteredBtn = false
        clearInterval(this.timerr)
        this.isSend = false
        this.isProhibit = true
        this.second = 60
        this.isImg = false
        this.phoneKey = ''
        this.cap.refresh()
      },
      verification () {
        if (this.isStartSoon) {
          // 跳转到观看页面
        } else {
          this.isShowAlreadyRegisteredBtn = true
          this.isShowTitle = true
          this.isShowIntroduction = false
          this.isShowFrom = true
          this.isShowAlreadyRegistered = false
          clearInterval(this.timerr)
          this.isSend = false
          this.isProhibit = true
          this.second = 60
          this.isImg = false
          this.phoneKey = ''
          this.cap.refresh()
        }
      },
      isGetCodePermission () {
        if (this.isImg && this.phoneStatus) {
          this.isProhibit = false
        } else {
          this.isProhibit = true
        }
      },
      checkPhone (param) {
        console.log(1)
        let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
        if (reg.test(parseInt(param))) {
          this.phoneStatus = true
        } else {
          this.phoneStatus = false
        }
      },
      getCode () {
        // 获取验证码
        if (this.isProhibit) {
          return false
        }
        console.log('获取验证码')
      }
    }
  }
</script>
<style lang="scss" scoped>
.liveguide-container {
  width: 100%;
  height: 100%;
  img {
    display: block;
    width: 100%;
    height: 320px;
  }
  .v-frame-container {
    width: 100%;
    position: absolute;
    top: 320px;
    bottom: 0px;
    left: 0px;
    overflow-y: auto;
  }
}
</style>

