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
  import kind from 'src/api/kind'
  export default {
    name: 'kind',
    components: { Search },
    data () {
      return {
        kindList: [],
        index: 0
      }
    },
    methods: {
      changeKind (index, id) {
        this.index = index
        // 根据kind的id查询数据
        console.log(id)
      },
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
