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
    ) {{0 || good.content}}
    td(
      class="table__cell price"
    ) {{good.price}} &#x20bd; x
    td(
      class="table__cell value"
      @click.self.prevent="isActive = true"
    ) {{good.count}}
      change-quantity-goods(
        v-show="isActive"
        @cancel="hiddenForm"
        @totalSum="hiddenForm"
        :price="good.price"
        :id="good.id"
        )
    td(
      class="table__cell sum"
    ) {{good.totalPrice}} &#x20bd;
</template>

<script>
  import TableRowCheck from "@/components/TableRowCheck";
  import ChangeQuantityGoods from "@/components/ChangeQuantityGoods";

  export default {
    name: "TableRow",
    components: {ChangeQuantityGoods, TableRowCheck},
    props: ["good"],
    data() {
      return {
        isActive: false
      }
    },
    methods: {
      hiddenForm() {
        this.isActive = false;
      },
    }
  }

</script>

<style scoped>
  .table__row {
    position: relative;
    height: 75px;
  }
  .value {
    position: relative;
    cursor: pointer;
  }
</style>