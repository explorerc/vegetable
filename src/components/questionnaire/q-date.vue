<template>
  <div class="q-edit-content">
    <el-date-picker v-if="!edit"
                    v-model="value.value"
                    type="date"
                    @focus="focus"
                    placeholder="选择日期">
    </el-date-picker>
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
      errorTip: ''
    }
  },
  methods: {
    focus () {
      this.errorTip = ''
    },
    validate () {
      let result = true
      if (!this.value.title) {
        result = false
        this.value.error = true
        this.value.title = '请设置问卷内容'
      }
      return result
    },
    check () {
      if (this.value.required && !this.value.value) {
        this.errorTip = '此项为必填项'
        return false
      }
      return { id: this.value.id, value: this.value.value }
    }
  }
}
</script>

<style scoped lang="scss">
.q-edit-content {
  /deep/ {
    .error-msg {
      position: absolute;
      color: #fc5659;
      padding-left: 10px;
      line-height: 20px;
      font-size: 12px;
    }
  }
}
</style>
