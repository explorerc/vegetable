<template>
  <div class="home">
    <Carousel></Carousel>
    <Search></Search>
    <div class="vg-category-bg">
      <div class="vg-category">
        <ul class="cat-list">
          <li v-for="item in kindList">
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
        :goods="discountGoods"
      ></GoodCard>
      <GoodCard
        :cardTitle="'绿色蔬菜'"
        :goods="discountGoods"
      ></GoodCard>
    </div>
  </div>
</template>

<script>
import Carousel from '../../components/carousel'
import Search from '../../components/search'
import GoodCard from '../../components/good-card'
import kind from 'src/api/kind'
export default {
  components: { Carousel, Search, GoodCard },
  data () {
    return {
      cardTitle: '',
      kindList: [
      ],
      discountGoods: [
        { id: 1, name: '山东新鲜小芋头粉糯芋艿 农家自种毛芋头香芋子非大芋头仔5斤蔬菜', price: 16.90, disprice: 59.00 },
        { id: 2, name: '山东新鲜小芋头粉糯芋艿 农家自种毛芋头香芋子非大芋头仔5斤蔬菜', price: 16.90, disprice: 59.00 },
        { id: 3, name: '山东新鲜小芋头粉糯芋艿 农家自种毛芋头香芋子非大芋头仔5斤蔬菜', price: 16.90, disprice: 59.00 },
        { id: 4, name: '山东新鲜小芋头粉糯芋艿 农家自种毛芋头香芋子非大芋头仔5斤蔬菜', price: 16.90, disprice: 59.00 },
        { id: 5, name: '山东新鲜小芋头粉糯芋艿 农家自种毛芋头香芋子非大芋头仔5斤蔬菜', price: 16.90, disprice: 59.00 }
      ],
      keyType: 0
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
    }
  },
  created () {
    this.queryKind()
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
