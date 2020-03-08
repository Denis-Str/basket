<template lang="pug">
  header.header
    .logo
      img(:src="samsImg")
    search
</template>

<script>
  import samsImg from '../assets/images/samsung.png'
  import Search from "@/components/Search";
  export default {
    name: "MainHeader",
    components: {Search},
    data() {
      return {
        samsImg
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
  }

</style>