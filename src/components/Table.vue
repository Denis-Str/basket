<template lang="pug">
  table.table
    tr.table__head
      th(colspan="3").table__checked Выделено {{ checkedItem }}
      th(colspan="3"
        ).table__remove
        button(
          type="button"
          @click="deleteBuy"
        ) Удалить отмеченные
    table-row(
      v-for="good of goods"
      :good="good"
    )
</template>

<script>
  import TableRow from "@/components/TableRow"

  export default {
    name: "Table",
    components: {TableRow},
    props: {
      goods: Array
    },
    methods: {
      deleteBuy() {
        this.goods = this.goods.filter(item => item.checked === false);
      }
    },
    computed: {
      checkedItem() {
        let count = 0;
        this.goods.forEach(item => item.checked === true ? count++ : 0);
        return count
      },
      subtotal() {
        let sum = 0;
        this.goods.map(item => {
          item.totalPrice = item.count * item.price;
          sum += item.totalPrice
        });
        return sum
      },
    },
  }

</script>

<style scoped>
  .table {
    width: 100%;
    border-collapse: collapse;
  }
</style>