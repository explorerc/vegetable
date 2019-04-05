<template>
  <div>
    <div class="search-input">
      <div class="input-bg">
        <i class="iconfont icon-search" @click="search()"></i>
        <input class="searchInput"
                v-model="searchKey"
                type="search"
                @keypress="keySearch"
                @focus="inputFocus"
                placeholder="请输入关键字进行搜索"
                :result.sync="searchResult">
      </div>
      <button @click="search()" class="search-btn">搜索</button>
    </div>
    <div class="search-result" v-if="searchResult">
      <slot></slot>
    </div>
  </div>

</template>

<script>
  import EventBus from 'src/utils/eventBus'
  export default {
    name: 'search',
    props: {
      isSearchPage: {
        default: false,
        type: Boolean
      }
    },
    data () {
      return {
        searchKey: '', // 用户输入的关键字
        searchResult: '', // 搜索的结果
        searchPage: true
      }
    },
    methods: {
      search () {
        // console.log(this.searchKey)
        this.$emit('search', this.searchKey)
      },
      keySearch (event) {
        if (event.keyCode === 13) {
          // alert('12313')
          this.search()
        }
      },
      inputFocus () {
        // debugger
        this.searchPage = this.isSearchPage
        if (!this.searchPage) {
          EventBus.$emit('currentTabComponent', 'SearchPage')
          // this.emit('inputFocus')
        }
      }
    },
    watch: {
      // isSearchPage: {
      //   haandler (val, newVal) {
      //     if (!val) {
      //       EventBus.$emit('currentTabComponent', 'SearchPage')
      //     }
      //   }
      // }
    }
  }
</script>

<style scoped lang="scss">
  @import '~assets/css/variable.scss';
  .search-input /deep/ {
    position: relative;
    height: 60px;
    width: 90%;
    margin: 10px auto;
    border-radius: 10px;
    .icon-search {
      background-color: #fff;
      margin-left: 10px;
    }
    .input-bg {
      display: inline-block;
      width: 87%;
      height: 100%;
      border-radius: 10px;
      border: 1px solid #dedfe6;
      background-color: #fff;
    }
    input {
      height: 100%;
      width: 90%;
      padding: 0 10px;
      border: none;
      &[type=search]::-webkit-search-cancel-button{
        /*-webkit-appearance: none;//此处只是去掉默认的小×*/
        color: #333;
      }
    }
    button {
      display: inline-block;
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 10%;
      border: none;
      border-radius: 10px;
      margin-left: 5px;
      background-color: $color-default;
      color: #fff;

    }
  }
</style>
