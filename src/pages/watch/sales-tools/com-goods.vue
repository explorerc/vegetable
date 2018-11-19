<template>
  <div class="goods-box">
    <!--置顶-->
    <div class='top_item' v-for="(ite,indr) in goodsList" :class="item_w"
         :key="`top${indr}`" v-show="ite.added === '1' && ite.top === '1'">
      <span class="index">置顶</span>
      <div class="cov_img">
        <img class="cover_img" :src="`${$imgHost}/${ite.image}`">
      </div>
      <div>
        <h4 class="item-title">{{ite.title}}</h4>
        <p class="item-price">
          <span>￥{{ite.preferential}}</span>
          <del>￥{{ite.price}}</del>
        </p>
        <h4 class="item-des">{{ite.describe}}</h4>
        <com-button class="primary-button" @click="goInfo({goods_id:ite.goods_id,type:0})">查看详情</com-button>
      </div>
    </div>
    <!--未置顶-->
    <div class='item' v-for="(ite,ind) in goodsList" :class="item_w" :key="ind"
         v-show="ite.added === '1' && ite.top !== '1'">
      <span class="index">{{ite.number<10?`0${ite.number}`:ite.number}} </span>
      <div class="cov_img">
        <img class="cover_img" :src="`${$imgHost}/${ite.image}`">
      </div>
      <div>
        <h4 class="item-title">{{ite.title}}</h4>
        <p class="item-price">
          <span>￥{{ite.preferential}}</span>
          <del>￥{{ite.price}}</del>
        </p>
        <h4 class="item-des">{{ite.describe}}</h4>
        <com-button class="primary-button" @click="goInfo({goods_id:ite.goods_id,type:0})">查看详情</com-button>
      </div>
    </div>
    <!--弹框-->
    <message-box v-if="buyShow"
                 width="700px"
                 header=''
                 confirmText=''
                 class="v-questions-box"
                 @handleClick="saveQuestions">
      <div class="v-content">
        <div class="v-hearder">
          <div class="buyImg">
            <el-carousel>
              <el-carousel-item v-for="(item,ind) in goodsInfo.image">
                <img :src="`${$imgHost}/${item.name}`" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="buyInfo">
            <h4 class="item-title">{{goodsInfo.title}}</h4>
            <p class="item-price">
              <span>￥{{goodsInfo.preferential}}</span>
              <del>￥{{goodsInfo.price}}</del>
            </p>
            <h4 class="item-des">{{goodsInfo.describe}}</h4>
            <com-button class="primary-button" @click="goBuy({goods_id:goodsInfo.goods_id,type:0})">立即购买</com-button>
          </div>
        </div>
      </div>
    </message-box>
  </div>
</template>

