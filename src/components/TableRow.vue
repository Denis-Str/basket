<template lang="pug">
  tr().table__row
    td(class="table__cell table__cell-border-right checked")
      input(
        type="checkbox"
        @change.self.prevent="checkedGood"
        class="checkbox"
      )
      span {{good.id + 1}}
    td(class="table__cell table__cell-border-right img")
      img(

      )
    td(class="table__cell table__cell-border-right desc") {{ good.content }}
    td(class="table__cell price")
      span(style="padding-right: 7px") {{ good.price }} &#x20bd;
      span(v-show="isShow") x
    td(class="table__cell value")
      span(@click="isShow = true") {{good.count}}
      change-quantity-goods(
        v-show="isShow"
        :count="good.count"
        :price="good.price"
        :sum="good.totalPrice"
        :countUp="changeCountUp"
        :countDown="changeCounterDown"
        :saveBuy="saveBuy"
        :cancelBuy="cancelBuy"
      )
    td(
      class="table__cell sum"
    )
      span(v-show="isShow") =
      span(style="padding-left: 7px") {{ good.totalPrice }} &#x20bd;
</template>

<script>
  import ChangeQuantityGoods from "@/components/ChangeQuantityGoods";

  export default {
    name: "TableRow",
    data() {
      return {
        isShow: false,
      }
    },
    props: {
      good: Object,
    },
    components: {ChangeQuantityGoods},

    methods: {
      checkedGood(e) {
        this.good.checked = e.target.checked
      },
      changeCountUp() {
        this.good.count += 1
      },
      changeCounterDown() {
        (this.good.count > 0 ) ? this.good.count -= 1 : this.good.count = 0;
      },
      saveBuy() {
        this.isShow = false;
      },
      cancelBuy() {
        this.good.count = 0;
        this.isShow = false;
      }
    },
  }

</script>

<style lang="scss" scoped>
  .checkbox {
    margin-right: 20px;
  }
  .value {
    position: relative;
    cursor: pointer;
    span {
      width: 50px;
      height: 22px;
      box-shadow: inset 0 0 5px 0 rgba(9, 12, 18, 0.12);
      border: solid 1px #bdbdbd;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      border-radius: 5px;
    }
  }
  .table__cell {
    width: 8%;
    padding: 20px 0;
    border-collapse: collapse;
    vertical-align: middle;
    text-align: center;
    &-border-right {
      border-right: 1px dotted black;
    }
  }
  td {

  }
  .desc {
    width: 60%;
    text-align: left;
    padding-left: 20px;
  }
  .price {
    text-align: left;
    padding-left: 20px;
  }

</style>