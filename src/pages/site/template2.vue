<template>
  <div class="template1-container">
    <com-panel class="section1" :edit="editAble" v-model="data.section1Data.panel">
      <com-logo class="logo" :edit="editAble" v-model="data.section1Data.logo"></com-logo>
      <com-nav class="nav" :edit="editAble" v-model="data.section1Data.nav"></com-nav>
    </com-panel>
    <div class="section2" :edit="editAble" v-model="data.section2Data.panel">
      <com-panel class="panel_right" :edit="editAble" v-model="data.section2Data.panel2">
      </com-panel>
      <com-panel class="panel_left" :edit="editAble" v-model="data.section2Data.panel1">
      </com-panel>
      <com-panel class="panel_center" :edit="editAble" v-model="data.section2Data.panel3">
        <com-font :edit="editAble"  v-model="data.section2Data.font"></com-font>
        <com-btn class="btn" :edit="editAble" v-model="data.section2Data.btn"></com-btn>
      </com-panel>
    </div>
    <com-panel class="section3" :edit="editAble" v-model="data.section3Data.panel">
      <com-font class="font-title" :edit="editAble" v-model="data.section3Data.font1"></com-font>
      <com-font class="font-des" :edit="editAble" v-model="data.section3Data.font2"></com-font>
      <com-share :edit="editAble" :share="shareData" v-model="data.section3Data.share"></com-share>
    </com-panel>
    <com-panel class="section4" :edit="editAble" v-model="data.section4Data.panel">
      <com-font :edit="editAble" v-model="data.section4Data.font"></com-font>
      <com-block1 :edit="editAble" v-model="data.section4Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section5" :edit="editAble" v-model="data.section5Data.panel">
      <com-font :edit="editAble" v-model="data.section5Data.font"></com-font>
      <com-block1 :edit="editAble" :max="5" v-model="data.section5Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section6" :edit="editAble" v-model="data.section6Data.panel">
      <com-font :edit="editAble" v-model="data.section6Data.font"></com-font>
      <com-block1 :edit="editAble" :max="5" v-model="data.section6Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section7" :edit="editAble" v-model="data.section7Data.panel">
      <com-font :edit="editAble" v-model="data.section7Data.font"></com-font>
      <com-block1 :edit="editAble" :max="3" v-model="data.section7Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section8" :edit="editAble" v-model="data.section8Data.panel">
      <com-font :edit="editAble" v-model="data.section8Data.font"></com-font>
      <com-block1 :edit="editAble" :max="3" v-model="data.section8Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section9" :max="10" :edit="editAble" v-model="data.section9Data.panel">
      <com-font :edit="editAble" v-model="data.section9Data.font"></com-font>
        <com-btn class="btn" :edit="editAble" v-model="data.section9Data.btn"></com-btn>
    </com-panel>
    <div class="support">微吼直播提供技术支持</div>
  </div>
</template>

<script>
import ComLogo from 'components/site/logo'
import ComNav from 'components/site/navigation'
import ComPanel from 'components/site/panel'
import ComFont from 'components/site/font'
import ComBtn from 'components/site/button'
import ComBlock1 from 'components/site/block1'
import ComBlock2 from 'components/site/block2'
import ComShare from 'components/site/share'
import ComVideo from 'components/site/video'

import defaultData from './templateData'

