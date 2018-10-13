
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang='scss'>
@import 'assets/css/mixin.scss';
#app {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  font-size: 28px;
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
