<template lang="pug">
  ul.final
    li.final__sum Промежуточный итог по корзине: {{ subtotal }} &#x20bd;
    li.final__tax В том числе НДС: {{ Math.round(tax) }}  &#x20bd;
    li.final__total Итого: {{ Math.round(inTotal) }} &#x20bd;
</template>

<script>
  export default {
    name: "TotalCost",
    computed: {
      subtotal() {
        return 0
      },
      tax() {
        return this.subtotal * 0.18;
      },
      inTotal() {
        return this.tax + this.subtotal
      },
    },

  }
</script>

<style lang="scss" scoped>

</style>