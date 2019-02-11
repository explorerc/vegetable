<template>
  <div class="good-card">
    <h3>--{{cardTitle}}--</h3>
    <div class="con-bg">
      <div class="card-content">
        <div class="card-item" v-for="item in goods" @click="goodDetail(item.id)">
          <img :src="item.imgUrl" alt="">
          <p class="good-name">{{item.name}}</p>
          <div class="price-box">
            <span class="price" v-if="item.disprice">¥{{item.disprice}}</span>
            <span class="price" v-else>¥{{item.price}}</span>
            <span class="del-price" v-if="item.disprice">¥<span class="del-line">{{item.price}}</span></span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import EventBus from 'src/utils/eventBus'
  export default {
    name: 'good-card',
    props: {
      cardTitle: {
        type: String
      },
      goods: {
        type: Array
      },
      tableType: {
        type: String
      }
    },
    methods: {
      goodDetail (id) {
        // alert('123123')
        // this.$router.push(`/goodDetail/${id}`)
        EventBus.$emit('currentTabComponent', 'goodDetail')
        setTimeout(() => {
          EventBus.$emit('goodsId', id)
        }, 0)
      }
    }
  }
</script>

<style scoped lang="scss">
  .good-card {
    margin-top: 20px;
    background-color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    h3 {
      color: #E20816;
    }
    .con-bg {
      padding: 20px;
      background-color: #AA141F;
    }
    .card-content {
      display: flex;
      margin-top: 10px;
      justify-content: space-between;
      overflow-x: auto;
      border-radius: 10px;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .card-item {
      display: inline-block;
      width: 44%;
      text-align: center;
      background-color: #FFF2E2;
      border-radius: 10px;
      padding: 10px 0;
      margin-right: 20px;
      .good-name {
        padding: 0 10px;
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出s不换行
        margin-bottom: 5px;
        color: #333;
      }
      .price-box {
        .price {
          font-size: 36px;
          color: #FE2955;
          font-weight: 600;
        }
        .del-price {
          margin-left: 20px;
        }
      }
      img {
        width: 60%;
      }

    }
  }
</style>
