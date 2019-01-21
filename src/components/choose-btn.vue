<template>
    <div class="choose-btn">
        <div class="choose-amount">
            <button class="minus" @click="minusNumberClick">-</button><input type="number" :value="goodsAmount"><button class="add" @click="addNumberClick">+</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'choose-btn',
    data () {
      return {
      }
    },
    props: {
      goodsAmount: {
        type: Number,
        default: 0
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
.choose-btn {
    display: inline-block;
    font-size: 32px;
    input,button {
        border: none;
        background-color: #fff;
        padding: 10px 20px;
    }
    .choose-amount {
        border: 1px solid #8E9198;
        .minus {
            border-right: 1px solid #8E9198;
        }
        input {
            display: inline-block;
            width: 80px;
            text-align: center;
        }
        .add {
            border-left: 1px solid #8E9198;
        }
    }
}
</style>