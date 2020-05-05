<template lang="pug">
  #app
    .wrapper
      .container
        Main-header
        Nav-bar
        Bread-crumbs
        Table
        FullPrice
</template>

<script>
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import BreadCrumbs from "@/components/BreadCrumbs";
import Table from "@/components/Table";
import FullPrice from "@/components/FullPrice";
import {mapActions} from 'vuex'

export default {
  components: {
    FullPrice,
    Table,
    BreadCrumbs,
    NavBar,
    MainHeader,
  },

  computed: {
    ...mapActions(['fetchJSON']),
  },

  created() {
    this.fetchJSON
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
