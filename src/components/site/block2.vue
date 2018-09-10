<template>
  <div class="block2-container" v-if="value.enable">
    <div ref="target" class="block2-content">
      <el-carousel trigger="click" :autoplay="autoplay" :height="height" :interval="4000">
        <el-carousel-item v-for="(item,index) in value.data" :key="'block2_item_'+index">
          <a target="_black" :href="item.link | voidLink">
            <div class="block2-item" :style="{'background-image':`url(${host+item.img})`}" >
              <div class="block2-item-content" v-html="item.content"></div>
              <!-- <com-font :edit="edit" v-model="item.content"></com-font> -->
            </div>
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <com-edit ref="editTarget" class="block2-edit" @show="showHandle" @hide="hideHandle">
      <com-button class="add-btn" @click="addBlock">添加图块</com-button>
      <ul class="block2-edit-group">
        <li v-for="(item,index) in value.data" :key="'block2_edit_item'+index">
          <div class="block2-title" @click="titleClick(index)">{{`图块${index+1}`}}<i @click.stop="removeClick(index)"class="iconfont icon-close"></i></div>
          <div class="block2-content" :class="{active:active===index}">
            <div>
              <com-upload
      accept="png|jpg|jpeg|bmp|gif"
      uploadTxt="上传"
      actionUrl="/api/upload/image"
      inputName="file"
      :fileSize="2048"
      :exParams="{}"
      @load="uploadLoad($event,index)"
      >
      </com-upload>
            </div>
            <div>
               <com-editer height="400" class="font-editer" v-model="item.content" ></com-editer>
            </div>
            <div>
               <com-input placeholder="按钮链接" v-model="item.link"></com-input>
            </div>
          </div>
        </li>
      </ul>
    </com-edit>
  </div>
</template>

<script>
import ComEditer from 'src/components/ve-html5-editer'
import ComFont from 'components/site/font'
import editMixin from './mixin'
import ComEdit from './edit'
export default {
  mixins: [editMixin],
  components: {
    ComEdit, ComEditer, ComFont
  },
  props: {
    min: {
      type: Number,
      default: 2
    },
    max: {
      type: Number,
      default: 4
    },
    height: {
      type: String,
      default: '150px'
    }
  },
  data () {
    return {
      active: -1,
      host: process.env.IMGHOST + '/',
      autoplay: true
    }
  },
  methods: {
    addBlock () {
      let len = this.value.data.length
      if (len < 8) {
        this.value.data.push({
          content: ``,
          img: ''
        })
        this.active = len
      }
    },
    titleClick (index) {
      if (this.active !== index) {
        this.active = index
      } else {
        this.active = -1
      }
    },
    removeClick (index) {
      if (this.value.data.length > 2) {
        this.value.data.splice(index, 1)
      }
    },
    uploadLoad (data, index) {
      let ret = JSON.parse(data.data)
      if (ret.code === 200) {
        this.value.data[index].img = `${ret.data.name}`
      }
    },
    hideHandle () {
      this.autoplay = true
    },
    showHandle (rect) {
      this.autoplay = false
    }
  }
}
</script>

<style lang="scss" scoped>
.block2-container /deep/ {
  position: relative;
  .block2-content {
    width: 100%;
    display: inline-block;
    position: relative;
    .block2-item {
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      background-origin: border-box;
      background-repeat: no-repeat;
    }
  }
  .block2-edit {
    padding: 20px 5px;
    .add-btn {
      width: 100%;
      margin-bottom: 10px;
    }
    .block2-edit-group {
      border: 1px solid #dadada;
      border-bottom: 0;
      font-size: 14px;
    }
    .block2-title {
      cursor: pointer;
      width: 100%;
      height: 35px;
      line-height: 35px;
      text-align: center;
      font-size: 14px;
      border-bottom: 1px solid #dadada;
      .icon-close {
        float: right;
        padding-right: 10px;
      }
    }
    .block2-content {
      display: none;
      overflow: hidden;
      transition: all 0.3s;
      &.active {
        border-bottom: 1px solid #dadada;
        padding: 20px 10px;
        display: block;
      }
      .com-input {
        width: 100%;
        margin-bottom: 20px;
      }
    }
    .html-editer {
      min-width: auto;
    }
    .vue-html5-editor {
      li {
        padding: 0 6px;
      }
      li[title='列表'],
      li[title='图片'],
      li[title='全屏'] {
        display: none;
      }
      .content {
        background-color: #dadada;
      }
    }
  }
}
</style>
