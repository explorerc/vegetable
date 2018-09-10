<template>
  <div class="panel-container" v-if="value.enable">
    <div ref="target" class="panel" >
      <div class="media-container" v-if="value.bgType==='video'" >
        <video  autoplay loop muted ></video>
      </div>
      <slot></slot>
    </div>
    <com-edit ref="editTarget">
      <com-tabs :value="value.bgType">
       <com-tab index="color" >
         <div slot="label"><el-radio v-model="value.bgType" label="color">显示颜色</el-radio></div>
         <div>
           <el-color-picker show-alpha v-model="value.color"></el-color-picker>
         </div>
       </com-tab>
       <com-tab index="img" >
          <div slot="label"><el-radio v-model="value.bgType" label="img">显示图片</el-radio></div>
          <div>
            <com-upload
            accept="png|jpg|jpeg|bmp|gif"
            uploadTxt="上传"
            actionUrl="/api/upload/image"
            inputName="file"
            :fileSize="2048"
            :exParams="{}"
            @load="uploadLoad"
            >
            </com-upload>
          </div>
       </com-tab>
       <com-tab index="video" >
          <div slot="label"><el-radio v-model="value.bgType" label="video">显示视频</el-radio></div>
          <div>
            <com-tabs :value="value.videoType" @change="">
              <com-tab index="upload" >
                <div slot="label"><el-radio v-model="value.videoType" label="upload">上传视频</el-radio></div>
                <div>
                  <com-upload
                  accept="mp4"
                  uploadTxt="上传"
                  actionUrl="/api/upload/video"
                  inputName="file"
                  :fileSize="10240"
                  :exParams="{}"
                  @progress="progress"
                  @load="uploadLoad"
                  >
                  </com-upload>
                  <span>进度{{pro}}</span>
                </div>
              </com-tab>
              <com-tab index="url" >
                <div slot="label"><el-radio v-model="value.videoType" label="url">引用视频</el-radio></div>
                <div>
                  <com-input placeholder="视频url" v-model="value.video"></com-input>
                </div>
              </com-tab>
           </com-tabs>
         </div>
       </com-tab>
      </com-tabs>
    </com-edit>
  </div>
</template>

<script>
import editMixin from './mixin'
import ComEdit from './edit'

export default {
  mixins: [editMixin],
  components: {
    ComEdit
  },
  data () {
    return {
      pro: '0%',
      host: process.env.IMGHOST + '/'
    }
  },
  mounted () {
    this.analysisData(this.value)
  },
  watch: {
    value: {
      handler (data) {
        if (data.bgType) {
          if (!this.value.color) {
            this.value.color = 'rgba(0, 0, 0, 1)'
          }
          this.$nextTick(() => {
            this.analysisData(this.value)
          })
        }
      },
      deep: true
    },
    color (value) {
      this.$refs.target.style.cssText = `background-color:${value}`
    },
    img (value) {
      this.$refs.target.style.cssText = `background-image:url(${value})`
    }
  },
  methods: {
    analysisData (data) {
      if (!this.$refs.target) return
      if (data.bgType === 'color') {
        this.$refs.target.style.cssText = `background-color:${data.color}`
      } else if (data.bgType === 'img') {
        this.$refs.target.style.cssText = `background-image:url(${this.host + data.img})`
      } else if (data.bgType === 'video' && data.video) {
        if (data.videoType === 'upload') {
          if (!(/^(http|https|<iframe):\/\//.test(data.video))) {
            this.$refs.target.querySelector('.media-container video').setAttribute('src', `${this.host + data.video}`)
          }
        } else {
          if (/^(http|https):\/\//.test(data.video)) {
            this.$refs.target.querySelector('.media-container video').setAttribute('src', `${data.video}`)
          }
        }
      }
    },
    progress (data) {
      this.pro = data.percent
    },
    uploadLoad (data) {
      let ret = JSON.parse(data.data)
      if (ret.code === 200) {
        if (this.value.bgType === 'img') {
          this.value.img = `${ret.data.name}`
        } else {
          this.value.video = `${ret.data.name}`
        }
        this.analysisData(this.value)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.panel-container /deep/ {
  position: relative;
  .panel {
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-origin: border-box;
    .media-container {
      height: 100%;
      overflow: hidden;
      video {
        position: absolute;
        top: 0;
        width: 100%;
      }
      iframe {
        video {
          object-fit: cover;
        }
      }
    }
  }
}
</style>
