<template>
  <div class="withDrawList-wrap">
    <div class="header">
      <router-link class="back"
                   to="/user">
        <i class="iconfont icon-jiantouzuo fl"></i>
      </router-link>
      收益提现
    </div>
    <div class="list-wrap"
         ref="bscroll"
         @scroll="scrollEvent($event)">
      <ul>
        <li>
          <div class="fl">
            <span class="des">领取现金红包</span>
            <span class="time">2018-08-28 12:00</span>
          </div>
          <div class="money-wrap">
            <span>+</span>
            <span class="money">13.80</span>
          </div>
        </li>
        <li>
          <div class="fl">
            <span class="des">领取现金红包</span>
            <span class="time">2018-08-28 12:00</span>
          </div>
          <div class="money-wrap">
            <span>+</span>
            <span class="money">13.80</span>
          </div>
        </li>
        <li>
          <div class="fl">
            <span class="des">领取现金红包</span>
            <span class="time">2018-08-28 12:00</span>
          </div>
          <div class="money-wrap">
            <span>+</span>
            <span class="money">13.80</span>
          </div>
        </li>
        <li>
          <div class="fl">
            <span class="des">领取现金红包</span>
            <span class="time">2018-08-28 12:00</span>
          </div>
          <div class="money-wrap">
            <span>+</span>
            <span class="money">13.80</span>
          </div>
        </li>
        <li>
          <div class="fl">
            <span class="des">领取现金红包</span>
            <span class="time">2018-08-28 12:00</span>
          </div>
          <div class="money-wrap">
            <span>+</span>
            <span class="money">13.80</span>
          </div>
        </li>
        <li>
          <div class="fl">
            <span class="des">领取现金红包</span>
            <span class="time">2018-08-28 12:00</span>
          </div>
          <div class="money-wrap">
            <span>+</span>
            <span class="money">13.80</span>
          </div>
        </li>
        <li>
          <div class="fl">
            <span class="des">领取现金红包</span>
            <span class="time">2018-08-28 12:00</span>
          </div>
          <div class="money-wrap">
            <span>+</span>
            <span class="money">13.80</span>
          </div>
        </li>
        <li>
          <div class="fl">
            <span class="des">领取现金红包</span>
            <span class="time">2018-08-28 12:00</span>
          </div>
          <div class="money-wrap">
            <span>+</span>
            <span class="money">13.80</span>
          </div>
        </li>
        <li>
          <div class="fl">
            <span class="des">领取现金红包</span>
            <span class="time">2018-08-28 12:00</span>
          </div>
          <div class="money-wrap">
            <span>+</span>
            <span class="money">13.80</span>
          </div>
        </li>
        <li>
          <div class="fl">
            <span class="des">领取现金红包</span>
            <span class="time">2018-08-28 12:00</span>
          </div>
          <div class="money-wrap">
            <span>+</span>
            <span class="money">13.80</span>
          </div>
        </li>
        <li>
          <div class="fl">
            <span class="des">领取现金红包</span>
            <span class="time">2018-08-28 12:00</span>
          </div>
          <div class="money-wrap">
            <span>+</span>
            <span class="money">13.80</span>
          </div>
        </li>
        <li>
          <div class="fl">
            <span class="des">领取现金红包</span>
            <span class="time">2018-08-28 12:00</span>
          </div>
          <div class="money-wrap">
            <span>+</span>
            <span class="money">13.80</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import userService from 'src/api/user-service'

export default {
  data () {
    return {
      page: 1,
      pageSize: 10,
      total: -1,
      list: []
    }
  },
  methods: {
    debounce (func, wait, immediate) {
      var timeout
      return function () {
        var context = this
        var args = arguments
        var later = function () {
          timeout = null
          if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
      }
    },
    getData () {
      this.$get(userService.GET_WITHDRAW_LIST, { page: this.page, pageSize: this.pageSize }).then((res) => {
        if (this.total < 0) {
          this.total = res.data.totalPage
        }
        Array.prototype.push.apply(this.list, res.data.list)
        this.page += 1
      })
    }
  },
  mounted () {
    this.getData()
    this.scrollEvent = this.debounce(e => {
      if (this.$refs.bscroll.offsetHeight + this.$refs.bscroll.scrollTop > this.$refs.bscroll.scrollHeight - 100) {
        if (this.page <= this.total) {
          this.getData()
        }
      }
    }, 300)
  }
}
</script>

<style scoped lang="scss">
.withDrawList-wrap {
  height: 100%;
  background-color: white;
  /deep/ {
    .header {
      height: 80px;
      line-height: 80px;
      text-align: center;
      font-size: 32px;
      background-color: #f5f5f5;
      .back {
        position: absolute;
        left: 0;
      }
      .icon-jiantouzuo {
        width: 40px;
        display: inline-block;
        margin-left: 20px;
      }
    }
    .list-wrap {
      position: absolute;
      top: 80px;
      bottom: 0;
      width: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          height: 140px;
          padding: 31px 35px;
          border-bottom: 1px solid #dadada;
          .des {
            font-size: 30px;
            display: block;
            margin-bottom: 8px;
            color: #222222;
          }
          .time {
            font-size: 24px;
            color: #888888;
          }
          .money-wrap {
            text-align: right;
          }
          .money {
            font-size: 40px;
            line-height: 80px;
            .red {
            }
          }
        }
      }
    }
  }
}
</style>
