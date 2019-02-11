<template>
  <div class="number-btn">
    <div class="choose-amount">
      <button class="minus" @click="minusNumberClick" :disabled="goodsAmount<=1">-</button><input type="number" :value="goodsAmount"><button class="add" @click="addNumberClick" :disabled="goodsAmount>=maxNumber">+</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'choose-btn',
    data () {
      return {}
    },
    props: {
      goodsAmount: {
        type: Number,
        default: 0
      },
      maxNumber: {
        type: Number,
        default: 10000
      }
    },
    methods: {
      minusNumberClick () {
        this.$emit('minusNumberClick')
      },
      addNumberClick () {
        this.$emit('addNumberClick')
      }
    }
  }
</script>

<style scoped lang="scss">
  .number-btn {
    display: inline-block;
    font-size: 32px;
    background-color: #fff;
    border-radius: 10px;
    input, button {
      border: none;
      padding: 10px 20px;
      background-color: transparent;
    }
    .choose-amount {
      .minus {
        border: 1px solid #8E9198;
        border-radius: 10px 0 0 10px;
        &[disabled] {
          opacity: 0.5;
        }
      }
      input {
        border: 1px solid #8E9198;
        border-left: none;
        border-right: none;
        display: inline-block;
        width: 80px;
        text-align: center;
      }
      .add {
        border: 1px solid #8E9198;
        border-radius: 0 10px 10px 0;
      }
    }
  }
</style>
