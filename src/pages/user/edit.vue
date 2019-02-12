<!--suppress ALL -->
<template>
  <div class="edit">
    <mt-field label="姓名" placeholder="请输入用户名" v-model="userInfo.name"></mt-field>
    <mt-field label="昵称" placeholder="请输入昵称" v-model="userInfo.nickname"></mt-field>
    <mt-field label="手机" placeholder="请输入手机号" type="tel" v-model="userInfo.tel"></mt-field>
    <mt-field label="生日" placeholder="请输入生日日期" type="date" v-model="userInfo.birth"></mt-field>
    <mt-field label="地址" placeholder="请输入收货地址" type="text" v-model="userInfo.address1"></mt-field>
    <!--<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>-->
    <div class="save-box"><button class="" @click="saveUserInfo">保存</button></div>
  </div>
</template>

<script>
  import user from 'src/api/user-service'
  import EventBus from '../../utils/eventBus'
  export default {
    name: 'edit',
    data () {
      return {
        userInfo: {},
        pickerVisible: true
        // slots: [
        //   {
        //     flex: 1,
        //     values: ['北京', '天津', '河北', '安徽', '福建', '山西', '天津', '内蒙古', '辽宁',
        //       '吉林', '黑龙江', '上海', '江苏', '浙江', '江西', '安徽', '福建', '山东',
        //       '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州',
        //       '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '香港', '澳门', '台湾'],
        //     className: 'slot1',
        //     textAlign: 'right'
        //   }, {
        //     divider: true,
        //     content: '-',
        //     className: 'slot2'
        //   }, {
        //     flex: 1,
        //     values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
        //     className: 'slot3',
        //     textAlign: 'left'
        //   }
        // ]
      }
    },
    methods: {
      queryUserInfo () {
        this.$http.get(user.GET_USER_INFO, {
          params: {
            userId: 1
          }
        }).then((res) => {
          if (res.status === 200) {
            this.userInfo = res.data[0]
            this.userInfo.birth = this.userInfo.birth.split(' ')[0]
            console.log(this.userInfo)
          }
        })
      },
      saveUserInfo () {
        this.$http.get(user.GET_USER_UPDATE, {
          params: {
            ...this.userInfo
          }
        }).then((res) => {
          if (res.status === 200) {
            EventBus.$emit('currentTabComponent', 'my')
          }
        })
      }
      // onValuesChange (picker, values) {
      //   console.log(picker)
      //   console.log(values)
      //   if (values[0] > values[1]) {
      //     picker.setSlotValue(1, values[0])
      //   }
      // }
    },
    created () {
      this.queryUserInfo()
    }
  }
</script>

<style scoped lang="scss">
.edit {
  background-color: #fff;
  padding: 20px 40px 30px;
  .save-box {
    font-size: 40px;
    text-align: center;
    margin-top: 30px;
    button {
      padding: 15px 40px;
      background-color: #ff4200;
      border: 1px solid #ff4200;
      border-radius: 35px;
      color: #fff;
    }
  }
}
</style>
