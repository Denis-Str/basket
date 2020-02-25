<template lang="pug">
  div
    table.table
      tr.table__head
        th(colspan="3").table__count Выделено 45
        th(colspan="3").table__remove
          table-remove-btn
      table-row(
        v-for="good in goods" :key="good.id"
        :good="good"
      )
    ul.final
      li.final__sum Промежуточный итог по корзине: 194 760 &#x20bd;
      li.final__tax В том числе НДС: 29 706 &#x20bd;
      li.final__total Итого: 195 040 &#x20bd;
    pre {{goods}}
</template>

<script>
  import TableRemoveBtn from "@/components/TableRemoveBtn";
  import TableRow from "@/components/TableRow";
  import {mapState} from  "vuex";

  export default {
    name: "Table",
    components: {TableRow, TableRemoveBtn},
    computed: {
      ...mapState({
        goods: state => state.goods,
      }),

    },
  }

</script>

<style scoped>
  .table {
    width: 100%;
  }
</style>



// const goodsJson = require("../data/goods");
// this.goods = goodsJson;
// this.makeArrImg(this.goods)
// this.goods = this.makeArrImg(goods);


// makeArrImg (goods) {
//   return goods.map(item => {
//     const requiredPic = require(`../assets/images/goodsImg/${item.img}.png`);
//     item.img = `../assets/images/goodsImg/${item.img}`;
//     item.img = requiredPic;
//     return item
//   })
// },

