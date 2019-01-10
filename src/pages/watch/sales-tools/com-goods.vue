<template>
  <div class="goods-box">
    <!--置顶-->
    <p class="header-title"><span>商品推荐 </span><i class="el-icon-arrow-down" @click="closeGoods"></i></p>
    <div class="goods-list-box">
      <div class="touch-scroll">
        <div class='top_item' v-for="(ite,indr) in goodsList"
             @click="goInfo({goods_id:ite.goods_id,type:0})"
             :key="`top${indr}`" v-show="ite.added === '1' && ite.top === '1'">
          <span class="index" style="font-size: 10px">TOP</span>
          <div class="cov_img" :style="{backgroundImage:`url(${$imgHost}/${ite.image})`}">
            <!--<img class="cover_img" :src="`${$imgHost}/${ite.image}`">-->
          </div>
          <div>
            <h4 class="item-title">{{ite.title}}</h4>
            <p class="item-price">
              <span v-show="ite.preferential !== '0.00' && ite.price !== '0.00'">￥{{ite.preferential}}</span>
              <span v-show="ite.preferential === '0.00' && ite.price !== '0.00'">￥{{ite.price}}</span>
              <span v-show="ite.preferential === '0.00' && ite.price === '0.00'">免费</span>
              <!--<del v-show="ite.preferential !== '0.00'">￥{{ite.price}}</del>-->
              <span v-show="ite.preferential !== '0.00'" class="del-price">￥<span class="del-line">{{ite.price}}</span></span>
              <i v-show="ite.price === '0.00'"></i>
            </p>
          </div>
        </div>
        <!--未置顶-->
        <div class='item' v-for="(ite,ind) in goodsList"
             @click="goInfo({goods_id:ite.goods_id,type:0})"
             v-show="ite.added === '1' && ite.top !== '1'">
          <span class="index">{{ite.number<10?`0${ite.number}`:ite.number}} </span>
          <div class="cov_img" :style="{backgroundImage:`url(${$imgHost}/${ite.image})`}">
            <!--<img class="cover_img" :src="`${$imgHost}/${ite.image}`">-->
          </div>
          <div>
            <h4 class="item-title">{{ite.title}}</h4>
            <p class="item-price">
              <span v-show="ite.preferential !== '0.00' && ite.price !== '0.00'">￥{{ite.preferential}}</span>
              <span v-show="ite.preferential === '0.00' && ite.price !== '0.00'">￥{{ite.price}}</span>
              <span v-show="ite.preferential === '0.00' && ite.price === '0.00'">免费</span>
              <!--<del v-show="ite.preferential !== '0.00'">￥{{ite.price}}</del>-->
              <span v-show="ite.preferential !== '0.00'" class="del-price">￥<span class="del-line">{{ite.price}}</span></span>
              <i v-show="ite.price === '0.00'"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import GoodsService from 'src/api/activity-service'
  // import EventBus from 'src/utils/eventBus.js'
  export default {
    props: ['goodsMsg'],
    created () {
      this.getGoodsList()
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
            this.$emit('goodsCount', this.goodsTopNum)
          })
      },
      setStatus (val) {
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
        this.$emit('goodsCount', this.goodsTopNum)
      },
      goInfo (params) {
        this.buyShow = true
        this.$emit('goodsInfo', params, 'lists')
      },
      closeGoods () {
        this.$emit('closeGoodList')
      }
    }
  }
</script>

<style scoped lang="scss">
@import '~assets/css/mixin.scss';
.header-title {
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid #cccccc;
  padding: 0 30px;
  span {
    color: #555555;
    font-size: 30px;
  }
  i {
    display: inline-block;
    height: 80px;
    line-height: 80px;
    float: right;
  }
}
.goods-list-box {
  height: calc(100% - 80px);
  .touch-scroll {
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.goods-box {
  /deep/ {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    .item,
    .top_item {
      display: inline-block;
      overflow: hidden;
      border-bottom: 1px solid #ccc;
      border-radius: 4px;
      position: relative;
      width: 100%;
      padding: 30px;
      background-color: white;
      span.index {
        position: absolute;
        top: 30px;
        left: 30px;
        background-color: #222222;
        color: white;
        width: 50px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 0 0 10px 0;
        z-index: 1;
        opacity: 0.8;
      }
      .cov_img {
        background: white no-repeat center;
        background-size: contain;
        border: 1px solid #e2e2e2;
        border-radius: 10px;
        float: left;
        width: 220px;
        height: 220px;
        margin-right: 20px;
      }
      div {
        /*padding: 10px 15px;*/
        .item-title {
          font-size: 32px;
          max-height: 90px;
          line-height: 45px;
          overflow: hidden;
        }
        .item-price {
          height: 26px;
          line-height: 26px;
          margin: 30px auto auto auto;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          span {
            font-size: 32px;
            color: rgba(252, 86, 89, 1);
          }
          .del-price {
            margin-left: 4px;
            font-size: 26px;
            color: rgba(136, 136, 136, 1);
            .del-line{
              position: relative;
              display: inline-block;
              font-size: 26px;
              color: rgba(136, 136, 136, 1);
              &:after{
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                left: 2px;
                width: 100%;
                height: 1px;
                background-color: #555;
              }
            }
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
          .del-price {
            margin-left: 15px;
            font-size: 18px;
            color: rgba(136, 136, 136, 1);
            .del-line{
              position: relative;
              display: inline-block;
              font-size: 18px;
              color: rgba(136, 136, 136, 1);
              &:after{
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                left: 2px;
                width: 100%;
                height: 1px;
                background-color: #555;
              }
            }
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
          word-break: break-all;
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

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }

  }
}
</style>