<script>
  import GoodsService from 'src/api/activity-service'

  export default {
    props: ['goodsMsg'],
    created () {
      this.getGoodsList()
      console.log(this.$route.params.id, 777)
    },
    watch: {
      goodsMsg: {
        handler (val, oldval) {
          this.setStatus(val)
        },
        immediate: true
      }
    },
    data () {
      return {
        goodsInfo: {},
        buyShow: false,
        goodsTopNum: 0, // 商品上架数量
        activityId: this.$route.params.id,
        screenWidth: document.documentElement.clientWidth, // 屏幕宽度
        goodsList: [],
        item_1: 'item_1',
        item_2: 'item_2',
        item_3: 'item_3',
        item_4: 'item_4'
      }
    },
    computed: {
      item_w () {
        if (this.goodsTopNum === 1) {
          return [this.item_1]
        } else if (this.goodsTopNum === 2) {
          return [this.item_2]
        } else if (this.goodsTopNum === 3) {
          return [this.item_3]
        } else {
          return [this.item_4]
        }
      }
    },
    methods: {
      getGoodsList () {
        //   this.$get(salesService.GET_VISITED_CARD,
        this.$get(GoodsService.GET_WATCH_GOODS_LIST, { activity_id: this.activityId })
          .then(res => {
            this.goodsTopNum = null
            res.data.forEach((ite, ind) => {
              if (ite.image) {
                ite.image = JSON.parse(ite.image)[0].name
              }
              if (ite.added === '1') {
                this.goodsTopNum += 1
              }
            })
            this.goodsList = res.data
            console.log(this.goodsList)
          })
      },
      setStatus (val) {
        console.log(val, '23456789')
        this.goodsTopNum = null
        this.goodsList.forEach((ite, ind) => {
          ite.top = '0'
          if (val.type === 'GOODS_ADDED' && (ite.goods_id === val.goods_id)) {
            ite.added = val.status
          } else if (val.type === 'GOODS_TOP' && (ite.goods_id === val.goods_id)) {
            ite.top = val.status
          }
          if (ite.added === '1') {
            this.goodsTopNum += 1
          }
        })
        console.log(this.goodsList, '09876543876543')
        console.log(this.goodsTopNum, 'goodsNumgoodsNumgoodsNum')
      },
      goInfo (params) {
        this.buyShow = true
        this.$get(GoodsService.GET_WATCH_GOODS_DETAIL, { goods_id: params.goods_id })
          .then((res) => {
            res.data.image = JSON.parse(res.data.image)
            this.goodsInfo = res.data
            console.log(this.goodsInfo)
          })
      },
      goBuy (params) {
        params.activity_id = this.activityId
        this.$get(GoodsService.GOODS_VISIT, params)
          .then((res) => {
            console.log(res)
            this.buyShow = false
          })
      },
      saveQuestions (e) {
        if (e.action === 'cancel') {
          this.buyShow = false
        } else if (e.action === 'confirm') { // 点击确定
          console.log('buy')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '~assets/css/mixin.scss';

  .goods-box {
    margin: 0 auto;
    /* 设备宽度大于 1600 */
    @media all and (min-width: 1600px) {
      width: 1687px;
    }

    /* 设备宽度小于 1600px */
    @media all and (max-width: 1600px) {
      width: 1132px;
    }
    /deep/ {
      margin-top: 30px;
      margin-bottom: 60px;
      display: flex;
      flex: 1;
      justify-content: space-between;
      .item, .top_item {
        display: inline-block;
        overflow: hidden;
        border: 1px solid #ccc;
        border-radius: 4px;
        position: relative;
        span.index {
          position: absolute;
          top: 0;
          left: 0;
          background-color: #FFD021;
          color: $color-font;
          width: 50px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          border-radius: 0 0 50% 0;
          z-index: 1000;
        }
        &:hover {
          box-shadow: 0 0 10px 5px #e2e2e2;
          transform: translate(-5px, -5px);
          transition: all 0.5s;
        }
        img {
          border-radius: 4px;
        }
        div {
          /*padding: 10px 15px;*/
          .item-title {
            font-size: 18px;
            height: 48px;
            line-height: 24px;
            overflow: hidden;
          }
          .item-price {
            height: 26px;
            line-height: 26px;
            margin: 5px auto;
            span {
              font-size: 22px;
              color: rgba(252, 86, 89, 1);
            }
            del {
              margin-left: 4px;
              font-size: 18px;
              color: rgba(136, 136, 136, 1);
            }
          }
          .item-des {
            color: rgba(136, 136, 136, 1);
            font-size: 14px;
            font-weight: 400;
            margin-top: 8px;
          }
          button {
            margin: 20px 0;
          }
        }
      }
      .item_1 {
        width: 100%;
        padding: 20px;
        img {
          float: left;
          width: 280px;
          height: 280px;
          margin-right: 30px;
        }
        > div:nth-of-type(2) {
          margin-top: 5px;
          .item-title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item-des {
            height: 88px;
            line-height: 22px;
            overflow: hidden;
          }
        }
      }
      .item_2 {
        width: 49.5%;
        padding: 20px;
        img {
          float: left;
          width: 280px;
          height: 280px;
          margin-right: 20px;
        }
        > div:nth-of-type(2) {
          margin-top: 5px;
          .item-title {
            height: 48px;
            line-height: 24px;
            overflow: hidden;
          }
          .item-des {
            height: 66px;
            line-height: 22px;
            overflow: hidden;
          }
        }
      }
      .item_3 {
        width: 32%;
        padding: 20px;
        .cov_img {
          /*width: 100%;*/
          /*position: relative;*/
          /* &::before {
             display: inline-block;
             content: '';
             padding-top: 100%;
           }*/
          img {
            float: left;
            width: 240px;
            height: 240px;
            margin-right: 20px;
            /*  position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;*/
          }
        }
        > div:nth-of-type(2) {
          /*margin-top: 5px;*/
          /*padding: 10px 0;*/
          .item-title {
            height: 48px;
            line-height: 24px;
            overflow: hidden;
          }
          .item-des {
            height: 66px;
            line-height: 22px;
            overflow: hidden;
          }
          /* button{
             display: block;
             margin: auto;
           }*/
        }
      }
      .item_4 {
        width: 24%;
        padding: 20px;
        .cov_img {
          width: 100%;
          position: relative;
          &::before {
            display: inline-block;
            content: '';
            padding-top: 100%;
          }
          img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
          }
        }
        > div:nth-of-type(2) {
          margin-top: 5px;
          padding: 10px 0;
          .item-title {
            height: 48px;
            line-height: 24px;
            overflow: hidden;
          }
          .item-des {
            height: 88px;
            line-height: 22px;
            overflow: hidden;
          }
          button {
            display: block;
            margin: auto;
          }
        }
      }
      .ve-message-box {
        height: 300px;
        &::before {
          content: '';
          height: 0;
        }
        padding: 0;
        .buyImg {
          width: 310px;
          height: 310px;
          float: left;
          margin-right: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .buyInfo {
          margin-right: 20px;
          .item-title {
            font-size: 18px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            &::before {
              content: '';
              height: 40px;
              display: block;
            }
          }
          .item-price {
            height: 26px;
            line-height: 26px;
            margin: 5px auto;
            span {
              font-size: 22px;
              color: rgba(252, 86, 89, 1);
            }
            del {
              margin-left: 15px;
              font-size: 18px;
              color: rgba(136, 136, 136, 1);
            }
          }
          .item-des {
            color: rgba(136, 136, 136, 1);
            font-size: 14px;
            font-weight: 400;
            margin-top: 8px;
            line-height: 22px;
            height: 132px;
            overflow: hidden;
            word-break: break-all
          }
        }
        .ve-message-box__header {
          padding: 0;
        }
        .ve-message-box__container {
          padding: 0;
        }
        .ve-message-box__btns {
          display: none;
        }
      }

      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }
    }
  }
</style>
