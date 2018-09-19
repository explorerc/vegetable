<template>
  <div class="navigation-container" v-if="value.enable">
    <div ref="target" class="navigation-content">
      <div class="more-link">更多链接</div>
      <ul class="nav-group">
        <li class="nav-item" v-for="(item,index) in value.data.list" :key="index">
          <a :style="{color:value.data.fontColor}" :target="item.type" :href="item.link | voidLink">{{item.text}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import editMixin from './mixin'
export default {
  mixins: [editMixin],
  data () {
    return {
      active: -1
    }
  },
  methods: {
    addNav () {
      let len = this.value.data.list.length
      if (len < 8) {
        this.value.data.list.push({
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
      if (this.value.data.list.length > 1) {
        this.value.data.list.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-container /deep/ {
  .navigation-content {
    height: 100%;
    .more-link {
      display: none;
    }
    li {
      cursor: pointer;
    }
  }
  .nav-edit {
    .edit-content {
      padding: 25px;
    }
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
