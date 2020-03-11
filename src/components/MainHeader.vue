<template lang="pug">
  header.header
    .logo
      img(:src="samsungImg")
    search
</template>

<script>
  import samsungImg from '../assets/images/samsung.png'
  import Search from "@/components/Search";
  export default {
    name: "MainHeader",
    components: {Search},
    data() {
      return {
        samsungImg
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 30px;
  }

</style>