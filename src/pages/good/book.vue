<template>
  <div class="book"  v-title data-title="预定">
<<<<<<< HEAD
    <goodInfo
      :goodInfo="goodInfo"
      :isCartShow="isCartShow"
      @minusNumberClick="minusNumberClick(goodInfo.id)"
      @addNumberClick="addNumberClick(goodInfo.id)"></goodInfo>
=======
    <div class="user">
      <div class="info">
        <span class="name">{{userInfo.name}}</span><span class="tel">{{userInfo.tel}}</span>
      </div>
      <div>
        <div class="address"><i class="iconfont icon-dizhi"></i><span>{{userInfo.address}}</span></div>
      </div>
    </div>
    <div class="good">
    <!--<p class="title">商品</p>-->
    <goodInfo
            :goodInfo="goodInfo"
            :isCartShow="isCartShow"
            @minusNumberClick="minusNumberClick(goodInfo.id)"
            @addNumberClick="addNumberClick(goodInfo.id)"></goodInfo>
  </div>
  <div class="time">
    <p class="title">预定时间</p>
    <!--<span v-for="item in days">{{item.day}}-&#45;&#45;{{item.week}}</span>-->
    <div  v-for="(item,key) in days" :key="key" :class="{selected:item.selected}" @click="item.selected=!item.selected" class="day">
      <p>{{item.day}}</p>
      <p>{{item.week}}</p>
    </div>
    <mt-datetime-picker
            :visible.sync="pickerVisible"
            type="date"
            :value.sync="pickerValue">
    </mt-datetime-picker>
    </div>
    <div class="buy">
      <button class="iconfont icon-ic_reserve" @click="bookSubmit()">预定</button>
    </div>
>>>>>>> 6fcd999abc573206846dffdfd928c7f70a9eaec4
  </div>
</template>

<script>
  import EventBus from 'src/utils/eventBus'
  import order from 'src/api/orders'
  import goodInfo from 'src/components/good-info'
  import cart from 'src/api/cart'
  import NumberBtn from 'src/components/number-btn'
  import user from 'src/api/user-service'
  import { DateTime } from '../../utils/dataTime'
  export default {
    name: 'goodDetail',
    components: { NumberBtn, goodInfo },
    data () {
      return {
        goodId: 0,
        goodInfo: [],
        number: 1,
        isCartShow: true,
        userInfo: {},
        pickerVisible: true,
        pickerValue: null,
        days: [],
        weekday: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      }
    },
    methods: {
      // queryGood (id) {
      //   this.$get(this.base_url + goods.GET_GOOD_BYID, {
      //     'id': id
      //   }).then((res) => {
      //     if (res.code === 200) {
      //       this.goodInfo = res.data
      //       console.log(res.data)
      //     }
      //   })
      // },
      queryUserInfo () {
        this.$get(user.GET_USER_INFO).then((res) => {
          if (res.code === 200) {
            this.userInfo = res.data
            console.log(this.userInfo)
          }
        })
      },
      addNumberClick () {
        this.number++
      },
      minusNumberClick () {
        this.number--
      },
      nowTime () {
        let date = new DateTime()
        this.day = date.getDate()
        this.week = date.getWeek()
        for (let i = 1; i <= 7; i++) {
          this.days.push(this.fun_date(i))
        }
      },
      fun_date (a) {
        let date1 = new Date()
        //   time1 = date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate() // time1表示当前时间
        let date2 = new Date(date1)
        date2.setDate(date1.getDate() + a)
        let time2 = date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate()
        let week = date2.getDay()
        return {
          day: time2,
          week: this.weekday[week],
          selected: false
        }
      },
      addCart (goodId) {
        // alert(goodId)
        this.$get(cart.GET_CART_ADD, {
          'goodId': goodId,
          'number': 1
        }).then((res) => {
          if (res.code === 200) {
            // console.log(res)
            alert(res.data)
          }
        })
      },
      bookSubmit () {
        let data = []
        this.days.forEach((item, ind) => {
          if (item.selected) {
            data.push({
              ...item,
              userId: this.userInfo.id,
              goodId: this.goodId
            })
          }
          this.$post(order.POST_BOOK, {
            bookInfo: data
          }).then((res) => {
            if (res.code === 200) {
              console.log(res)
            }
          })
        })
      }
    },
    created () {
      EventBus.$on('goodInfo', (data) => {
        this.goodInfo = {
          ...data
        }
      })
      this.queryUserInfo()
      this.nowTime()
    },
    watch: {
      goodInfo: {
        handler (val, newVal) {
          console.log(val)
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="scss">
.book {
  padding: 10px 40px 0;
  /deep/ {
    .cart-top input{
      display: none;
    }
    .good-info {
      margin-bottom: 0;
    }
  }
  .user {
    background-color: #fff;
    border-radius: 8px;
    padding: 30px 20px;
    .info {
      margin-bottom: 20px;
    }
    .name {
      font-size: 32px;
      color: #666;
    }
    .tel {
      margin-left: 20px;
      font-size: 28px;
      color: #999;
    }
    .icon-dizhi {
      margin-right: 15px;
      vertical-align: middle;
      font-size: 40px;
    }
    .address {
      font-size: 28px;
      color: #222;
    }
  }
  .good {
    padding: 30px 20px;
    margin-top: 40px;
    background-color: #fff;
    border-radius: 4px;
  }
  .time {
        margin-top: 20px;
    .title {
      font-size: 32px;
      color: #222;
      margin-bottom: 15px;
    }
      .day {
        display: inline-block;
        width: 30%;
        /*height: 80px;*/
        padding: 10px 0 ;
        background-color: #fff;
        margin-right: 5%;
        margin-bottom: 20px;
        border: 3px solid #fff;
        border-radius: 4px;
        &:nth-child(3n+1) {
          margin-right: 0;
        }
        &.selected {
          border: 3px solid blue;
        }
        p {
          text-align: center;
        }
      }
  }
  .buy {
    position: fixed;
    bottom: 110px;
    left: 20px;
    width: 100%;
    text-align: center;
    padding: 0 40px 10px 0;
    button {
      display: inline-block;
      font-size: 36px;
      color: #fff;
      border-radius: 10px;
      padding: 10px 40px;
      border: 1px solid #F40;
      background: #F40;
    }
  }
}
</style>