export default {
  components: {
    ComLogo, ComNav, ComPanel, ComFont, ComBtn, ComBlock1, ComShare, ComBlock2, ComVideo
  },
  data () {
    return {
      data: defaultData.template2()
    }
  },
  props: {
    value: {
      type: Object,
      default () {
        return {}
      }
    },
    editAble: {
      type: Boolean,
      default: false
    },
    shareData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  created () {
    if (this.value.tid) {
      this.data = this.value
    }
  }
}
</script>

<style scoped lang="scss">
.template1-container /deep/ {
  min-width: 1366px;
  .edit {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    height: 16px;
    display: none;
    z-index: 5;
    font-size: 0;
    i {
      cursor: pointer;
      display: inline-block;
      background-color: red;
      padding: 2px;
      font-size: 16px;
      &:first-child {
        margin-right: 1px;
      }
    }
  }
  .support {
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: rgba(85, 85, 85, 1);
    font-size: 14px;
  }
  .section1 {
    width: 100%;
    height: 60px;
    overflow: hidden;
    .panel {
      text-align: center;
    }
    .logo {
      width: 100px;
      height: 100%;
      left: 10px;
      position: absolute;
      top: 0;
    }
    .nav {
      height: 100%;
      display: inline-block;
      width: auto;
      .nav-group {
        font-size: 0;
        line-height: 58px;
        .nav-item {
          padding: 0 27px;
          height: 30px;
          line-height: 30px;
          display: inline-block;
          color: white;
          font-size: 16px;
          vertical-align: middle;
          a {
            padding-bottom: 9px;
            min-width: 64px;
            display: inline-block;
            text-align: center;
            &:hover {
              border-bottom: 3px solid #fd654c;
            }
          }
        }
      }
    }
  }
  .section2 {
    width: 100%;
    height: 600px;
    position: relative;
    .panel_left {
      height: 100%;
      margin-right: 400px;
    }
    .panel_right {
      width: 400px;
      height: 100%;
      float: right;
    }
    .panel_center {
      width: 483px;
      height: 420px;
      position: absolute;
      top: 80px;
      right: 98px;
      text-align: left;
      .panel {
        padding: 35px;
      }
      .font-container {
        width: 100%;
        min-height: 200px;
      }
      .font-editer {
        height: 400px;
        background-color: #dadada;
      }
      .font-content {
        width: 100%;
        min-height: 100px;
      }
      .btn {
        display: block;
        margin-top: 24px;
        text-align: left;
        .btn-content {
          display: inline-block;
          position: relative;
        }
        .com-button {
          border: 2px solid rgba(253, 253, 253, 1);
          min-width: 200px;
          height: 50px;
          font-size: 16px;
        }
      }
    }
  }
  .section3 {
    width: 100%;
    height: auto;
    text-align: center;
    .panel {
      padding-bottom: 80px;
    }
    .font-title {
      margin-top: 100px;
      text-align: left;
      width: 650px;
      min-height: 82px;
    }
    .font-des {
      display: block;
      margin: auto;
      width: 70%;
      min-width: 900px;
      min-height: 150px;
      margin-bottom: 70px;
    }
    .share-group {
      li {
        width: 120px;
        height: 46px;
        margin-right: 20px;
        line-height: 46px;
        .share-item {
          position: relative;
          .icon {
            position: absolute;
            background-size: 24px 24px;
            background-position: 10px center;
            border-radius: 4px;
            width: 100%;
            height: 100%;
            margin-bottom: 0;
            & + span {
              position: relative;
              left: 13px;
              color: white;
            }
            &.wx {
              background-color: #07b906;
              background-image: url('~assets/image/wx_s.png');
            }
            &.wx-space {
              background-color: #07b906;
              background-image: url('~assets/image/wx_space_s.png');
            }
            &.qq {
              background-color: #468efd;
              background-image: url('~assets/image/qq_s.png');
            }
            &.qq-space {
              background-color: #468efd;
              background-image: url('~assets/image/qq_space_s.png');
            }
            &.sina {
              background-color: #e84d52;
              background-image: url('~assets/image/sina_s.png');
            }
            &.copy {
              background-color: #325a98;
              background-image: url('~assets/image/copy_s.png');
            }
          }
        }
      }
    }
  }
  .section4 {
    width: 100%;
    height: auto;
    text-align: center;
    .panel {
      padding-bottom: 50px;
    }
    .font-container {
      margin-top: 50px;
      text-align: left;
      width: 650px;
      min-height: 60px;
      .font-editer {
        height: 400px;
        background-color: #dadada;
      }
    }
    .block1-container {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .block1-group {
      .block1-item {
        margin-right: 80px;
        img {
          width: 130px;
        }
      }
    }
  }
  .section5 {
    width: 100%;
    height: auto;
    text-align: center;
    .panel {
      padding-bottom: 80px;
    }
    .font-container {
      margin-top: 100px;
      text-align: left;
      width: 650px;
      min-height: 85px;
    }
    .block1-group {
      .block1-item {
        border: 1px solid rgba(226, 226, 226, 1);
        width: 250px;
        height: 320px;
        img {
          width: 100%;
        }
      }
    }
  }
  .section6 {
    width: 100%;
    height: auto;
    text-align: center;
    .panel {
      padding-bottom: 40px;
    }
    .font-container {
      margin-top: 50px;
      text-align: left;
      width: 650px;
      min-height: 82px;
    }
    .block1-group {
      width: 1070px;
      margin: auto;
      .block1-item {
        display: block;
        margin: auto;
        margin-bottom: 80px;
        &:last-child {
          margin-bottom: 0;
        }
        &.left {
          img {
            margin-right: 0;
            margin-left: 80px;
          }
        }
        .content {
          width: auto;
        }
        img {
          width: 500px;
          height: 500px;
          margin-right: 80px;
        }
      }
    }
  }
  .section7 {
    width: 100%;
    height: auto;
    text-align: center;
    .panel {
      padding-bottom: 40px;
    }
    .font-container {
      margin-top: 100px;
      text-align: left;
      width: 650px;
      min-height: 85px;
    }
    .block1-group {
      &.width3 {
        .block1-item {
          width: 346px;
          img {
            height: 200px;
          }
        }
      }
      .block1-item {
        width: 540px;
        margin-right: 40px;
        img {
          width: 100%;
          height: 310px;
        }
      }
    }
  }
  .section8 {
    width: 100%;
    height: auto;
    text-align: center;
    .panel {
      padding-bottom: 40px;
    }
    .font-container {
      margin-top: 100px;
      text-align: left;
      width: 650px;
      min-height: 95px;
    }
    .block1-group {
      width: 1124px;
      .block1-item {
        width: 200px;
        height: 100px;
        margin-right: 30px;
        margin-bottom: 30px;
        border: 1px solid rgba(226, 226, 226, 1);
        &:nth-of-type(5) {
          margin-right: 0;
        }
        img {
          width: 100px;
          display: block;
          margin: auto;
        }
      }
    }
  }
  .section9 {
    width: 100%;
    height: 300px;
    .panel {
      text-align: center;
      padding-top: 70px;
    }
    .font-content {
      text-align: left;
      width: 650px;
      min-height: 100px;
    }
    .font-editer {
      height: 400px;
      background-color: #dadada;
    }
    .btn {
      display: block;
      margin-top: 24px;
      text-align: left;
      text-align: center;
      .btn-content {
        display: inline-block;
        position: relative;
      }
      .com-button {
        border: 2px solid rgba(253, 253, 253, 1);
        min-width: 200px;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        font-size: 16px;
      }
    }
  }
}
</style>
