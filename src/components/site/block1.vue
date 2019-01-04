<template>
  <div class="block1-container" v-if="value.enable">
    <div ref="target" class="block1-content">
      <ul class="block1-group" :class="widthClass">
        <li class="block1-item" :class="item.type" v-for="(item,index) in value.list" :key="'block1_item'+index">
          <a target="_black" :href="item.hrefType === '_sub' ? `${MOBILE_HOST}subscribe/${id}` : item.link | voidLink">
            <img v-if="item.img" class="img" :src="item.img.indexOf('mp')===0?host+item.img:`https://${item.img}`">
            <div class="block1-bg"></div>
            <div class="content"  v-html="item.content">
            </div>
            <!-- <com-font :class="{content:true,top:value.type==='top'}" :edit="edit" v-model="item.content"></com-font> -->
            <com-btn v-if="value.showBtn" :edit="value.enable" v-model="item.btn"></com-btn>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ComBtn from 'components/site/button'
import ComFont from 'components/site/font'
import editMixin from './mixin'
export default {
  mixins: [editMixin],
  components: {
    ComBtn, ComFont
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
      id: this.$route.params.id,
      MOBILE_HOST: process.env.MOBILE_HOST,
      host: process.env.IMGHOST + '/'
    }
  },
  methods: {
    addBlock () {
      let len = this.value.list.length
      if (len < this.max) {
        this.value.list.push({
          content: '',
          img: '',
          btn: {
            enable: true,
            text: '',
            bgColor: '',
            fontColor: ''
          }
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
        }
        &:last-child {
          margin-right: 0;
        }
        &.top {
          .content {
            position: absolute;
            left: 0;
            top: 0;
          }
        }
        &.right {
          overflow: hidden;
          img {
            float: left;
          }
        }
        &.left {
          overflow: hidden;
          img {
            float: right;
          }
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
