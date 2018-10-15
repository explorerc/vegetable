<template>
  <div class="share-container" v-if="value.enable">
    <div v-if="showDialog" class="_dialog-container" @click="closeDialog">
      <div class="_dialog" @click.stop="">
        <div class="_dialog-header">分享到微信<i class="iconfont icon-close" @click="closeDialog"></i></div>
        <div class="_dialog-content">
          <div class="title">{{share.title}}</div>
          <div  class="des">{{share.des}}</div>
          <div  class="qr">
            <img :src="`http://aliqr.e.vhall.com/qr.png?t=${this.share.link}`" >
          </div>
          <div  class="ps">使用微信扫一扫</div>
        </div>
      </div>
    </div>
    <div ref="target" class="share" >
      <ul class="share-group">
        <li v-if="value.wx">
          <a class="share-item" @click="doWX">
            <div class="icon wx"></div>
            <span>微信好友</span>
          </a>
        </li>
        <li v-if="value.wxSpace">
          <a class="share-item" @click="doWXSpace">
            <div class="icon wx-space"></div>
            <span>微信朋友圈</span>
          </a>
        </li>
        <li v-if="value.qq">
          <a class="share-item" @click="doQQ">
            <div class="icon qq"></div>
            <span>QQ好友</span>
          </a>
        </li>
        <li v-if="value.qqSpace">
          <a class="share-item" @click="doQQSpace">
            <div class="icon qq-space"></div>
            <span>QQ空间</span>
          </a>
        </li>
        <li v-if="value.sina">
          <a class="share-item" @click="doSina">
            <div class="icon sina"></div>
            <span>新浪微博</span>
          </a>
        </li>
        <li v-if="value.copy">
          <a class="share-item" @click="doCopy">
            <div class="icon copy"></div>
            <span>复制链接</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import editMixin from './mixin'
export default {
  mixins: [editMixin],
  props: {
    share: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      showDialog: false,
      url: 'http://localhost:2333/template',
      sina: true
    }
  },
  methods: {
    doSina () {
      window.open(`
      http://v.t.sina.com.cn/share/share.php?
      url=${encodeURIComponent(this.share.link)}
      &title=${encodeURIComponent(this.share.des)}
      &pic=${encodeURIComponent(this.share.imgUrl)}
      &appkey=&searchPic=false
      `)
    },
    doQQSpace () {
      window.open(`
      http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?desc=${encodeURIComponent(this.share.des)}&url=${encodeURIComponent(this.share.link)}&src%3Dsharemodclk131212&pics=${encodeURIComponent(this.share.imgUrl)}
      `)
    },
    doQQ () {
      window.open(`
      http://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(this.share.link)}&title=${encodeURIComponent(this.share.title)}&desc=${encodeURIComponent(this.share.des)}&pics=${encodeURIComponent(this.share.imgUrl)}
      `)
    },
    doWXSpace () {
      this.showDialog = true
    },
    doWX () {
      this.showDialog = true
    },
    doCopy () {
      this.url.copyClipboard()
      this.$toast({
        'content': '复制成功',
        'position': 'center'
      })
    },
    closeDialog () {
      this.showDialog = false
    }
  }
}
</script>

<style scoped lang="scss">
.share-container /deep/ {
  position: relative;
  ._dialog-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 10;
    ._dialog {
      width: 600px;
      height: 400px;
      background: #fff;
      border: 1px solid #ccc;
      color: #666;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      ._dialog-header {
        padding-left: 20px;
        height: 38px;
        line-height: 40px;
        font-size: 14px;
        background-color: #faf9f9;
        border-bottom: 1px solid #dadada;
        text-align: left;
        .icon-close {
          cursor: pointer;
          float: right;
          margin-right: 15px;
        }
      }
      ._dialog-content {
        padding-top: 10px;
        .title {
          font-size: 14px;
          color: #518900;
          text-align: center;
          line-height: 30px;
        }
        .des {
          font-size: 12px;
          color: #999;
          text-align: center;
          line-height: 30px;
          padding-bottom: 25px;
        }
        .qr {
          display: inline-block;
          border-radius: 6px;
          padding: 5px;
          border: 5px #bbda80 solid;
          img {
            width: 162px;
            height: 162px;
          }
        }
        .ps {
          padding-top: 5px;
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
  .share {
    width: auto;
    display: inline-block;
    position: relative;
    .share-group {
      font-size: 0;
      li {
        display: inline-block;
        font-size: 14px;
        height: 100%;
        width: 90px;
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
        .share-item {
          display: block;
          width: 100%;
          height: 100%;
          cursor: pointer;
          .icon {
            width: 90px;
            height: 90px;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            margin-bottom: 6px;
            &.sina {
              background-image: url('~assets/image/sina.png');
            }
            &.qq-space {
              background-image: url('~assets/image/qq_space.png');
            }
            &.qq {
              background-image: url('~assets/image/qq.png');
            }
            &.wx-space {
              background-image: url('~assets/image/wx_space.png');
            }
            &.wx {
              background-image: url('~assets/image/wx.png');
            }
            &.copy {
              background-image: url('~assets/image/copy_link.png');
            }
          }
          span {
            display: inline-block;
          }
        }
      }
    }
  }
  .edit-container {
    .edit-share-group {
      margin-top: 20px;
      li {
        display: block;
        margin-bottom: 5px;
        .label {
          display: inline-block;
          width: 80px;
          text-align: left;
        }
      }
    }
  }
}
</style>
