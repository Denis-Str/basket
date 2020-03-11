<template lang="pug">
  div.wrap
    table.subtotal
      tr
        td Промежуточный итог по корзине:
        td {{ subtotal }} &#x20bd;
      tr
        td В том числе НДС:
        td {{ tax }}  &#x20bd;
    .hr
    table.final
      tr
        td Итого:
        td.final-size {{ inTotal }} &#x20bd;
</template>

<script>
  import Table from "@/components/Table";
  export default {
    name: "FullPrice",
    components: {Table},
    props: {
      subtotal: String,
      tax: String,
      inTotal: String
    },
  }
</script>

<style lang="scss" scoped>
  .wrap {
    border-top: 2px solid #e8e8e8;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    /*text-align: right;*/
  }
  .subtotal,
  .final {
    max-width: 370px;
    text-align: right;
    white-space: nowrap;
    font-size: 14px;
    border-spacing: 0 25px;
    td {
      &:first-child {
        width: 215px;
      }
      &:last-child {
        width: 115px;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  .hr {
    display: block;
    width: 100%;
    border-top: 2px dotted #e8e8e8;
  }
  .final {
    color: #0a7eb5;
    td {
      &:first-child {
        text-transform: uppercase;
      }
      &:last-child {
        font-size: 24px;
      }
    }
  }
</style>
