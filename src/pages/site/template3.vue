<template>
  <div class="template2-container">
    <com-panel class="section1" :edit="editAble" v-model="data.section1Data.panel">
      <com-logo class="logo" :edit="editAble" v-model="data.section1Data.logo"></com-logo>
       <com-nav class="nav" :edit="editAble" v-model="data.section1Data.nav"></com-nav>
    </com-panel>
    <com-panel class="section2" :edit="editAble" v-model="data.section2Data.panel">
      <com-font :edit="editAble" v-model="data.section2Data.font"></com-font>
      <com-btn class="btn" :edit="editAble" v-model="data.section2Data.btn"></com-btn>
      <com-video :edit="editAble" v-model="data.section2Data.video"></com-video>
    </com-panel>
    <com-block2 class="section3" :edit="editAble" height="556px" v-model="data.section3Data.block2"></com-block2>
    <com-panel class="section4" :edit="editAble" v-model="data.section4Data.panel">
      <com-font class="section4-font" :edit="editAble" v-model="data.section4Data.font"></com-font>
      <com-block1 :edit="editAble" v-model="data.section4Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section5" :edit="editAble" v-model="data.section5Data.panel">
      <com-share :edit="editAble" :share="shareData" v-model="data.section5Data.share"></com-share>
    </com-panel>
    <com-panel class="section6" :edit="editAble" v-model="data.section6Data.panel">
      <com-font class="section6-font" :edit="editAble" v-model="data.section6Data.font"></com-font>
      <com-block1 :max="15" :edit="editAble" v-model="data.section6Data.block1"></com-block1>
    </com-panel>
     <com-panel class="section7" :edit="editAble" v-model="data.section7Data.panel">
      <com-font :edit="editAble" v-model="data.section7Data.font"></com-font>
      <div class="support">微吼提供技术支持</div>
    </com-panel>
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
.template2-container /deep/ {
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
  .section1 {
    width: 100%;
    height: 580px;
    position: relative;
    overflow: hidden;
    .logo {
      width: 100px;
      height: 52px;
      margin-left: 10px;
      position: absolute;
      top: 0;
    }
    .nav {
      position: absolute;
      top: 0;
      right: 10px;
      height: 52px;
      .nav-group {
        font-size: 0;
        .nav-item {
          padding: 0 15px;
          height: 100%;
          line-height: 52px;
          color: white;
          font-size: 14px;
          display: inline-block;
          transition: all 0.3s;
          &:hover {
            color: #00a2ca;
          }
        }
      }
    }
  }
  .section2 {
    width: 100%;
    height: auto;
    .panel {
      padding: 50px 0;
      text-align: center;
    }
    .font-content {
      text-align: left;
      width: 580px;
      min-height: 100px;
    }
    .btn {
      display: block;
      margin-top: 30px;
      .btn-content {
        display: inline-block;
        position: relative;
      }
      .com-button {
        min-width: 180px;
        height: 45px;
        border-radius: 20px;
        font-size: 16px;
      }
    }
    .video-container {
      margin-top: 20px;
      .video-content {
        width: 728px;
        height: 420px;
        margin: auto;
        background-color: #00a2ca;
      }
    }
  }
  .section3 {
    width: 100%;
    height: 560px;
    .section3-block2 {
      .block2-item {
        padding: 100px 0;
        cursor: pointer;
      }
      .edit-content {
        width: 600px;
      }
    }
  }
  .section4 {
    width: 100%;
    height: auto;
    .panel {
      padding: 50px 0;
      text-align: center;
    }
    .section4-font {
      text-align: left;
      width: 580px;
      min-height: 60px;
      margin-bottom: 40px;
    }
    .block1-group {
      &.width2 {
        .block1-item {
          width: 500px;
          min-height: 256px;
        }
      }
      &.width3 {
        .block1-item {
          width: 390px;
          min-height: 199px;
        }
      }
      &.width4 {
        .block1-item {
          width: 280px;
          min-height: 146px;
        }
      }
      .block1-item {
        .content {
          &.top {
            width: 70%;
          }
        }
        .img {
          width: 100%;
          height: 158px;
          display: block;
        }
      }
    }
  }
  .section5 {
    width: 100%;
    height: auto;
    .panel {
      padding: 50px 0;
      text-align: center;
    }
  }
  .section6 {
    width: 100%;
    height: auto;
    .panel {
      padding: 50px;
      text-align: center;
    }
    .section6-font {
      text-align: left;
      width: 580px;
      min-height: 60px;
      margin-bottom: 40px;
    }
    .block1-group {
      width: 980px;
      overflow: hidden;
      .block1-item {
        height: 56px;
        margin: 0 30px 72px 32px;
        float: left;
        img {
          width: 100%;
        }
      }
    }
  }
  .section7 {
    width: 100%;
    height: auto;
    .panel {
      padding: 50px;
      text-align: center;
    }
    .font-content {
      text-align: left;
      width: 580px;
      min-height: 60px;
      margin-bottom: 40px;
    }
    .support {
      font-size: 14px;
    }
  }
}
</style>
