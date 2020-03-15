<template lang="pug">
  tr.table__row
    td.checked.table__cell-border-right.table__cell
      input(
        type="checkbox"
        @change="checkedGood"
        class="checkbox"
      )
      span {{good.id}}
    td.img.table__cell-border-right.table__cell
      img(:src="path")
    td(class="table__cell table__cell-border-right desc") {{ good.content }}
    td(class="table__cell price")
      span(style="padding-right: 7px") {{ separatePrice(good.price) }} &#x20bd;
      span(v-show="isShow") x
    td(class="table__cell value" ref="Popup")
      span(@click="isShow = true") {{good.count}}
      change-quantity-goods(
        v-show="isShow"
        :count="count"
        :price="separatePrice(good.price)"
        :sum="separatePrice(sumInPopup)"
        :countUp="changeCountUp"
        :countDown="changeCounterDown"
        :saveBuy="saveBuy"
        :cancelBuy="cancelBuy"
        :value="keyInput"
      )
    td(class="table__cell sum")
      span(v-show="isShow") =
      span(style="padding-left: 7px") {{ separatePrice(sumInRow) }} &#x20bd;
</template>

<script>
  import ChangeQuantityGoods from "@/components/ChangeQuantityGoods";

  export default {
    name: "TableRow",
    data() {
      return {
        isShow: false,
        count: 1
      }
    },
    props: {
      good: Object,
      separate: Function,
      path: String
    },
    components: {ChangeQuantityGoods},
    methods: {
      checkedGood(e) {
        this.good.checked = e.target.checked
      },
      changeCountUp() {
        (this.count < 100 ) ? this.count += 1 : this.count = 100;
      },
      changeCounterDown() {
        (this.count > 0 ) ? this.count -= 1 : this.count = 0;
      },
      keyInput(e) {
        this.count = this.validateKeyEnter(e.key);
        console.log(this.count)
      },
      validateKeyEnter(number) {
        let value = '';
        // if (typeof value === 'string' || isNaN(value)) return 0;
        return  isNaN(number) ? 0 : value += number;
        // return value
      },
      saveBuy() {
        this.good.count = this.count;
        this.isShow = false;
      },
      cancelBuy() {
        this.count = 1;
        this.good.count = 1;
        this.isShow = false;
      },
      savePopup() {
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === '13') {
            this.saveBuy()
          }
        });
      },
      closePopup() {
        document.addEventListener('click', (e) => {
          if (!this.$refs.Popup.contains(e.target)) {
            this.isShow = false;
          }
        });
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' || e.key === '27') {
            this.isShow = false;
          }
        });
      },
      separatePrice(number) {
        return String(number)
          .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
      }
    },
    mounted() {
      this.closePopup();
      this.savePopup()
    },
    destroyed() {
      document.removeEventListener('click', this.closePopup());
      document.removeEventListener('keydown', this.savePopup()());
    },
    computed: {
      sumInPopup() {
        return this.good.price * this.count
      },
      sumInRow() {
        return this.good.price * this.good.count
      }
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
