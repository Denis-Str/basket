<template lang="pug">
  tr.table__row
    td.checked.table__cell-border-right.table__cell
      input(
        type="checkbox"
        class="checkbox"
        @change="checkedProducts"
      )
      span {{ordinalNumber}}
    td.img.table__cell-border-right.table__cell
      img(:src="require(`@/assets/goodsImg/${product.id}.png`)")
    td(class="table__cell table__cell-border-right desc") {{ product.desc }}
    td(class="table__cell price")
      span(style="padding-right: 7px") {{ separatePrice(product.price) }} &#x20bd;
      span(v-show="modal") x
    td(class="table__cell value")
      span(@click="modal = true") {{product.counter}}
      change-quantity-goods(
        v-show="modal"
        @show="modal = $event"
        :price="product.price"
        :id="product.id"
      )
    td(class="table__cell sum")
      span(v-show="modal") =
      span(style="padding-left: 7px") {{ separatePrice(sumInRow) }} &#x20bd;
</template>

<script>
  import ChangeQuantityGoods from "@/components/ChangeQuantityGoods";
  import { mapMutations } from 'vuex';

  export default {
    data() {
      return {
        modal: false
      }
    },
    props: {
      product: Object,
      ordinalNumber: Number
    },

    components: {ChangeQuantityGoods},

    methods: {
      ...mapMutations(['changeChecked']),
      checkedProducts(e) {
        this.changeChecked({id: this.product.id, checked: e.target.checked})
      },
      // :value="keyInput"
      // keyInput(e) {
      //   this.count = this.validateKeyEnter(e.key);
      //   console.log(this.count)
      // },
      // validateKeyEnter(number) {
      //   let value = '';
      //   // if (typeof value === 'string' || isNaN(value)) return 0;
      //   return  isNaN(number) ? 0 : value += number;
      //   // return value
      // },
      separatePrice(number) {
        return String(number)
          .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
      },
      // show(event) {
      //   this.modal = event
      // }
    },

    computed: {
      sumInRow() {
        return this.product.price * this.product.counter
      },
    }
  }

</script>

<style lang="scss" scoped>
  .checkbox {
    margin-right: 20px;
  }
  .value {
    position: relative;
    cursor: pointer;
    span {
      width: 50px;
      height: 22px;
      box-shadow: inset 0 0 5px 0 rgba(9, 12, 18, 0.12);
      border: solid 1px #bdbdbd;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      border-radius: 5px;
    }
  }
  .table__cell {
    width: 8%;
    padding: 20px 0;
    border-collapse: collapse;
    vertical-align: middle;
    text-align: center;
    &-border-right {
      border-right: 1px dotted black;
    }
  }
  .img {
    padding: 0;
    img {
      margin: 0 auto;
    }
  }
  .desc {
    width: 60%;
    text-align: left;
    padding-left: 20px;
  }
  .price {
    text-align: left;
    padding-left: 20px;
  }
</style>
