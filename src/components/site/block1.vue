<template>
  <div class="block1-container" v-if="value.enable">
    <div ref="target" class="block1-content">
      <ul class="block1-group" :class="widthClass">
        <li class="block1-item" v-for="(item,index) in value.list" :key="'block1_item'+index">
          <a target="_black" :href="item.link | voidLink">
            <img v-if="item.img" class="img" :src="host+item.img">
            <div class="content" :class="{top:value.type==='top'}" v-html="item.content">
            </div>
            <!-- <com-font :class="{content:true,top:value.type==='top'}" :edit="edit" v-model="item.content"></com-font> -->
            <com-btn v-if="value.showBtn" :edit="edit" v-model="value.btn"></com-btn>
          </a>
        </li>
      </ul>
    </div>
    <com-edit ref="editTarget" class="block1-edit">
      <com-button class="add-btn" @click="addBlock">添加图块</com-button>
      <div>
        <el-radio v-model="value.type" label="top">图片上</el-radio>
        <el-radio v-model="value.type" label="bottom">图片下</el-radio>
      </div>
      <div>
         <el-checkbox v-model="value.showBtn">是否显示按钮</el-checkbox>
      </div>
      <ul class="block1-edit-group">
        <li v-for="(item,index) in value.list" :key="'block1_edit_item'+index">
          <div class="block1-title" @click="titleClick(index)">{{`图块${index+1}`}}<i @click.stop="removeClick(index)"class="iconfont icon-close"></i></div>
          <div class="block1-content" :class="{active:active===index}">
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
               <com-editer class="font-editer" v-model="item.content" ></com-editer>
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
import ComBtn from 'components/site/button'
import ComFont from 'components/site/font'
import ComEditer from 'src/components/ve-html5-editer'
import editMixin from './mixin'
import ComEdit from './edit'
export default {
  mixins: [editMixin],
  components: {
    ComEdit, ComEditer, ComBtn, ComFont
  },
  props: {
    min: {
      type: Number,
      default: 2
    },
    max: {
      type: Number,
      default: 4
    }
  },
  data () {
    return {
      active: -1,
      host: process.env.IMGHOST + '/'
    }
  },
  methods: {
    addBlock () {
      let len = this.value.list.length
      if (len < this.max) {
        this.value.list.push({
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
      if (this.value.list.length > this.min) {
        this.value.list.splice(index, 1)
      }
    },
    uploadLoad (data, index) {
      let ret = JSON.parse(data.data)
      if (ret.code === 200) {
        this.value.list[index].img = `${ret.data.name}`
      }
    }
  },
  computed: {
    widthClass () {
      return `width${this.value.list.length}`
    }
  }
}
</script>

<style lang="scss" scoped>
.block1-container /deep/ {
  position: relative;
  .block1-content {
    height: 100%;
    display: inline-block;
    position: relative;
    .block1-group {
      font-size: 0;
      .block1-item {
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        margin-right: 25px;
        position: relative;
        text-align: left;
        vertical-align: top;
        img {
          display: block;
        }
        .content {
          width: 100%;
          &.top {
            position: absolute;
            left: 0;
            top: 0;
          }
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .block1-edit {
    // padding: 20px 5px;
    .add-btn {
      width: 100%;
      margin-bottom: 10px;
    }
    .block1-edit-group {
      border: 1px solid #dadada;
      border-bottom: 0;
      font-size: 14px;
    }
    .block1-title {
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
    .block1-content {
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
