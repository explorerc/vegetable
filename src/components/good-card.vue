<template>
  <div class="good-card">
    <h3>--{{cardTitle}}--</h3>
    <div class="card-content">
      <div class="card-item" v-for="item in goods" v-if="item.id <= 2" @click="goodInfo">
        <img src="../assets/image/vegetable01.jpg" alt="">
        <p class="good-name">{{item.name}}</p>
        <div class="price-box">
          <span class="price">¥{{item.price}}</span>
          <span class="del-price">¥<span class="del-line">{{item.disprice}}</span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      goodInfo () {
        alert('123123')
        // this.$router.replace('/salesTools/questionnaire/edit/' + this.activityId + '/' + naireId)
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
    .card-content {
      padding: 20px;
      display: flex;
      margin-top: 10px;
      justify-content: space-between;
      background-color: #AA141F;
    }
    .card-item {
      display: inline-block;
      width: 48%;
      text-align: center;
      background-color: #FFF2E2;
      border-radius: 10px;
      padding-bottom: 10px;
      .good-name {
        padding: 0 20px;
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行
        margin-bottom: 10px;
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

    }
  }
</style>
