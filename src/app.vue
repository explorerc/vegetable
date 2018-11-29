
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted () {
    document.addEventListener('focusout', function (e) {
      let top = document.body.scrollTop
      document.body.scrollTop = top + 1
    })
  }
}
</script>

<style lang='scss'>
@import "assets/css/mixin.scss";
#app {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  font-size: 28px;
  color: #222222;
}

.box {
  width: 375px;
  height: 375px;
  border-radius: 4px;
  @include border();
  margin-left: 10px;
  margin-top: 10px;
}
</style>
