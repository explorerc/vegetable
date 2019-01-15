<template>
  <div class="home">
    <Carousel></Carousel>
    <Search></Search>
  </div>
</template>

<script>
import Carousel from '../../components/carousel'
import Search from '../../components/search'
export default {
  components: { Carousel, Search },
  data () {
    return {
      searchValue: '' // 查找的关键字
    }
  }
}
</script>
<style lang="scss" scoped>
.home /deep/ {

}
</style>
