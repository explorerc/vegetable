<template>
  <div class="v-activity-list">
    <a :href="MOBILE_HOST+'user'"
       class="v-return-userinfo clearfix">
      <i class="iconfont icon-jiantouzuo fl"></i>我的活动
    </a>
    <div class="v-list"
         ref="bscroll"
         @scroll="scrollEvent($event)">
      <ol class="bscroll-container">
        <li v-for="itemData in tableList"
            :key="itemData.id">
          <a :href="MOBILE_HOST+'guide/'+itemData.id"
             class="clearfix">
            <div class="v-activity-img fl">
              <img :src="itemData.imgUrl"
                   alt="">
              <span v-if='itemData.status=="PREPARE"'
                    class="live-state">预告</span>
              <span v-if='itemData.status=="LIVING"'
                    class="live-state"><i class="live-point"></i>直播中</span>
              <span v-if='itemData.status=="PLAYBACK"'
                    class="live-state">回放</span>
              <span v-if='itemData.status=="FINISH"'
                    class="live-state">结束</span>
            </div>
            <div class="v-content-block fr">
              <p class="v-title">
                {{itemData.title}}
              </p>
              <!-- <div class="v-label-div">
                <span>
                  柯基
                </span>
                <span>
                  设计峰会
                </span>
              </div> -->
              <p class="v-sponsor">
                {{itemData.hostNickname}}
              </p>
              <p class="v-time">
                {{itemData.startTime}}
              </p>
            </div>
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
import loginMixin from 'components/login-mixin'
import { mapMutations, mapState } from 'vuex'
import * as types from '../../store/mutation-types.js'
// import BScroll from 'better-scroll'
import activityService from 'src/api/activity-service'
export default {
  mixins: [loginMixin],
  data () {
    return {
      MOBILE_HOST: process.env.MOBILE_HOST,
      searchParams: {
        page: 1,
        pageSize: 15,
        totalPage: 0
      },
      tableList: [],
      total: 0,
      imgHost: process.env.IMGHOST + '/'
    }
  },
  mounted () {
    if (this.getLoginInfo()) {
      this.storeLoginInfo(this.getLoginInfo())
    } else {
      this.$router.replace('/user')
    }
    this.getDataList()
    this.scrollEvent = this.debounce(e => {
      if (this.$refs.bscroll.offsetHeight + this.$refs.bscroll.scrollTop > this.$refs.bscroll.scrollHeight - 100) {
        this.getDataList()
      }
    }, 50)
    // this.initScroll()
  },
  computed: {
    ...mapState('login', {
      loginInfo: state => state.loginInfo
    })
  },
  props: {
  },
  watch: {
  },
  methods: {
    ...mapMutations('login', {
      storeLoginInfo: types.LOGIN_INFO
    }),
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
    getDataList () {
      this.$get(activityService.GET_ACTIVITY_LIST, this.searchParams).then((res) => {
        res.data.list.map((item, indx) => {
          if (item.imgUrl) {
            item.imgUrl = this.$imgHost + '/' + item.imgUrl
          } else {
            item.imgUrl = '//cnstatic01.e.vhall.com/static/img/v35-webinar.png'
          }
          return item
        })
        res.data.list.forEach(element => {
          this.tableList.push(element)
        })
        this.total = res.data.total
        this.searchParams.page = parseInt(res.data.currPage) + 1
        this.searchParams.totalPage = res.data.totalPage
      })
    }
    // ,
    // initScroll () {
    //   let _this = this
    //   this.$nextTick(() => {
    //     let bscrollDom = this.$refs.bscroll
    //     this.aBScroll = new BScroll(bscrollDom, {
    //       'scrollbar': true,
    //       'click': true,
    //       'mouseWheel': true,
    //       'probeType ': 3,
    //       'pullup': true
    //       // 当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
    //     })

    //     this.aBScroll.on('scrollEnd', () => {
    //       // 滚动到底部
    //       if (this.aBScroll.y <= (this.aBScroll.maxScrollY)) {
    //         if (_this.searchParams.page <= _this.searchParams.totalPage) {
    //           _this.getDataList()
    //         }
    //       }
    //     })
    //   })
    // }
  }
}
</script>
<style lang="scss" scoped>
.v-activity-list {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  .v-return-userinfo {
    background-color: #f5f5f5;
    display: block;
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 32px;
    color: #222;
    padding: 0 30px;
  }
  .v-list {
    width: 100%;
    overflow: auto;
    height: 100%;
    flex: 1;
    position: relative;
    -webkit-overflow-scrolling: touch;
    li {
      width: 100%;
      height: 250px;
      background-color: #fff;
      border-bottom: 1px solid #e2e2e2;
      a {
        display: flex;
        width: 100%;
        height: 100%;
        padding: 34px;
        .v-activity-img {
          width: 323px;
          height: 182px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            border-radius: 8px;
          }
          .live-state {
            display: block;
            padding: 8px 15px;
            font-size: 20px;
            color: #fff;
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: rgba(0, 0, 0, 0.6);
            border-radius: 50px;
            .live-point {
              vertical-align: middle;
              display: inline-block;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background-color: #fc5659;
              margin-right: 8px;
            }
          }
        }
        .v-content-block {
          flex: 1;
          max-width: 356px;
          padding: 8px 0 8px 20px;
          .v-title {
            font-size: 28px;
            color: #222;
            overflow: hidden;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .v-label-div {
            span {
              padding: 8px 15px;
              background-color: #f0f1fe;
              border: 1px solid #dbdefd;
              font-size: 20px;
              color: #555555;
              border-radius: 50px;
              margin: 20px 10px 0 0;
              display: inline-block;
            }
          }
          .v-sponsor {
            font-size: 24px;
            color: #555555;
            margin-top: 20px;
          }
          .v-time {
            color: #888888;
            font-size: 21px;
            margin-top: 26px;
          }
        }
      }
    }
  }
}
</style>
