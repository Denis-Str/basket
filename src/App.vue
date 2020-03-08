<template lang="pug">
  #app
    .wrapper
      .container
        Main-header
        Nav-bar
        Bread-crumbs
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
  .container {
    width: 95%;
    margin: 0 auto;
  }
</style>
