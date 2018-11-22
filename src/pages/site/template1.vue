<template>
  <div class="template1-container" :class="{isEdit:editAble}">
    <com-panel class="section1" :edit="editAble" v-model="data.section1Data.panel">
      <com-logo class="logo" :edit="editAble" v-model="data.section1Data.logo"></com-logo>
      <span class="iconfont" :class="[{'icon-nav-open':!menuOpen},{'icon-close':menuOpen}]" @click="()=>{menuOpen=!menuOpen}"></span>
      <com-nav class="nav" v-show="menuOpen" :edit="editAble" v-model="data.section1Data.nav"></com-nav>
    </com-panel>
    <com-panel class="section2" :edit="editAble" v-model="data.section2Data.panel">
      <div class="mask">
        <com-font :edit="editAble" v-model="data.section2Data.font"></com-font>
        <com-btn class="btn" :edit="editAble" v-model="data.section2Data.btn"></com-btn>
      </div>
    </com-panel>
    <com-panel class="section3" :edit="editAble" v-model="data.section3Data.panel">
      <com-font :edit="editAble" v-model="data.section3Data.font"></com-font>
      <com-block1 :edit="editAble" :max="3" v-model="data.section3Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section4" :edit="editAble" v-model="data.section4Data.panel">
      <com-font :edit="editAble" v-model="data.section4Data.font"></com-font>
      <com-block1 :edit="editAble" v-model="data.section4Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section5" :edit="editAble" v-model="data.section5Data.panel">
      <com-font :edit="editAble" v-model="data.section5Data.font"></com-font>
      <com-block1 :edit="editAble" :max="3" v-model="data.section5Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section6" :edit="editAble" v-model="data.section6Data.panel">
      <com-share :edit="editAble" :share="shareData" v-model="data.section6Data.share"></com-share>
    </com-panel>
    <com-panel class="section7" :edit="editAble" v-model="data.section7Data.panel">
      <com-font :edit="editAble" v-model="data.section7Data.font"></com-font>
        <com-btn class="btn" :edit="editAble" v-model="data.section7Data.btn"></com-btn>
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

export default {
  components: {
    ComLogo, ComNav, ComPanel, ComFont, ComBtn, ComBlock1, ComShare, ComBlock2, ComVideo
  },
  data () {
    return {
      menuOpen: false,
      data: {}
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
.template1-container.isEdit {
  .section1 {
    position: relative;
  }
}
.template1-container /deep/ {
  .panel-container {
    i {
      font-style: italic;
      &.iconfont {
        font-style: normal;
      }
    }
  }
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
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: rgba(85, 85, 85, 1);
    font-size: 28px;
  }
  .section1 {
    width: 100%;
    height: 90px;
    z-index: 1;
    position: absolute;
    .iconfont {
      cursor: pointer;
      float: right;
      margin-right: 30px;
      margin-top: 30px;
    }
    .logo {
      width: 100px;
      height: 100%;
      margin-left: 10px;
      position: absolute;
      top: 0;
    }
    .nav {
      position: absolute;
      top: 90px;
      width: 100%;
      background-color: #f5f5f5;
      .nav-group {
        font-size: 0;
        line-height: 58px;
        border-bottom: 1px solid #e2e2e2;
        .nav-item {
          display: block;
          height: 100px;
          line-height: 100px;
          font-size: 30px;
          text-align: center;
          border-top: 1px solid #e2e2e2;
          color: #222222;
          a {
            display: inline-block;
            text-align: center;
          }
        }
      }
    }
  }
  .section2 {
    width: 100%;
    height: 820px;
    .panel {
      padding: 50px 0;
      text-align: center;
    }
    .mask {
      // height: 380px;
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 46px;
      background-color: rgba(0, 0, 0, 0.8);
      padding-bottom: 20px;
    }
    .font-content {
      margin-top: 26px;
      text-align: left;
      width: 100%;
      min-height: 100px;
    }
    .btn {
      display: block;
      margin-top: 40px;
      .btn-content {
        display: inline-block;
        position: relative;
      }
      .com-button {
        min-width: 300px;
        height: 60px;
        border-radius: 60px;
        font-size: 28px;
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
    .font-container {
      margin-top: 80px;
      text-align: left;
      width: 650px;
      min-height: 90px;
    }
    .block1-group {
      .block1-item {
        width: 650px;
        margin-right: 0;
        img {
          width: 100%;
          height: 375px;
        }
        .content {
          margin-top: 10px;
          margin-bottom: 30px;
        }
      }
    }
  }
  .section4 {
    width: 100%;
    height: auto;
    text-align: center;
    .panel {
      padding-bottom: 20px;
    }
    .font-container {
      margin-top: 50px;
      text-align: left;
      width: 650px;
      min-height: 85px;
    }
    .block1-group {
      .block1-item {
        width: 630px;
        margin-right: 0;
        img {
          width: 100%;
          height: 100%;
        }
        .content {
          padding: 0 80px 50px;
          position: relative !important;
        }
      }
    }
  }
  .section5 {
    width: 100%;
    height: auto;
    text-align: center;
    .panel {
      padding-bottom: 40px;
    }
    .font-container {
      margin-top: 80px;
      text-align: left;
      width: 650px;
      min-height: 85px;
    }
    .block1-group {
      .block1-item {
        width: 650px;
        margin-right: 0;
        margin-bottom: 35px;
        img {
          width: 100%;
          height: 375px;
        }
      }
    }
  }
  .section6 {
    width: 100%;
    padding-bottom: 60px;
    .panel {
      padding-top: 20px;
      text-align: center;
    }
    .share-container {
      ._dialog {
        height: 600px;
      }
      ._dialog-header {
        height: 60px;
        line-height: 60px;
        font-size: 28px;
      }
      ._dialog-content {
        .title {
          font-size: 28px;
          padding: 0 20px;
        }
        .des {
          padding-top: 30px;
          font-size: 28px;
        }
        .qr {
          font-size: 28px;
          img {
            width: 280px;
            height: 280px;
          }
        }
        .ps {
          padding-top: 20px;
        }
      }
    }
    .share-group {
      padding: 0 80px;
      li {
        width: 140px;
        height: 110px;
        margin-right: 60px;
        margin-bottom: 48px;
        &:nth-of-type(3) {
          margin-right: 0;
        }
        .icon {
          width: 110px;
          height: 110px;
          margin: auto;
          margin-bottom: 10px;
        }
        .share-item {
          font-size: 28px;
        }
      }
    }
  }
  .section7 {
    width: 100%;
    .panel {
      text-align: center;
    }
    .font-content {
      margin-top: 50px;
      text-align: left;
      min-height: 100px;
      padding: 0 120px;
    }
    .btn {
      display: block;
      margin-top: 24px;
      .btn-content {
        display: inline-block;
        position: relative;
        padding-bottom: 40px;
      }
      .com-button {
        min-width: 300px;
        height: 60px;
        border-radius: 60px;
        font-size: 28px;
      }
    }
  }
}
</style>
