<template>
  <div class="kind">
    <div class="head">
      <search></search>
    </div>
    <div class="content">
      <div class="kind-list">
        <ul>
          <li :class="{'active':0 === index}" @click="changeKind(0)">全部</li>
          <li v-for="(item, ind) in kindList" :class="{'active':item.id === index}" @click="changeKind(item.id)">{{item.name}}</li>
        </ul>
      </div>
      <div class="good-list">
        <div v-for="item in goodKindInfo">
          <GoodInfo :goodInfo="item" @addCart="addCart(item.id)"></GoodInfo>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
    <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade">
       <div class="pop-con">{{popContent}}</div>
    </mt-popup>
  </div>
</template>

<script>
  import Search from '../../components/search'
  import kind from 'src/api/kind'
  import cart from 'src/api/cart'
  import goods from 'src/api/goods'
  import GoodInfo from 'src/components/good-info'
  import EventBus from '../../utils/eventBus'
  export default {
    name: 'kind',
    components: { Search, GoodInfo },
    data () {
      return {
        kindList: [],
        index: 0,
        goodInfo: [],
        goodKindInfo: [],
        popupVisible: false,
        popContent: '',
        timer: null
      }
    },
    methods: {
      changeKind (id) {
        this.index = id
        // 根据kind的id查询数据
        this.goodKindInfo = []
        if (id === 0) {
          this.goodKindInfo = this.goodInfo
        } else {
          for (let i = 0; i < this.goodInfo.length; i++) {
            if (this.goodInfo[i].kindId === id) {
              this.goodKindInfo.push(this.goodInfo[i])
            }
          }
        }
      },
      // 获取净菜的分类
      queryKind () {
        this.$http.get(kind.GET_KIND_INFO, {}).then((res) => {
          if (res.status === 200) {
            this.kindList = res.data
          }
        })
      },
      queryGoodInfo () {
        this.$http.get(goods.GET_GOODS_INFO, {}).then(res => {
          if (res.status === 200) {
            this.goodInfo = res.data
            this.goodKindInfo = this.goodInfo
          }
        })
      },
      addCart (goodId) {
        // alert(goodId)
        this.$http.get(cart.GET_CART_ADD, {
          params: {
            'userId': 1,
            'goodId': goodId,
            'number': 1
          }
        }).then((res) => {
          if (res.status === 200) {
            this.popContent = res.data
            this.popupVisible = true
            // if (this.timer) return
            this.timer = setTimeout(function () {
              clearTimeout(this.timer)
              this.timer = null
              this.popupVisible = false
            }, 3000)
          }
        })
      }
    },
    created () {
      this.queryKind()
      this.queryGoodInfo()
      EventBus.$on('kindId', (data) => {
        this.index = data
        // console.log(this.index)
      })
    }
  }
</script>

<style scoped lang="scss">
@import '~assets/css/variable.scss';
.kind {
  .head {
    width: 100%;
    position: fixed;
    top: 80px;
    background-color: #efefef;
    height: 90px;
    border-bottom: 1px solid #8E9198;
  }
  .content {
    width: 100%;
    margin-top: 91px;
    background-color: #fff;
    .kind-list {
      position: fixed;
      height: 100%;
      background-color: #efefef;
      li {
        width: 160px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        &.active {
          background-color: #fff;
          border-left: 4px solid $color-default;
        }
      }
    }
    .good-list {
      height: 100%;
      margin-left: 170px;
      padding-right: 20px;
      /*overflow-y: auto;*/
      margin-top: 20px;

    }
  }
  .pop-con {
    min-width: 400px;
    max-width: 500px;
    height: 100px;
    line-height: 80px;
    padding: 10px 20px;
    text-align: center;
    border-radius: 50px;
    background: rgba(0,0,0,0.8);
    color: #fff;
  }
  /deep/ {
    .v-modal {
      opacity: 0;
    }
    .mint-popup {
      background-color: transparent;
    }
  }
}

</style>
