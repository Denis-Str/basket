<template lang="pug">
  tr().table__row
    td(
      class="table__cell"
    )
      table-row-check(
        :count="good.id + 1"
      )
    td(
      class="table__cell img"
    )
      img(
        :src="good.img"
      )
    td(
      class="table__cell desc"
    ) {{good.content}}
    td(
      class="table__cell price"
    ) {{good.price}} &#x20bd;
    td(
      class="table__cell value"
    )
      table-row-amount(:id="good.id")
    td(
      class="table__cell sum"
    ) {{totalSumRow}} &#x20bd; {{good.totalPrice}}
</template>

<script>
  import TableRowCheck from "@/components/TableRowCheck";
  import TableRowAmount from "@/components/TableRowAmount";

  export default {
    name: "TableRow",
    components: {TableRowAmount, TableRowCheck},
    props: ["good"],
    computed: {
      totalSumRow() {
        return this.$store.getters.getRowSum
      }
    }

  }

</script>

<style scoped>

</style>