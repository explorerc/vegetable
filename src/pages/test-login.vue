<template>
  <div>
    <com-login ></com-login>
    <button @click="doAuth">授权</button>
    <button @click="doLogin">登陆</button>
  </div>
</template>

<script>
import loginMixin from 'components/login-mixin'
export default {
  mixins: [loginMixin]
}
</script>

<style>
</style>
