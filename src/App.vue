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

export default {
  name: 'App',
  components: {
    Table,
    BreadCrumbs,
    NavBar,
    MainHeader,
  }
}
</script>

<style lang="scss">
  @import "./main";
</style>
