<template lang="pug">
  #app
    .wrapper
      .container
        Main-header
        Nav-bar
        Bread-crumbs
        Table(
          :goods="goods"
        )
        FullPrice(
          :goods="goods"
        )
        pre {{ goods }}
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
  created() {
    const data = require("./data/goods.json");
    this.goods = data.map(item => ({...item, count: 1, checked: false}))
  }

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
