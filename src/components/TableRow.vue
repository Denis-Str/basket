<template lang="pug">
  tr().table__row
    td(
      class="table__cell"
    ) {{good.id + 1}}
      table-row-check(
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
    ) {{count}}
      change-quantity-goods(
        v-show="isShow"
        :count="count"
        :price="good.price"
        :changeSum="changeSum"
        :cancelBuy="cancelBuy"
        :countUp="changeCountUp"
        :countDown="changeCounterDown"
      )
    td(
      class="table__cell sum"
    ) = {{ sumRow }} &#x20bd;
</template>

<script>
  import TableRowCheck from "@/components/TableRowCheck";
  import ChangeQuantityGoods from "@/components/ChangeQuantityGoods";

  export default {
    name: "TableRow",
    data() {
      return {
        count: 0,
        isShow: false,
      }
    },
    props: {
      good: Object,

    },
    components: {ChangeQuantityGoods, TableRowCheck},
    computed: {
      sumRow() {
        return this.good.price * this.count
      }
    },
    methods: {
      changeCountUp() {
        this.count += 1
      },
      changeCounterDown() {
        (this.count > 0 ) ? this.count -= 1 : this.count = 0;
      },
      changeSum() {
        this.isShow = false;
        this.$emit('sumInRow', this.good.id, this.count);
      },
      cancelBuy() {
        this.count = 0;
        this.sumRow = 0;
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