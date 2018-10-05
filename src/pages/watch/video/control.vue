<template>
  <div class="control-box">
    <!--<div class="time-box">-->
    <!--<span>{{currentDate}}</span>/<span>{{allDate}}</span>-->
    <!--</div>-->
    <div class="auto-box"
         style="display:flex;">
      <div class="mode-item fl">
        <i v-if="!isPlay"
           @click="playEvent(true)"
           class="iconfont icon-bofang_icon"
           title="暂停"></i>
        <i v-else
           @click="playEvent(false)"
           class="iconfont icon-zanting_icon"
           title="播放"></i>
      </div>
      <div class="mode-item time-box">
        <span>{{currentDate}}</span>
        <span>/{{allDate}}</span>
      </div>
      <div class="mode-item"
           style="flex:1;">
        <div class="progress-box">
          <el-slider v-model="progress"
                     :format-tooltip="formatTooltip"
                     @change="changeVal"></el-slider>
        </div>
      </div>
      <div class="mode-item fr"
           @mouseover.stop="overEvent"
           @mouseout.stop="outEvent">
        <span class="quality-info">画质</span>
        <transition name="fade">
          <div class="qualitys-box"
               v-if="showQualityBlock">
            <span :class="{'quality-item':true,active:selectQuality==idx}"
                  v-for="(item,idx) in qualitys"
                  @click="selectQuality=idx">{{item}}</span>
          </div>
        </transition>
      </div>
      <div class="mode-item fr">
        <i @click="fullScreeEvent"
           class="iconfont icon-zuidahua_icon"></i>
      </div>
      <!-- <div class="mode-item fr" @click.stop="fullBrowser">
        <i v-if="isFullBrowser" class="iconfont icon-wangyequanping_tuichu"></i>
        <i v-else class="iconfont icon-wangyequanping"></i>
      </div> -->
      <!-- <div class="mode-item fr">
        <i v-if="mute" @click.stop="muteEvent" class="iconfont icon-yangshengqiguan"></i>
        <i v-else @click.stop="muteEvent" class="iconfont icon-yangshengqikai"></i>
        <div class="mute-block">
          <el-slider
            v-model="volumeSize"
            height="100%">
          </el-slider>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
