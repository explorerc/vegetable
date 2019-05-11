<template>
  <div class="home"  v-title data-title="首页">
    <div class="block">
      <span class="demonstration"></span>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in imgList" :key="item.id">
          <img :src="item.idView" alt=""  @click="swipeClick(item.id)">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <Search :isSearchPage="isSearchPage" @inputFocus="isSearchPage=false"></Search>
    <div class="vg-category-bg">
      <div class="vg-category">
        <ul class="cat-list">
          <li v-for="item in kindList" @click="kindClick(item.id)">
            <div>
              <i></i>
            </div>
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <GoodCard
        :cardTitle="'今日特卖'"
        :goods="discountGoods"
      ></GoodCard>
      <GoodCard
        :cardTitle="'礼包嘉年华'"
        :goods="presentGoods"
      ></GoodCard>
      <GoodCard
        :cardTitle="'绿色蔬菜'"
        :goods="greenGoods"
      ></GoodCard>
    </div>
  </div>
</template>

<script>
// import Carousel from '../../components/carousel'
import Search from '../../components/search'
import GoodCard from '../../components/good-card'
import kind from 'src/api/kind'
import EventBus from 'src/utils/eventBus'
import goods from 'src/api/goods'
export default {
  components: { Search, GoodCard },
  data () {
    return {
      cardTitle: '',
      kindList: [],
      kindId: 8,
      discountGoods: [],
      presentGoods: [],
      greenGoods: [],
      keyType: 0,
      goodInfo: [],
      isSearchPage: false,
      imgList: [
        { id: 0, idView: require('../../assets/image/carousel1.jpg') },
        { id: 1, name: '详情', idView: require('../../assets/image/carousel2.jpg') },
        { id: 2, name: '推荐', idView: require('../../assets/image/carousel3.jpg') }
      ]
    }
  },
  methods: {
    // 获取净菜的分类
    queryKind () {
      this.$get(this.base_url + kind.GET_KIND_INFO, {}).then((res) => {
        if (res.code === 200) {
          this.kindList = res.data
        }
      })
    },
    // 点击分类
    kindClick (id) {
      this.kindId = id
      console.log(this.kindId)
      setTimeout(() => {
        EventBus.$emit('kindId', this.kindId)
      }, 0)
      EventBus.$emit('currentTabComponent', 'Kind')
      this.$emit('kindClick')
    },
    queryGoodInfo () {
      this.$get(goods.GET_GOODS_INFO).then(res => {
        if (res.code === 200) {
          this.goodInfo = res.data
          let len = this.goodInfo.length
          console.log(this.goodInfo[1].disprice)
          for (let i = 0; i < len; i++) {
            if (this.goodInfo[i].disPrice && this.discountGoods.length < 10) {
              this.discountGoods.push(this.goodInfo[i])
            }
            if (this.goodInfo[i].kindId === 1 && this.greenGoods.length < 10) {
              this.greenGoods.push(this.goodInfo[i])
            }
            if (this.goodInfo[i].kindId === 8 && this.presentGoods.length < 10) {
              this.presentGoods.push(this.goodInfo[i])
            }
          }
          // this.goodKindInfo = this.goodInfo
        }
      })
    },
    swipeClick (id) {
      switch (id) {
        case 0:
          EventBus.$emit('currentTabComponent', 'Coupon')
          break
        case 1:
          EventBus.$emit('currentTabComponent', 'Kind')
          break
        case 2:
          EventBus.$emit('currentTabComponent', 'Kind')
          break
      }
    }
  },
  created () {
    this.queryKind()
    this.queryGoodInfo()
  }
}
</script>
<style lang="scss" scoped>
  .mint-swipe {
    height: 150px;
    img {
      height: 100%;
      width: 100%;
    }
  }
.home /deep/ {
  .vg-category-bg {
    background-color: #fff;
    .vg-category {
      width: 90%;
      margin: 0 auto;
      background-color: #fff;
      .cat-list {
        li {
          display: inline-block;
          width: 25%;
          margin-top: 10px;
          text-align: center;
          i {
            display: inline-block;
            width: 60px;
            height: 60px;
            background-size: 100% 100%;
          }
          &:nth-child(1) {
            i {
              background-image: url("../../assets/image/vegetable.png");
            }
          }
          &:nth-child(2) {
            i {
              background-image: url("../../assets/image/fruit.png");
            }
          }
          &:nth-child(3) {
            i {
              background-image: url("../../assets/image/meat.png");
            }
          }
          &:nth-child(4) {
            i {
              background-image: url("../../assets/image/mushroom.png");
            }
          }
          &:nth-child(5) {
            i {
              background-image: url("../../assets/image/seafood.png");
            }
          }
          &:nth-child(6) {
            i {
              background-image: url("../../assets/image/rice.png");
            }
          }
          &:nth-child(7) {
            i {
              background-image: url("../../assets/image/collocate.png");
            }
          }
          &:nth-child(8) {
            i {
              background-image: url("../../assets/image/present.png");
            }
          }

        }
      }
    }
  }

}
</style>
