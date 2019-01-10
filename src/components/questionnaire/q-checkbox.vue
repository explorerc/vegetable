<template>
  <div class="q-edit-content">
    <el-checkbox-group v-model="valArr"
                       @change="change">
      <el-checkbox v-for="(item,index) in value.detail.list"
                   class="q-select-item"
                   :class="{display:!edit}"
                   :label="item.key"
                   :key="index">
        <com-input v-if="edit"
                   :class="{error:item.error}"
                   @focus="itemFocus(item)"
                   v-model="item.value"
                   :max-length="30"></com-input>
        <div v-if="!edit"
             class="item-text"
             v-text="item.value"></div>
        <span class="remove"
              v-if="edit&&value.detail.list.length>2"
              @click="delItem(index)">删</span>
      </el-checkbox>
    </el-checkbox-group>
    <div v-if="!edit&&errorTip"
         class="error-msg">{{errorTip}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default () {
        return {}
      }
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      valArr: [],
      errorTip: ''
    }
  },
  methods: {
    delItem (index) {
      this.value.detail.list.splice(index, 1)
    },
    change () {
      this.errorTip = ''
    },
    itemFocus (item) {
      if (item.error) {
        item.error = false
        item.value = ''
      }
    },
    validate () {
      let result = true
      if (!this.value.title) {
        result = false
        this.value.error = true
        this.value.title = '请设置问卷内容'
      }
      this.value.detail.list.forEach(item => {
        if (!item.value) {
          result = false
          item.value = '请设置选项内容'
          item.error = true
        } else {
          item.error = false
        }
      })
      return result
    },
    check () {
      if (this.value.required === 'Y' && (!this.valArr || this.valArr.length === 0)) {
        this.errorTip = '此项为必填项'
        return false
      }
      let ext = JSON.parse(this.value.ext)
      let returnVal = ''
      if (this.valArr) {
        if (this.valArr.length === 1) {
          returnVal = this.valArr[0]
        } else if (this.valArr.length > 1) {
          returnVal = this.valArr.join(',')
        }
      }
      return { id: this.value.id, value: returnVal, type: ext.key }
    }
  }
}
</script>

<style scoped lang="scss">
.q-edit-content {
  /deep/ {
    .error-msg {
      position: absolute;
      bottom: -30px;
      color: #fc5659;
      padding-left: 10px;
      line-height: 20px;
      font-size: 28px;
    }
    .q-select-item {
      width: 100%;
      position: relative;
      margin-bottom: 15px;
      margin-top: 20px;
      // height: 40px;
      &.display {
        margin-bottom: 5px;
      }
      .el-checkbox__input {
        float: left;
        margin-top: 9px;
      }
      .el-checkbox__label {
        .com-input {
          margin-right: 8px;
          &.error {
            input {
              border-color: #fc5659;
              color: #fc5659;
            }
            .limit {
              display: none;
            }
          }
        }
      }
      .remove {
        word-break: break-all;
        cursor: pointer;
        font-size: 30px;
      }
      .item-text {
        width: 100%;
        display: inline-block;
        font-size: 28px;
        padding-top: 5px;
        word-break: break-all;
        white-space: normal;
        color: #222222;
        font-weight: 400;
      }
    }
  }
}
</style>
