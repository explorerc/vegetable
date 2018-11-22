<template>
  <div class="single-select-wrap">
    <div class="question-content">
      <div class="index">{{index}}</div>
      <div v-if="edit"
           class="q-des">{{value.ext.name}}</div>
      <div class="q-edit"
           :class="{display:!edit}">
        <!-- 问题描述区 -->
        <com-input v-if="edit"
                   class="q-subject"
                   @focus="focusTitle"
                   :class="{error:value.error}"
                   v-model="value.title"
                   :max-length="30"></com-input>
        <div v-if="!edit"
             class="q-subject" >{{value.title}}<span v-if="value.required === 'Y'" class="v-red">*</span></div>
        <!-- 问题描述区 -->
        <component ref="content"
                   :is="QComs[value.type]"
                   v-model="value"
                   :edit="edit"
                   :isView="isView"></component>
      </div>
      <div class="q-operate"
           v-if="edit">
        <a v-if="showAddItem"
           class="add-select-item"
           @click="addItem">添加选项</a>
        <span v-if="!(value.detail&&value.detail.format==='mobile')"
              class="required-des">必填</span>
        <el-switch class='switch'
                   v-if="!(value.detail&&value.detail.format==='mobile')"
                   v-model="value.required"
                   inactive-color="#DEE1FF"
                   :width="32"
                   active-color="#FFD021"></el-switch>
        <span v-if="value.detail&&value.detail.format==='mobile'"
              class="required-des">短信验证</span>
        <el-switch class='switch'
                   v-if="value.detail&&value.detail.format==='mobile'"
                   v-model="value.verifiy"
                   inactive-color="#DEE1FF"
                   :width="32"
                   active-color="#FFD021"></el-switch>
        <div class="sort" v-if="value.detail.format!='mobile'">排序</div>
        <div class="del"
             @click="remove">删除</div>
      </div>
    </div>
  </div>
</template>

<script>
import { coms as QComs, types as QTypes } from 'components/questionnaire/types'
import qRadio from './q-radio'
import qCheckbox from './q-checkbox'
import qSelect from './q-select'
import qText from './q-text'
import qDate from './q-date'
import qArea from './q-area'

export default {
  components: {
    qRadio,
    qCheckbox,
    qSelect,
    qText,
    qDate,
    qArea
  },
  props: {
    index: {
      type: Number,
      default: 1
    },
    value: {
      type: Object,
      default () {
        return {

        }
      }
    },
    edit: {
      type: Boolean,
      default: false
    },
    isView: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      QComs: QComs
    }
  },
  mounted () {
    if (this.value.verification === 'Y') {
      this.value.verifiy = true
    }
  },
  methods: {
    check () {
      return this.$refs.content.check()
    },
    focusTitle () {
      if (this.value.error) {
        this.value.error = false
        this.value.title = ''
      }
    },
    addItem () {
      if (this.value.detail.list.length < 20) {
        this.value.detail.list.push({
          value: '选项'
        })
      }
    },
    remove () {
      let option = {
        type: this.value.ext.key,
        index: this.index
      }
      this.$emit('remove', option)
    }
  },
  watch: {
    'value.verifiy': {
      handler (val) {
        if (val) {
          this.value.verification = 'Y'
        } else {
          this.value.verification = 'N'
        }
      },
      deep: true
    }

  },
  computed: {
    showAddItem () {
      return !this.value.ext.fixedness && (this.value.type === QTypes.RADIO || this.value.type === QTypes.CHECKBOX || this.value.type === QTypes.SELECT)
    }
  }
}
</script>

<style scoped lang="scss">
.single-select-wrap {
  width: 100%;
  font-size: 12px;
  position: relative;
  border-radius: 4px;
  // overflow: hidden;
  text-align: left;
  /deep/ {
    .el-input__inner {
      border-radius: 4px;
    }
    .el-radio + .el-radio {
      margin-left: 0;
    }
    .el-checkbox + .el-checkbox {
      margin-left: 0;
    }
    .com-input {
      width: 100% !important;
      input {
        height: 90px;
        line-height: 90px;
        font-size: 28px;
        border-radius: 4px !important;
      }
      .limit {
        margin-top: 0px;
      }
    }
    .el-checkbox {
      .el-checkbox__label {
        left: 35px;
      }
    }
    .el-radio {
      .el-radio__label {
        left: 35px;
      }
    }
    .el-select {
      width: 100% !important;
      .el-input__inner {
        border: 1px solid #e2e2e2;
        height: 90px;
        line-height: 90px;
      }
      .el-icon-arrow-up {
        line-height: 10px;
      }
    }
    .el-date-editor {
      width: 100%;
      .el-input__inner {
        height: 90px;
        line-height: 90px;
      }
      .el-input__icon {
        line-height: 90px;
      }
    }
    .q-edit-content {
      width: 100%;
      position: relative;
      .area.com-input {
        height: 200px;
      }
      textarea {
        padding-bottom: 70px;
      }
      .com-input.code {
        width: 100%;
      }
      .com-button.code {
        position: absolute;
        bottom: 30px;
        right: 0;
        width: 160px;
        height: 90px;
        text-align: center;
        line-height: 90px;
      }
    }
    .index {
      float: left;
      margin: 2px 15px 0 0;
      text-align: left;
      padding-left: 5px;
      font-size: 30px;
      font-weight: bold;
    }
    .v-red {
      display: inline-block;
      color: #fc5659;
      vertical-align: middle;
      margin-left: 10px;
    }
    .question-content {
      padding: 30px;
      width: 100%;
      background-color: #fff;
      .q-des {
        margin-bottom: 15px;
      }
      .q-edit {
        padding: 0 10px;
        margin-bottom: 15px;
        &.display {
          // margin-bottom: 0;
        }
        .q-subject {
          font-size: 30px;
          margin-bottom: 14px;
          font-weight: bold;
          word-break: break-all;
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
      .q-operate {
        padding: 0 10px 0 15px;
        text-align: right;
        .add-select-item {
          float: left;
          cursor: pointer;
          margin-top: 6px;
        }
        .required-des {
          display: inline-block;
          vertical-align: middle;
        }
        .el-switch__core {
          height: 18px;
          .el-switch__button {
            width: 14px;
            height: 14px;
          }
        }
        .sort {
          display: inline-block;
          text-align: center;
          width: 30px;
          height: 30px;
          line-height: 30px;
          border-radius: 30px;
          border: 1px solid #d2d2d2;
          cursor: pointer;
          margin-left: 10px;
        }
        .del {
          display: inline-block;
          text-align: center;
          width: 30px;
          height: 30px;
          line-height: 30px;
          border-radius: 30px;
          border: 1px solid #d2d2d2;
          cursor: pointer;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
