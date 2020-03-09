<template lang="pug">
  tr().table__row
    td(
      class="table__cell"
    ) {{good.id + 1}}
        input(
          type="checkbox"
          @change.self.prevent="checkedGood"
        )
    td(
      class="table__cell img"
    )
      img(

      )
    td(
      class="table__cell desc"
    ) {{ good.content }}
    td(
      class="table__cell price"
    ) {{ good.price }} &#x20bd; x
    td(
      class="table__cell value"
      @click.self.prevent="isShow = true"
    ) {{good.count}}
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
    ) = {{ good.totalPrice }} &#x20bd;
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

<style scoped>

  .table__row {
    position: relative;
    height: 75px;
  }
  .value {
    position: relative;
    cursor: pointer;
  }
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
</style>