<template lang="pug">
  header
    .logo
      img(:src="samsImg")
    search
</template>

<script>
  import samsImg from '../assets/images/samsung.png'
  import Search from "@/components/search";
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


</style>