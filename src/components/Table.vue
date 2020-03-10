<template lang="pug">
  table.table
    tr.table__head
      th(colspan="3").table__checked Выделено <span>{{ checkedItem }}</span>
      th(
        colspan="3"
        class="table__remove"
      )
        div.table__remove-inner
          span
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

<style lang="scss" scoped>
  .table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    margin-bottom: 20px;
    th {
      font-weight: normal;
      padding: 10px 20px;
      span {
        font-weight: bold;
        font-size: 16px;
      }
    }
    &__head {
      background-color: #d9e8ef;
      text-align: left;
      font-size: 14px;
    }
    tr {
      &:nth-child(2n+1):not(:first-child) {
        background-color: #e8e8e8;
      }
    }
  }
  .table__remove {
    text-align: right;
    &-inner {
      display: flex;
      justify-content: flex-end;
    }
    button {
      border: none;
      background-color: transparent;
      text-decoration: underline;
    }
    span {
      position: relative;
      background-color: #7f7f7f;
      border-radius: 5px;
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      &::before,
      &::after {
        position: absolute;
        content: "";
        display: block;
        width: 12px;
        height: 2px;
        background-color: #fff;
        transform: rotate(45deg);
        transform-origin: center center;
        border-radius: 25%;
      }
      &::after {
        transform: rotate(-45deg);
      }
    }

  }
</style>