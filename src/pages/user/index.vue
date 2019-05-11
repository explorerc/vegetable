<template>
  <div class="user" v-title data-title="个人中心">
    <div class="top">
      <div class="edit" @click="editUserInfo"><i class="iconfont icon-bianji"></i></div>
      <div class="aviator">
        <img src="http://b-ssl.duitang.com/uploads/blog/201404/23/20140423205758_FJ4NN.jpeg" alt="">
      </div>
      <div class="nickname">
        <span>昵称：</span><span>{{userInfo.nickname}}</span>
      </div>
    </div>
    <div class="name-box item">
      <i class="iconfont icon-username"></i><span>名字：</span><span>{{userInfo.name}}</span>
    </div>
    <div class="tel-box item">
      <i class="iconfont icon-tel"></i><span>手机：</span><span>{{userInfo.tel}}</span>
    </div>
    <div class="birth-box item">
      <i class="iconfont icon-shengrilijin"></i><span>生日：</span><span v-if="userInfo.birth">{{userInfo.birth.split(' ')[0]}}</span><span v-else>设置</span>
    </div>
    <div class="address-box item">
      <i class="iconfont icon-dizhi"></i><span>地址：</span><span>{{userInfo.address}}</span>
    </div>
    <div class="connect-box item" @click="connectBtn">
      <i class="iconfont icon-lianxi"></i><span>联系卖家</span><span></span>
    </div>
  </div>
</template>

<script>
  import user from 'src/api/user-service'
  import EventBus from '../../utils/eventBus'
  export default {
    name: 'index',
    data () {
      return {
        userInfo: {},
        currentTabComponent: '',
        rangeValue: 0
      }
    },
    methods: {
      queryUserInfo () {
        this.$get(user.GET_USER_INFO, {}).then((res) => {
          if (res.code === 200) {
            this.userInfo = res.data
            console.log(this.userInfo)
          }
        })
      },
      editUserInfo () {
        EventBus.$emit('currentTabComponent', 'Edit')
      },
      connectBtn () {
        EventBus.$emit('currentTabComponent', 'Chat')
      }
    },
    created () {
      this.queryUserInfo()
    },
    watch: {
    }
  }
</script>

<style scoped lang="scss">
.user {
  font-size: 36px;
  .top {
    position: relative;
    height: 400px;
    padding: 55px 40px;
    /*background-image: url("http://photo.16pic.com/00/11/46/16pic_1146720_b.jpg");*/
    background-size: cover;
    .edit {
      position: absolute;
      top: 20px;
      right: 30px;
      .iconfont {
        font-size: 46px;
      }
    }
    .aviator {
      /*display: inline-block;*/
      margin: 0 auto 20px;
      text-align: center;
      img {
        height: 180px;
        border-radius: 50%;
        border: 1px solid #ff4200;;

      }
    }
    .nickname {
      text-align: center;
    }
  }
  .item {
    position: relative;
    margin: 30px 20px 0;
    padding: 10px 20px;
    background-color: #fff;
    border-radius: 20px;
    vertical-align: middle;
    .iconfont {
      display: inline-block;
      position: relative;
      top: 3px;
      margin-right: 10px;
      font-size: 46px;
      &.icon-username {
        color: #B0CD2D;
      }
      &.icon-shengrilijin {
        color: #FF28C8;
      }
      &.icon-dizhi {
        color: #009EE7;
      }
      &.icon-tel {
        color: #9D7AFB;
      }
      &.icon-lianxi {
        color: #3289EB;
      }
    }
  }
}
</style>
