<template lang="pug">
  #app
    .wrapper
      .container
        Main-header
        Nav-bar
        Bread-crumbs
        Table(
          :goods="goods"
          :deletedItemInArr="filtered"
          @separate="separatePrice"
        )
        FullPrice(:goods="goods"
          :subtotal="separatePrice(subtotalApp)"
          :tax="separatePrice(taxApp)"
          :inTotal="separatePrice(inTotalApp)"
        )
</template>

<script>
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import BreadCrumbs from "@/components/BreadCrumbs";
import Table from "@/components/Table";
import FullPrice from "@/components/FullPrice";

export default {
  name: 'App',
  data() {
    return {
      goods: [],
    }
  },
  components: {
    FullPrice,
    Table,
    BreadCrumbs,
    NavBar,
    MainHeader,
  },
  methods: {
    filtered() {
      this.goods = this.goods.filter(item => item.checked === false);
    },
    separatePrice(number) {
      return String(number)
        .replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    },
  },
  computed: {
    subtotalApp() {
      let sum = 0;
      this.goods.map(item => {
        sum += item.count * item.price;
      });
      return sum
    },
    taxApp() {
      return Math.round(this.subtotalApp * 0.18);
    },
    inTotalApp() {
      return Math.round(this.taxApp + this.subtotalApp)
    },
  },
  created() {
    // const data = require("./data/goods.json");
    this.goods = require("./data/goods.json").map(item => (
        {...item,
          count: 0,
          checked: false,
          img: require(`@/assets/goodsImg/${item.id + 1}.png`)
        }
      )
    );
  },
}
</script>

<style lang="scss">
  @import "./main";
  .wrapper {
    padding-top: 30px;
  }
  .container {
    width: 95%;
    margin: 0 auto;
  }
</style>
