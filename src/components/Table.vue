<template lang="pug">
  table.table
    tr.table__head
      th(colspan="3").table__checked Выделено <span>{{ selectedProducts }}</span>
      th(colspan="3").table__remove
        div.table__remove-inner
          span
          button(type="button" @click="deleteProduct") Удалить отмеченные
    table-row(
      v-for="(product, index) in goods"
      :key="product.id"
      :product="product"
      :ordinalNumber="index + 1"
    )
</template>

<script>
  import TableRow from "@/components/TableRow";
  import { mapState, mapMutations} from 'vuex'

  export default {
    components: {TableRow},

    computed: {
      ...mapState({
        goods: state => state.goods
      }),
      selectedProducts() {
        return this.goods.filter(item => item.checked).length;
      }
    },

    methods: {
      ...mapMutations(['deleteProduct']),
    }
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