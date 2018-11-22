<template>
  <div class="template3-container" :class="{isEdit:editAble}">
    <com-panel class="section1" :edit="editAble" v-model="data.section1Data.panel">
      <com-logo class="logo" :edit="editAble" v-model="data.section1Data.logo"></com-logo>
      <span class="iconfont" :class="[{'icon-nav-open':!menuOpen},{'icon-close':menuOpen}]" @click="()=>{menuOpen=!menuOpen}"></span>
      <com-nav class="nav" v-show="menuOpen" :edit="editAble" v-model="data.section1Data.nav"></com-nav>
    </com-panel>
    <div class="section2" :edit="editAble" >
      <com-panel :edit="editAble" v-model="data.section2Data.panel">
      </com-panel>
      <com-block1 :edit="editAble" :max="1" v-model="data.section2Data.block1"></com-block1>
    </div>
    <div class="section3" :edit="editAble" >
      <com-block1 :edit="editAble" :max="5" v-model="data.section3Data.block1"></com-block1>
    </div>
    <div class="section4" :edit="editAble" >
      <com-font :edit="editAble" v-model="data.section4Data.font"></com-font>
      <div class="video-list clearfix">
        <div class="video-item" v-for="(item, idx) in data.section4Data.list" :key='idx'>
          <com-video :edit="editAble" v-model="item.video"></com-video>
          <com-font :edit="editAble" v-model="item.video.font"></com-font>
        </div>
      </div>
    </div>
    <com-panel class="section5" :edit="editAble" v-model="data.section5Data.panel">
      <div class='bg' :style="{backgroundImage:'url('+data.section5Data.panel.img+')'}"></div>
      <com-font :edit="editAble" v-model="data.section5Data.font"></com-font>
      <com-btn class="btn" :edit="editAble" v-model="data.section5Data.btn"></com-btn>
    </com-panel>
    <com-panel class="section8" :edit="editAble" v-model="data.section8Data.panel">
      <com-font :edit="editAble" v-model="data.section8Data.font"></com-font>
      <com-block1 :edit="editAble" :max="8" v-model="data.section8Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section6" :edit="editAble" v-model="data.section6Data.panel">
      <com-font :edit="editAble" v-model="data.section6Data.font"></com-font>
      <com-block1 :edit="editAble" :max="10" v-model="data.section6Data.block1"></com-block1>
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
      data: {
      },
      menuOpen: false
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
.template3-container /deep/ {
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
  .section1 {
    width: 100%;
    height: 90px;
    z-index: 1;
    position: absolute;
    .panel {
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    }
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
    height: auto;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 100px;
    .block1-content {
      width: 100%;
      padding: 0 40px;
    }
    .block1-group {
      .block1-item {
        width: 100%;
        &.left {
          .content {
            width: 300px;
            // padding: 50px 60px 0;
            // float: left;
            padding-top: 100px;
          }
        }
        img {
          width: 350px;
          height: auto;
          margin: auto;
        }
      }
      .btn-container {
        margin-top: 53px;
        // margin-right: 500px;
        float: left;
      }
    }
  }
  .section3 {
    width: 100%;
    img {
      width: 100%;
      height: auto;
      float: none;
      padding-bottom: 20px;
    }
    .block1-bg {
      width: 100%;
      height: 100%;
    }
    float: auto;
    .content {
      padding: 20px 50px;
    }
  }
  .section4 {
    width: 100%;
    height: auto;
    padding: 30px 50px;
    .panel {
      padding: 50px 0;
      text-align: center;
    }
    .font-container {
      display: block;
      text-align: center;
      * {
        width: 100%;
        text-align: center;
      }
    }
    .video-wrap {
      overflow: hidden;
      width: 650px;
      height: 375px;
      border-radius: 4px;
      border: 1px solid rgba(226, 226, 226, 1);
    }
    .video-container {
      padding: 40px 0 20px 0;
    }
  }
  .section5 {
    width: 100%;
    height: auto;
    .panel {
      padding: 50px 0;
      text-align: center;
    }
    .bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.2;
    }
    .font-container {
      padding: 0 50px;
      line-height: 50px;
    }
    .btn-container {
      padding-top: 50px;
    }
  }
  .section8 {
    width: 100%;
    height: auto;
    .font-container {
      padding: 80px 0 27px 0;
      display: block;
      * {
        width: 100%;
      }
    }
    .block1-content {
      width: 100%;
      padding: 0 50px;
    }
    .block1-group {
      width: 100%;
      .block1-item {
        display: inline-block;
        width: 180px;
        margin-right: 50px;
        padding-top: 50px;
        img {
          width: 180px;
          height: 180px;
          border-radius: 500px;
          overflow: hidden;
        }
        &:nth-of-type(3n) {
          margin-right: 0;
        }
        .content {
          text-align: center;
          padding-top: 20px;
        }
      }
    }
  }
  .section6 {
    width: 100%;
    height: auto;
    .panel {
      padding: 50px;
      text-align: center;
    }
    .font-container {
      display: block;
      * {
        text-align: center;
      }
    }
    .font-content {
      padding: 20px 0 30px 0;
    }
    .section6-font {
      text-align: left;
      width: 580px;
      min-height: 60px;
      margin-bottom: 40px;
    }
    .block1-group {
      width: 100%;
      overflow: hidden;
      .block1-item {
        width: 140px;
        display: inline-block;
        img {
          width: 100%;
        }
        &:nth-of-type(4n) {
          margin-right: 0;
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
  .support {
    height: 70px;
    line-height: 70px;
    text-align: center;
  }
}
</style>
