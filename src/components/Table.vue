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
      li.final__sum Промежуточный итог по корзине: {{ sum }} &#x20bd;
      li.final__tax В том числе НДС: 29 706 &#x20bd;
      li.final__total Итого: 195 040 &#x20bd;
</template>

<script>
  import TableRemoveBtn from "@/components/TableRemoveBtn";
  import TableRow from "@/components/TableRow";
  import {mapState} from  "vuex";

  export default {
    name: "Table",
    components: {TableRow, TableRemoveBtn},
    data() {
      return {
        // q: 4
      }
    },
    computed: {
      ...mapState({
        goods: state => state.goods,
      }),
      sum() {
        // return this.$store.getters.computedTotalPrice
        return this.$store.state.goods.forEach(item => {
          console.log(item.totalPrice);
          let sum = 0;
          sum += item.totalPrice;
          return sum
        })
      }
    },
    methods: {
      w() {
        this.q = this.sum
      }
    }
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

