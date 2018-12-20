<template>
  <div class="template1-container" :class="{isEdit:editAble}">
    <com-panel class="section1" :edit="editAble" v-model="data.section1Data.panel">
      <com-logo class="logo" :edit="editAble" v-model="data.section1Data.logo"></com-logo>
      <span class="iconfont" :class="[{'icon-nav-open':!menuOpen},{'icon-close':menuOpen}]" @click="()=>{menuOpen=!menuOpen}"></span>
      <com-nav class="nav" v-show="menuOpen" :edit="editAble" v-model="data.section1Data.nav"></com-nav>
    </com-panel>
    <div class="section2" :edit="editAble" >
      <com-block2 :edit="editAble" :max="3" v-model="data.section2Data.block2">
      </com-block2>
    </div>
    <div class="section3" :edit="editAble" v-model="data.section3Data.panel">
      <com-block1 :edit="editAble" :max="3" v-model="data.section3Data.block1"></com-block1>
    </div>
    <com-panel class="section4" :edit="editAble" v-model="data.section4Data.panel">
      <div class="bg"></div>
      <com-font :edit="editAble" v-model="data.section4Data.font"></com-font>
      <com-video :edit="editAble" v-model="data.section4Data.video"></com-video>
    </com-panel>
    <com-panel class="section5" :edit="editAble" v-model="data.section5Data.panel">
      <com-font :edit="editAble" v-model="data.section5Data.font"></com-font>
      <com-block1 :edit="editAble" :max="3" v-model="data.section5Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section6" :edit="editAble" v-model="data.section6Data.panel">
      <com-font :edit="editAble" v-model="data.section6Data.font"></com-font>
      <com-block1 :edit="editAble" :max="3" v-model="data.section6Data.block1"></com-block1>
    </com-panel>
    <com-panel class="section7" :edit="editAble" v-model="data.section7Data.panel">
      <com-font :edit="editAble" v-model="data.section7Data.font"></com-font>
        <com-btn class="btn" :edit="editAble" v-model="data.section7Data.btn"></com-btn>
    </com-panel>
    <div class="support">微吼知客提供技术支持</div>
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
      console.log(this.data)
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
  -webkit-overflow-scrolling: touch;
  .panel-container {
    i {
      font-style: italic;
      &.iconfont {
        font-style: normal;
      }
    }
  }
  overflow: hidden;
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
    position: relative;
    z-index: 10;
    .iconfont {
      cursor: pointer;
      float: right;
      margin-right: 30px;
      margin-top: 30px;
      color: white;
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
      background-color: #222222;
      .nav-group {
        font-size: 0;
        line-height: 58px;
        border-bottom: 1px solid #555555;
        .nav-item {
          display: block;
          height: 100px;
          line-height: 100px;
          font-size: 30px;
          text-align: center;
          border-top: 1px solid #555555;
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
    position: relative;
    z-index: 2;
    .block2-content {
      height: 930px;
      .el-carousel {
        height: 100%;
        .el-carousel__container {
          height: 100% !important;
          .el-carousel__item {
            &.top {
              .content {
                position: absolute;
                top: 280px;
                left: 180px;
                right: 58px;
                .btn-container {
                  width: 260px;
                  height: 60px;
                  padding: 0;
                  font-size: 16px;
                  border: 1px solid rgba(255, 255, 255, 1);
                  background-color: transparent;
                  margin-top: 40px;
                  .com-button {
                    padding: 0;
                    line-height: 56px;
                    width: 100%;
                    height: 100%;
                  }
                }
              }
            }
          }
          .left-area {
            width: 632px;
            height: 480px;
            position: absolute;
            top: 180px;
            right: 0;
          }
        }
      }
    }
  }
  .section3 {
    width: 100%;
    height: auto;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 100px;
    .block1-group {
      .block1-item {
        max-width: 1280px;
        &.left {
          .content {
            padding: 50px 60px 0;
          }
        }
        img {
          width: 560px;
          height: 380px;
          float: none !important;
          margin: auto;
        }
      }
    }
  }
  .section4 {
    width: 100%;
    height: 480px;
    text-align: center;
    overflow: hidden;
    .bg {
      position: absolute;
      width: 400px;
      left: 54%;
      height: 2000px;
      top: -538px;
      background-color: white;
      transform: rotateZ(-38deg);
    }
    .panel {
      padding-bottom: 0;
    }
    .font-container {
      margin-top: 20px;
      text-align: left;
      width: 650px;
      min-height: 70px;
    }
    .video-container {
      width: 650px;
      height: 366px;
      margin: auto;
      .video-content {
        height: 100%;
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
      margin-top: 100px;
      text-align: left;
      width: 650px;
      min-height: 85px;
    }
    .block1-group {
      .block1-item {
        width: 650px;
        height: 474px;
        margin-right: 0;
        margin-bottom: 34px;
        img {
          width: 100%;
          height: 100%;
        }
        .block1-bg {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.3);
          &::before {
            content: '';
            display: block;
            position: absolute;
            bottom: 20px;
            top: 20px;
            left: 20px;
            right: 20px;
            border: 1px solid white;
          }
        }
        .btn-container {
          width: 100px;
          height: 34px;
          font-size: 14px;
          position: absolute;
          bottom: 150px;
          left: 110px;
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
      margin-top: 80px;
      text-align: left;
      width: 650px;
      min-height: 95px;
    }
    .block1-group {
      width: 750px;
      .block1-item {
        width: 120px;
        height: 120px;
        margin-right: 126px;
        margin-bottom: 72px;
        &:nth-of-type(3) {
          margin-right: 0;
        }
        img {
          width: 120px;
          display: block;
          margin: auto;
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
      width: 650px;
      min-height: 100px;
    }
    .btn {
      display: block;
      margin-top: 24px;
      margin-bottom: 40px;
      .btn-content {
        display: inline-block;
        position: relative;
      }
      .com-button {
        min-width: 300px;
        height: 60px;
        font-size: 28px;
        border: 1px solid white;
      }
    }
  }
}
</style>
