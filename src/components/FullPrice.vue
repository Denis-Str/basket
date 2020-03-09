<template lang="pug">
  div
    ul.final
      li.final__sum Промежуточный итог по корзине: {{ subtotal }} &#x20bd;
      li.final__tax В том числе НДС: {{ Math.round(tax) }}  &#x20bd;
      li.final__total Итого: {{ Math.round(inTotal) }} &#x20bd;
    pre {{ goods }}
</template>

<script>
  export default {
    name: "FullPrice",
    props: {
      goods: Array
    },
    computed: {
      subtotal() {
        let sum = 0;
        this.goods.map(item => {
          item.totalPrice = item.count * item.price;
          sum += item.totalPrice
        });
        return sum
      },
      tax() {
        return this.subtotal * 0.18;
      },
      inTotal() {
        return this.tax + this.subtotal
      },
    }
  }
</script>

<style scoped>

</style>