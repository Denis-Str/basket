<template lang="pug">
  div.wrap
    table.subtotal
      tr
        td Промежуточный итог по корзине:
        td {{ separatePrice(sum) }} &#x20bd;
      tr
        td В том числе НДС:
        td {{ separatePrice(tax) }}  &#x20bd;
    .hr
    table.final
      tr
        td Итого:
        td.final-size {{ separatePrice(total) }} &#x20bd;
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    methods: {
      separatePrice(number) {
        return String(number)
          .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
      },
    },
    computed: {
      ...mapGetters(['sum', 'tax', 'total'])
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    border-top: 2px solid #e8e8e8;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
