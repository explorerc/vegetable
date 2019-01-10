<template>
  <transition name='top-bottom'>
    <div class="v-send-box-bg" v-show='chatOpen' >
      <div class="send-box clearfix" :class='{"open":sendOpen}'
           id="sendBox">
        <div class="top">
          <span @click="cancelClick"
                class="cancel-btn fl">取消</span>
          <span class="v-title">聊天</span>
          <span @click='send'class='send-btn fr'>发送</span>
        </div>
        <div class="bottom clearfix">
            <com-input :value.sync="value"
                       :placeholder="chatPlaceholder"
                       :max-length="140"
                       class='inp'
                       :isCharacter=true
                       type="textarea">
            </com-input>
          <div class="v-emoji">
            <i class='iconfont icon-biaoqing'
               @click.stop='changeFace'
               title='表情'></i>
            <div class="face-box"
                 @click.stop=''
                 v-if="faceOpen">
              <img :src="`//cnstatic01.e.vhall.com/static/img/arclist/Expression_${index+1}@2x.png`"
                   @click.stop="inFace(index)"
                   v-for="(item,index) in faceArr"
                   :key="index">
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import EventBus from 'src/utils/eventBus.js'
import faceJs from './face.js'
export default {
  data () {
    return {
      chatOpen: false,
      sendOpen: false,
      value: '',
      faceOpen: false,
      chatPlaceholder: '请输入聊天内容', /* 表情数组 */
      faceArr: faceJs.faceArr
    }
  },
  mounted () {
    EventBus.$on('chatOpen', (openFace) => {
      this.chatOpen = true
      setTimeout(() => {
        this.sendOpen = true
        document.getElementsByClassName('inp')[0].children[0].focus()
        if (openFace) {
          this.faceOpen = true
        } else {
          this.faceOpen = false
        }
      }, 50)
    })
    EventBus.$on('chatClose', () => {
      this.sendOpen = false
    })
  },
  methods: {
    changeFace () {
      this.faceOpen = !this.faceOpen
    },
    cancelClick () {
      this.chatOpen = false
      this.sendOpen = false
    },
    send () {
      EventBus.$emit('sendMsg', {
        content: this.value
      })
      this.cancelClick()
      this.value = ''
      document.getElementsByClassName('inp')[0].children[0].blur()
    },
    /* 选择表情 */
    inFace (index) {
      for (let key in this.faceArr[index]) {
        this.value += key
      }
      this.faceOpen = !this.faceOpen
      document.getElementsByClassName('inp')[0].children[0].focus()
    }
  }
}
</script>

<style lang='scss' scoped>
.v-send-box-bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9998;
  // transition: all 0.3s ease-in-out;
  .send-box {
    margin: 0 auto;
    width: 620px;
    height: 440px;
    position: absolute;
    top: 130px;
    left: 50%;
    margin-left: -310px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    z-index: 9999;
    // transition: all 0.3s ease-in-out;
    // &.open {
    //   transition: all 0.3s ease-in-out;
    //   top: 130px;
    // }
    .top {
      width: 100%;
      height: 80px;
      line-height: 80px;
      background: #efefef;
      padding: 0 36px;
      text-align: center;

      .mute-all {
        position: absolute;
        cursor: pointer;
        right: 60px;
        top: 50%;
        margin-top: -10px;
        width: 20px;
        height: 20px;
        border-radius: 100px;
        background: url('~assets/image/broadcast.png') no-repeat center;
        background-size: contain;

        &:hover {
          background-image: url('~assets/image/broadcast-hover.png');
        }
      }

      .send-btn {
        color: #4b5afe;
        font-size: 28px;
        cursor: pointer;
      }

      .cancel-btn {
        color: #555555;
        font-size: 28px;
        cursor: pointer;
      }

      .v-title {
        color: #222222;
        font-size: 32px;
      }
    }
    .bottom {
      width: 100%;
      height: 360px;
      left: 50%;

      .mute-box {
        cursor: not-allowed;
        line-height: 50px;
        text-align: center;
        width: 100%;
        height: 100%;
      }

      .v-emoji {
        position: absolute;
        left: 30px;
        bottom: 20px;

        .icon-biaoqing {
          vertical-align: middle;
          cursor: pointer;
          display: inline-block;
          color: #888;
          font-size: 36px;
        }

        .icon-swap {
          position: absolute;
          cursor: pointer;
          right: 16px;
          top: 50%;
          margin-top: -10px;
          width: 20px;
          height: 20px;
          border-radius: 100px;
          background: url('~assets/image/broadcast.png') no-repeat center;
          background-size: contain;

          &:hover {
            background-image: url('~assets/image/broadcast-hover.png');
          }
        }

        .face-box {
          -webkit-overflow-scrolling: touch;
          position: absolute;
          bottom: 70px;
          left: -22px;
          width: 620px;
          height: 270px;
          background: #fff;
          z-index: 10;
          overflow-y: scroll;
          padding-top: 10px;
          img {
            width: 48px;
            height: 48px;
            margin: 6px;
            float: left;
            cursor: pointer;
          }
        }
      }
      .inp /deep/ {
        width: 100%;
        height: 100%;
        padding: 28px 30px 100px;
        border: none;
        textarea {
          border: none;
        }
        .limit {
          bottom: 20px;
          z-index: 9;
          font-size: 28px;
          right: 30px;
          color: #555;
        }
      }
    }
  }
}
</style>
