<template lang="pug">
  form.form
    .container
      .form__title Изменить количество
      .form__row
        .form__price {{ price }} x
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
        ) = {{sum}}
      .form__edit
        button(
          type="button"
          @click="saveBuy"
        ) Сохранить
        button(
          type="button"
          @click="cancelBuy"
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
  .container {
    max-width: 262px;
    margin: 0 auto;
  }
  .form {
    padding-top: 20px;
    padding-bottom: 20px;
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    top: 45px;
    right: -160px;
    width: 320px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.25);
    &__edit, .form__row {
      display: flex;
    }
    &__title {
      color: #006599;
      text-align: left;
      margin-bottom: 20px;
    }
    &__row {
      margin-bottom: 25px;
      align-items: baseline;
      label {
        margin: 0 5px;
      }
      input {
        width: 50px;
        height: 22px;
        box-shadow: inset 0 0 5px 0 rgba(9, 12, 18, 0.24);
        border: solid 1px #bdbdbd;
        text-align: center;
        border-radius: 5px;
      }
      button {
        cursor: pointer;
        width: 19px;
        height: 19px;
        background-color: #559abc;
        margin: 0 5px;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &__edit {
      button {
        cursor: pointer;
        background-color: transparent;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        text-decoration: underline;
        &:first-child {
          color: #006296;
        }
      }
    }
  }

</style>