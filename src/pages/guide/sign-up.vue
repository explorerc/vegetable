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
      <a href="javascript:;" @click="aa">666</a>
    </div>
  </div>
</template>

<script>
  import ComInput from '../../components/common/signup/com-input.vue'
  import ComVerificationCode from '../../components/common/signup/verification-code.vue'
  export default {
    data () {
      return {
        code: 0,
        isGetCode: true
      }
    },
    mounted () {
    },
    components: {
      'com-input': ComInput,
      'com-verification-code': ComVerificationCode
    },
    created () {
    },
    watch: {
    },
    methods: {
      getCode (val) {
        this.code = val
      },
      aa () {
        this.isGetCode = !this.isGetCode
      }
    }
  }
</script>
<style lang="scss" scoped>
.v-signup {
}
</style>

