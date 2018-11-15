<template>
  <div class="v-questions-from">
    <div class="v-content">
      <img src="../../../assets/image/avatar@2x.png" alt="">
      <p class="v-title">
        产品调研
      </p>
      <p class="v-summary">
       欢迎参加调查！答卷数据仅用于统计分析，请放心填写。题目选项无对错之分，按照实际情况选择即可。感谢您的帮助！
      </p>
      <div class="v-questions">
        <com-question v-for="(item,index) in dragData"
                    :value.sync="item"
                    :edit="false"
                    :index="index+1"
                    :key="index"
                    :ref="`com${index}`">
        </com-question>
      </div>
      <button class="v-save" @click="save">提交</button>
    </div>
  </div>
</template>
<script>
import question from 'components/questionnaire/wrap'
export default {
  components: {
    comQuestion: question
  },
  props: {
    dragData: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      activityId: this.$route.params.id,
      imgHost: process.env.IMGHOST + '/'
    }
  },
  methods: {
    save () {
      let result = true
      let refs = this.$refs
      Object.keys(refs).forEach(key => {
        if (refs[key][0].$children[0].check()) {
          result = false
        }
      })
      if (result) {
        console.log(this.dragData)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.v-questions-from {
  text-align: center;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  font-size: 24px;
  color: #222;
  .v-content {
    overflow: auto;
    height: 100%;
    padding: 85px 50px 50px;
  }

  img {
    margin: 0 auto;
    display: block;
  }

  .v-title {
    word-break: break-all;
    text-align: center;
    margin: 50px auto 0;
    font-size: 36px;
  }

  .v-summary {
    word-break: break-all;
    text-align: center;
    margin: 20px auto 0;
    border-bottom: 1px solid #ffd021;
    padding-bottom: 24px;
  }
  .el-select .el-input__inner {
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    overflow: hidden;
  }
  .v-save {
    width: 300px;
    height: 60px;
    line-height: 60px;
    background-color: #ffd021;
    color: #222;
    margin: 60px auto 50px;
    border: none;
    border-radius: 50px;
  }
}
</style>

