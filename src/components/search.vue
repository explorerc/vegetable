<template>
  <div class="search">
    <mt-search
      v-model="searchKey"
      placeholder="请速入关键字进行搜索"
      :result.sync="searchResult">
      <mt-cell
        v-for="item in searchResult"
        :title="item.title"
        :value="item.value">
      </mt-cell>
    </mt-search>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data () {
      return {
        searchKey: '', // 用户输入的关键字
        searchResult: '' // 搜索的结果
      }
    }
  }
</script>

<style scoped lang="scss">
  .search /deep/ {
    .mint-search {
      position: relative;
      width: 90%;
      margin: 10px auto;
      .mint-searchbar {
        background-color: #efefef;
        input {
          padding-left: 10px;
          &[type=search]::-webkit-search-cancel-button{
            -webkit-appearance: none;//此处只是去掉默认的小×
          }
        }
      }
      .mint-searchbar-inner {
        height: 60px;
        border-radius: 10px;
      }
    }
  }
</style>
