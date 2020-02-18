<template lang="pug">
  table.table
    th.table__head
      tr.table__count Выделено 45
      tr.table__remove
        table-remove-btn
    table-row(
      :good="good"
      v-for="good in goods"
    )
    table-sum-final
    table-sum-tax
    table-total
</template>

<script>
  import TableRemoveBtn from "@/components/TableRemoveBtn";
  import TableRow from "@/components/TableRow";
  import TableTotal from "@/components/TableTotal";
  import TableSumFinal from "@/components/TableSumFinal";
  import TableSumTax from "@/components/TableSumTax";
  export default {
    name: "Table",
    components: {TableSumTax, TableSumFinal, TableTotal, TableRow, TableRemoveBtn},
    data() {
      return {
        goods: []
      }
    },
    methods: {
      makeArrImg (goodsJson) {
        return goodsJson.map(item => {
          // const requiredPic = require(`../assets/images/goodsImg/${item.img}`);
          item.img = `../assets/images/goodsImg/${item.img}`;
          return item
        })
      },
    },
    created() {
      const goodsJson = require("../data/goods");
      // this.goods = goodsJson;
      // this.makeArrImg(this.goods)
      this.goods = this.makeArrImg(goodsJson);
    }
  }
</script>

<style scoped>

</style>