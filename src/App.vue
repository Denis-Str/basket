<template lang="pug">
  #app
    .wrapper
      .container
        main-header
        nav-bar
        bread-crumbs
        Table
</template>

<script>

import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import BreadCrumbs from "@/components/BreadCrumbs";
import Table from "@/components/Table";
import goodsJson from './data/goods';


export default {
  name: 'App',
  components: {
    Table,
    BreadCrumbs,
    NavBar,
    MainHeader,
  },
  created() {
    this.$store.commit('objInArr', goodsJson)
  }
}
</script>

<style lang="scss">
  @import "./main";
</style>
