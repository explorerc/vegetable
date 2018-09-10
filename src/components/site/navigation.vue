<template>
  <div class="navigation-container" v-if="value.enable">
    <div ref="target" class="navigation-content">
      <ul class="nav-group">
        <li class="nav-item" v-for="(item,index) in value.data" :key="index">
          <a :target="item.type" :href="item.link | voidLink">{{item.text}}</a>
        </li>
      </ul>
    </div>
    <com-edit ref="editTarget" class="nav-edit">
      <com-button class="add-btn" @click="addNav">添加导航</com-button>
      <ul class="nav-edit-group">
        <li v-for="(item,index) in value.data" :key="'a'+index">
          <div class="nav-title" @click="titleClick(index)">{{item.text}}<i @click.stop="removeClick(index)"class="iconfont icon-close"></i></div>
          <div class="nav-content" :class="{active:active===index}">
            <div><com-input placeholder="输入导航名称" :value.sync="item.text"></com-input></div>
            <div><com-input placeholder="输入导航链接" :value.sync="item.link"></com-input></div>
            <div>
              <span style="margin-right:20px;margin-left:5px;">打开方式</span>
              <el-radio v-model="item.type" label="_blank">新窗口</el-radio>
              <el-radio v-model="item.type" label="_self">当前窗口</el-radio>
            </div>
          </div>
        </li>
      </ul>
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
      active: -1
    }
  },
  methods: {
    addNav () {
      let len = this.value.data.length
      if (len < 8) {
        this.value.data.push({
          text: `导航${len + 1}`,
          type: '_blank',
          link: ''
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
      if (this.value.data.length > 1) {
        this.value.data.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-container /deep/ {
  .navigation-content {
    height: 100%;
    li {
      cursor: pointer;
    }
  }
  .nav-edit {
    padding: 25px;
    .add-btn {
      width: 100%;
      margin-bottom: 10px;
    }
    .nav-edit-group {
      border: 1px solid #dadada;
      border-bottom: 0;
      font-size: 14px;
    }
    .nav-title {
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
    .nav-content {
      height: 0;
      overflow: hidden;
      transition: all 0.3s;
      &.active {
        border-bottom: 1px solid #dadada;
        padding: 20px 10px;
        height: auto;
      }
      .com-input {
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
