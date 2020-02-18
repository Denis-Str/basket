<template lang="pug">
  tr(

  ).table__row
    td(
      class="table__cell"
    )
      table-row-check(
        :count="good.id"
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
      table-row-amount
    td(
      class="table__cell sum"
    ) 990 &#x20bd;
    pre
</template>

<script>
  import TableRowCheck from "@/components/TableRowCheck";
  import TableRowAmount from "@/components/TableRowAmount";
  export default {
    name: "TableRow",
    components: {TableRowAmount, TableRowCheck},
    props: ["good"]
  }
</script>

<style scoped>

</style>