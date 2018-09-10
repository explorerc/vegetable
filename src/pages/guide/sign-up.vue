<template>
  <div class="v-signup">
    <p class="v-title">
      这里显示引导标题
    </p>
    <div class="v-summary">
      是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介
      是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介
      是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介
      是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介是直播简介
    </div>
    <div class="v-operation">
      <com-input label="您的姓名" inputVal="Biubiu"></com-input>
      <com-input label="手机号" inputVal="15210101011"></com-input>
      <com-verification-code phone='15210102723' @inputFocus="getCode($event)" :isGetCode="isGetCode"></com-verification-code>
      <com-select :selectOptions="selectOptions" :selectValue="selectValue" @selected="selected($event)"></com-select>
      <a href="javascript:;" @click="submit">提交</a>
    </div>
  </div>
</template>

<script>
  import ComInput from '../../components/common/signup/com-input.vue'
  import ComVerificationCode from '../../components/common/signup/com-code.vue'
  import ComSelect from '../../components/common/signup/com-select.vue'
  export default {
    data () {
      return {
        code: 0,
        isGetCode: true,
        selectOptions: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        selectValue: '黄金糕'
      }
    },
    mounted () {
    },
    components: {
      'com-input': ComInput,
      'com-verification-code': ComVerificationCode,
      'com-select': ComSelect
    },
    created () {
    },
    watch: {
    },
    methods: {
      getCode (val) {
        this.code = val
      },
      selected (val) {
        this.selectValue = val
        alert(this.selectValue)
      },
      submit () {
        this.isGetCode = !this.isGetCode
        this.$router.replace('/Success')
      }
    }
  }
</script>
<style lang="scss" scoped>
.v-signup {
}
</style>

