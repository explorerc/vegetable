<template>
  <div class="video-container" v-if="value.enable">
    <div ref="target" class="video-content">
      <div v-if="value.videoType==='upload'" id="myVideo" class="video-wrap"></div>
      <div v-if="value.videoType==='url'" v-html="value.url" class="iframe-wrap"></div>
    </div>
    <com-edit ref="editTarget" class="video-edit-content">
      <com-tabs :value="value.videoType" @change="checkInit">
        <com-tab index="upload" >
          <div slot="label"><el-radio v-model="value.videoType" label="upload">上传视频</el-radio></div>
          <div class="upload-field">
            <com-button @click="doUpload">上传视频</com-button>
            <el-progress v-if="percentVideo" type="circle" :percentage="percentVideo"></el-progress>
            <span>{{uploadErrorMsg}}</span>
            <div class="hide">
              <input type="file" ref="upload" id="upload"/>
              <input type="text" id='rename'>
              <button ref="confirmUpload" id="confirmUpload" class="saveBtn"></button>
            </div>
          </div>
        </com-tab>
        <com-tab index="url" >
          <div slot="label"><el-radio v-model="value.videoType" label="url">引用视频</el-radio></div>
          <div>
            <com-input class="link-input" :rows="6" type="textarea" placeholder="视频url" v-model="value.url"></com-input>
          </div>
        </com-tab>
      </com-tabs>
    </com-edit>
  </div>
</template>

<script>
import editMixin from './mixin'
import ComEdit from './edit'
import LiveHttp from 'src/api/activity-manger'
export default {
  mixins: [editMixin],
  components: {
    ComEdit
  },
  data () {
    return {
      vhallParams: {},
      percentVideo: 0,
      uploadErrorMsg: ''
    }
  },
  methods: {
    doUpload () {
      this.$refs.upload.click()
    },
    initVhallUpload () {
      window.vhallCloudDemandSDK('#upload', {
        params: {
          confirmBtn: '#confirmUpload', // 保存按钮的ID
          name: '#rename',
          sign: this.vhallParams.sign,
          signed_at: this.vhallParams.signedAt,
          app_id: this.vhallParams.appId
        },
        beforeUpload: (file) => {
          if (file.type !== 'video/mp4') {
            this.uploadErrorMsg = '不支持该视频格式，请上传mp4格式视频'
            return false
          } else if (file.size / 1024 / 1024 > this.videoSize) {
            this.uploadErrorMsg = '视频太大，请不要大于200M'
            return false
          }
          this.uploadErrorMsg = ''
          this.percentVideo = 0
          return true
        },
        progress: (percent) => {
          this.percentVideo = parseFloat(percent.replace('%', ''))
        },
        uploadSuccess: () => {
          this.$refs.confirmUpload.click()
        },
        saveSuccess: (res) => {
          this.value.recordId = res.record_id
          setTimeout(() => {
            this.initVideo()
          }, 20000)
        },
        error: (msg, file, e) => {
          this.uploadErrorMsg = msg
        }
      })
    },
    checkInit (type) {
      if (type === 'upload' && this.value.recordId) {
        this.initVideo()
      }
    },
    initVideo () {
      window.Vhall.ready(() => {
        window.VhallPlayer.init({
          recordId: this.value.recordId, // 回放Id，点播必填，直播不写
          type: 'vod', // 播放类型,必填，live 直播, vod 为点播
          videoNode: 'myVideo', // 推流视频回显节点id，必填
          complete: function () {
            // window.VhallPlayer.play()
          },
          fail: (msg) => {
            this.uploadErrorMsg = `${msg}...,稍后刷新页面即可看到预览视频`
          }
        })
      })
      /* 初始化配置 */
      window.Vhall.config({
        appId: this.vhallParams.appId, // 应用 ID ,必填
        accountId: this.vhallParams.accountId, // 第三方用户唯一标识,必填
        token: this.vhallParams.token // token必填
      })
    }
  },
  mounted () {
    LiveHttp.queryPassSdkInfo().then((res) => {
      this.vhallParams = res.data
      /* $nextTick保证dom被渲染之后进行paas插件初始化 */
      this.$nextTick(() => {
        // 初始化pass上传插件
        this.initVhallUpload()
        if (this.value.videoType === 'upload' && this.value.recordId) {
          this.$nextTick(() => {
            this.initVideo()
          })
        }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.video-container /deep/ {
  position: relative;
  .video-content {
    position: relative;
    .video-wrap {
      height: 100%;
    }
    .iframe-wrap {
      height: 100%;
    }
    iframe {
      width: 100%;
      height: 100%;
    }
  }
  .video-edit-content {
    .upload-field {
    }
    .link-input {
      width: 400px;
    }
  }
}
</style>
