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
    ul.final
      li.final__sum Промежуточный итог по корзине: {{ subtotal }} &#x20bd;
      li.final__tax В том числе НДС: {{ Math.round(tax) }}  &#x20bd;
      li.final__total Итого: {{ Math.round(inTotal) }} &#x20bd;
    pre {{ totalCost }}
</template>

<script>
  import TableRemoveBtn from "@/components/TableRemoveBtn";
  import TableRow from "@/components/TableRow"
  // import json from "../data/goods";

  export default {
    name: "Table",
    components: {TableRow, TableRemoveBtn},
    data() {
      return {
        goods: [],
        totalCost: [
          {
            id: 0,
            count: 1,
            sum: 0
          },
          {
            id: 1,
            count: 1,
            sum: 0

          },
          {
            id: 2,
            count: 1,
            sum: 0
          },
        ]
      }
    },
    methods: {
      findPrice(id) {
        return this.goods.forEach(item => {
          // return item.id === id ? item.price : 0
          if (item.id === id ) {
            return item.price
          }
        })
        // return this.goods.filter(item => item.id === id ? item.price : 0)
        // return this.goods.forEach(item => item.id === id ? item.price : 0)
      },
      changeSumInGood(id, count){
        // let currentId = this.goods.forEach(good => good.id === id ? good.price : 0);
        console.log(this.findPrice(id));
        this.totalCost.map(item => {
          if (item.id === id) {
            item.count = count;
            item.sum = count * this.findPrice(id)
          }
        });

      },
    },
    computed: {
      subtotal() {
        let sum = 0;
        this.totalCost.map(item => {
          sum += item.sum
        });
        return sum
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
      // for (let item of this.goods) {
      //
      // }
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