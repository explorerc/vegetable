<template>
  <div class="v-checkState">
    <com-input label="手机号" inputVal="15210101011" placeholder="输入报名时候填写的手机"></com-input>
    <com-verification-code phone='15210102723' @inputFocus="getCode($event)" :isGetCode="isGetCode"></com-verification-code>
    <a href="javascript:;" @click="submit">提交</a>
  </div>
</template>
<script>
  import ComInput from '../../components/common/signup/com-input.vue'
  import ComVerificationCode from '../../components/common/signup/com-code.vue'
  export default {
    data () {
      return {
        event: {
          isGetCode: true
        }
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
      submit () {
        this.isGetCode = !this.isGetCode
        this.$router.replace('/Success')
      }
    }
  }
</script>
<style lang="scss" scoped>
.v-checkState {
}
</style>