const controlTypes = {
  mute: 'mute',
  play: 'play',
  volumeSize: 'volumeSize',
  fullScree: 'fullScree',
  selectQuality: 'selectQuality',
  fullBrowser: 'fullBrowser',
  progress: 'progress'
}
const controlTypeValues = {
  mute: '声音控制',
  play: '播放控制',
  volumeSize: '声音大小',
  fullScree: '全屏控制',
  selectQuality: '画质量',
  fullBrowser: '浏览器-全屏',
  progress: '播放进度'
}
export default {
  name: 'control',
  data () {
    return {
      mute: false, // 是否禁音
      isPlay: true,
      volumeSize: 100,
      fullScree: false,
      isFullBrowser: false,
      showQualityBlock: false,
      selectQuality: 0,
      current: 0,
      progress: 0
    }
  },
  computed: {
    allDate () {
      return this.formatDate(this.totalTime)
    },
    currentDate () {
      return this.formatDate(this.currentTime)
    },
    rate () {
      return parseInt(100 * this.currentTime / this.totalTime)
    }
  },
  props: {
    currentTime: {
      type: Number,
      default: 0
    },
    totalTime: {
      type: Number,
      default: 1000
    },
    qualitys: {
      type: Array,
      default: ['same']
    }
  },
  watch: {
    currentTime: {
      handler (newVal) {
        this.current = newVal
      },
      immediate: true
    },
    rate: {
      handler (newVal) {
        this.progress = newVal
      },
      immediate: true
    },
    volumeSize (newVal) {
      this.changeControl(controlTypes.volumeSize, newVal)
    }
  },
  methods: {
    changeControl (type, value) {
      this.$emit('control', {
        type: type,
        value: value,
        msg: controlTypeValues[type]
      })
    },
    formatTooltip (val) {
      return val + '%'
    },
    changeVal () {
      // this.$emit('change', this.progress)
      this.changeControl(controlTypes.progress, this.progress)
    },
    muteEvent () {
      this.mute = !this.mute
      // this.$emit('mute', this.mute)
      this.changeControl(controlTypes.mute, this.mute)
    },
    overEvent () {
      this.showQualityBlock = true
    },
    outEvent () {
      this.showQualityBlock = false
    },
    playEvent (type) {
      this.isPlay = type
      this.changeControl(controlTypes.play, this.isPlay)
    },
    fullScreeEvent () {
      alert('请把手机横评放置')
    },
    fullBrowser () {
      this.isFullBrowser = !this.isFullBrowser
      this.changeControl(controlTypes.fullBrowser, this.isFullBrowser)
    },
    formatDate (cTime) {
      let h = ((cTime / 3600 >> 0) + '')
      let m = ((cTime / 60 % 60 >> 0) + '').padStart(2, 0)
      let s = ((cTime % 60 >> 0) + '').padStart(2, 0)
      return h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`
    }
  }
}
</script>

<style scoped lang="scss">
.control-box {
  position: relative;
  width: 100%;
  height: 80px;
  line-height: 80px;
  animation: control-animation-hide 1s linear;
  background-color: rgba(0, 0, 0, 0.75);
  text-align: left;
  color: #fff;
  .time-box {
    display: inline-block;
    font-size: 14px;
    margin-left: -10px;
    span {
      color: #ccc;
      &:last-child {
        opacity: 0.8;
      }
    }
  }
  .auto-box {
    margin: 24px 10px;
    .mode-item {
      position: relative;
      display: inline-block;
      padding: 0 10px;
      line-height: 38px;
      text-align: center;
      font-size: 24px;
      cursor: pointer;
      color: #fff;
      &.time-box {
        margin-right: 10px;
      }
      .iconfont {
        font-size: 14px;
        color: #ccc;
      }
      .el-slider {
        left: 0;
        top: 0;
        width: 100%;
      }
      .mute-block {
        display: inline-block;
        width: 90px;
        vertical-align: middle;
        margin-left: 5px;
        /deep/ {
          .el-slider__bar {
            background-color: #ffd021;
            height: 4px;
          }
          .el-slider__button {
            border: none;
            background-color: #fff;
            width: 8px;
            height: 8px;
            box-shadow: 0 0 10px #fff;
          }
          .el-slider__runway {
            border-radius: 2px;
            height: 4px;
            margin: 4px 0;
            background-color: rgba(255, 255, 255, 0.5);
          }
          .el-slider__button-wrapper {
            top: -18px;
          }
        }
      }
      .quality-info {
        display: inline-block;
        line-height: 1;
        padding: 5px 12px;
        background-color: #222;
        border-radius: 15px;
        opacity: 0.9;
        font-size: 28px;
      }
      .qualitys-box {
        position: absolute;
        top: 0px;
        right: 5px;
        width: 60px;
        padding: 5px 0;
        text-align: center;
        transform: translateY(-100%);
        background-color: rgba(20, 20, 20, 0.5);
        border-bottom: 4px solid rgba(255, 255, 255, 0.5);
        .quality-item {
          display: block;
          line-height: 30px;
          &:hover {
            cursor: pointer;
            opacity: 0.9;
            color: #5d6afe;
          }
          &.active {
            color: #ffd021;
          }
        }
      }
    }
  }
  .progress-box {
    /deep/ {
      width: 100%;
      .el-slider__bar {
        background-color: #ffd021;
        height: 4px;
      }
      .el-slider__button {
        background-color: #ffd021;
        width: 19px;
        height: 19px;
        border-radius: 50%;
        position: absolute;
        top: 12px;
        left: 16px;
      }
      .el-slider__runway {
        border-radius: 1px;
        height: 4px;
        margin: 4px 0;
        background-color: rgba(255, 255, 255, 0.5);
      }
      .el-slider__button-wrapper {
        position: relative;
        top: -18px;
        transition: opacity 0.2s;
        &:before {
          position: absolute;
          content: '';
          display: block;
          width: 32px;
          height: 32px;
          top: 6px;
          left: 10px;
          border-radius: 50%;
          background-color: rgba(255, 208, 33, 0.3);
        }
      }
    }
  }
  .iconfont {
    vertical-align: middle;
    font-size: 20px;
    color: #f5f5f5;
    &:hover {
      cursor: pointer;
      color: rgb(255, 208, 33);
    }
  }
}
</style>
