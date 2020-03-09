<template lang="pug">
  form.form
    .form__title Изменить количество
    .form__row
      .form__.price {{ price }} x
      button(
        type="button"
        @click="countDown"
      ) -
      label
        input(
          autofocus
          type="text"
          v-model="count"
        )
      button(
        type="button"
        @click="countUp"
      ) +
      div(
        class="form__sum"
      ) {{sum}}
    .form__edit
      button(
        type="button"
        @click.self.prevent="saveBuy"
      ) Сохранить
      button(
        type="button"
        @click.self.prevent="cancelBuy"
      ) Отменить
</template>

<script>
  export default {
    name: "ChangeQuantityGoods",
    props: {
      count: Number,
      price: Number,
      sum: Number,
      countUp: Function,
      countDown: Function,
      saveBuy: Function,
      cancelBuy: Function
    },
  }
</script>

<style lang="scss" scoped>
  .form {
    /*position: absolute;*/
    display: flex;
    flex-direction: column;
    top: 40px;
    right: -150px;
    width: 320px;
  }
  .form__edit, .form__row {
    display: flex;
  }
</style>