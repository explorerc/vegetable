<template>
  <div class="block2-container" v-if="value.enable">
    <div ref="target" class="block2-content">
      <el-carousel trigger="click" :class="widthClass" :autoplay="autoplay" :height="height" :interval="value.loop">
        <el-carousel-item :class="item.type"  v-for="(item,index) in value.list" :key="'block2_item_'+index">
          <a target="_black" :href="item.hrefType === '_sub' ? `${MOBILE_HOST}guide/${id}` : item.link | voidLink"  >
            <div v-if="item.bgColor" class="left-area" :style="{backgroundColor:item.bgColor}"></div>
            <img v-if="item.img" class="img" :src="item.img.indexOf('mp')===0?host+item.img:item.img">
            <div class="content"  >
              <div v-html="item.content"></div>
              <com-btn v-if="value.showBtn" :edit="value.enable" v-model="item.btn"></com-btn>
            </div>
          </a>
        </el-carousel-item>
      </el-carousel>
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
    ComFont, ComBtn
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
      id: this.$route.params.id,
      MOBILE_HOST: process.env.MOBILE_HOST,
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
  },
  computed: {
    widthClass () {
      return `width${this.value.list.length}`
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
