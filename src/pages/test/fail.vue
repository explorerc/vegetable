<template>
<div class='wrap'>
  <dl>
    <dt></dt>
    <dd>发送失败！</dd>
  </dl>
</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  dl {
    width: 100%;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -200px;
    dt {
      width: 100%;
      height: 300px;
      background: url('~assets/image/test-fail.jpg') no-repeat center;
      background-size: contain;
    }
    dd {
      text-align: center;
      font-size: 50px;
      padding-left: 40px;
      padding-top: 20px;
    }
  }
}
</style>
