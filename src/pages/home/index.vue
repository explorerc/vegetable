<template>
  <div class="home">
    <Carousel></Carousel>
    <Search></Search>
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
import Carousel from '../../components/carousel'
import Search from '../../components/search'
import GoodCard from '../../components/good-card'
import kind from 'src/api/kind'
import EventBus from 'src/utils/eventBus'
import goods from 'src/api/goods'
export default {
  components: { Carousel, Search, GoodCard },
  data () {
    return {
      cardTitle: '',
      kindList: [],
      kindId: 8,
      discountGoods: [],
      presentGoods: [],
      greenGoods: [],
      keyType: 0,
      goodInfo: []
    }
  },
  methods: {
    // 获取净菜的分类
    queryKind () {
      this.$http.get(kind.GET_KIND_INFO, {}).then((res) => {
        if (res.status === 200) {
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
      }, 400)
      EventBus.$emit('currentTabComponent', 'kind')
      this.$emit('kindClick')
    },
    queryGoodInfo () {
      this.$http.get(goods.GET_GOODS_INFO, {}).then(res => {
        if (res.status === 200) {
          this.goodInfo = res.data
          let len = this.goodInfo.length
          console.log(this.goodInfo[1].disprice)
          for (let i = 0; i < len; i++) {
            if (this.goodInfo[i].disprice && this.discountGoods.length < 10) {
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
    }
  },
  created () {
    this.queryKind()
    this.queryGoodInfo()
  }
}
</script>
<style lang="scss" scoped>
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
