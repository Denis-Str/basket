<template lang="pug">
  div
    table.table
      tr.table__head
        th(colspan="3").table__count Выделено 45
        th(colspan="3").table__remove
          table-remove-btn
      table-row(
        v-for="good in goods"
        :good="good"
        @sumInRow="changeSumInGood"
      )
    pre {{ goods }}
    ul.final
      li.final__sum Промежуточный итог по корзине: {{ subtotal }} &#x20bd;
      li.final__tax В том числе НДС: {{ Math.round(tax) }}  &#x20bd;
      li.final__total Итого: {{ Math.round(inTotal) }} &#x20bd;
</template>

<script>
  import TableRemoveBtn from "@/components/TableRemoveBtn";
  import TableRow from "@/components/TableRow"
  import json from "../data/goods";

  export default {
    name: "Table",
    components: {TableRow, TableRemoveBtn},
    data() {
      return {
        goods: [],
      }
    },
    methods: {
      changeSumInGood(sumId){
        this.goods.map((item)=> {
          if (item.id === sumId.id) {
            item.sum = 0;
            item.sum = sumId.sum;
          }
        });
      },

    },
    computed: {
      subtotal() {

        return this.goods[0].sum
      },
      tax() {
        return this.subtotal * 0.18;
      },
      inTotal() {
        return this.tax + this.subtotal
      },
    },
    created() {
      this.goods = require("../data/goods.json");
      for (let key of json) {
        key.sum = 0;
      }
    }
  }

</script>

<style scoped>
  .table {
    width: 100%;
    border-collapse: collapse;
  }
</style>

<!--:tableSum="tableSum"

:sum123="good.sum"-->