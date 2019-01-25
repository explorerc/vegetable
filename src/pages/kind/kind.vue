<template>
  <div class="kind">
    <div class="head">
      <search></search>
    </div>
    <div class="content">
      <div class="kind-list">
        <ul>
          <li v-for="(item, ind) in kindList" :class="{'active':ind === index}" @click="changeKind(ind,item.id)">{{item.name}}</li>
        </ul>
      </div>
      <div class="good-list">
        <ul>
          <li v-for="(item,ind) in kindList">{{item.name}}</li>
        </ul>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
  import Search from '../../components/search'
  export default {
    name: 'kind',
    components: { Search },
    data () {
      return {
        kindList: [
          { id: 0, type: 'all', name: '全部' },
          { id: 1, type: 'vegetable', name: '蔬菜' },
          { id: 2, type: 'fruit', name: '水果' },
          { id: 3, type: 'meat', name: '肉' },
          { id: 4, type: 'mushroom', name: '菌类' },
          { id: 5, type: 'seafood', name: '海鲜' },
          { id: 6, type: 'rice', name: '原粮' },
          { id: 7, type: 'collocate', name: '搭配' },
          { id: 8, type: 'present', name: '礼盒' }
        ],
        index: 0
      }
    },
    methods: {
      changeKind (index, id) {
        this.index = index
        // 根据kind的id查询数据
        console.log(id)
      }
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
      height: 1500px;
      margin-left: 160px;
      overflow-y: auto;
    }
  }

}
</style>
