<template lang="pug">
  label {{count}}
    input(
      type="checkbox"
    )
</template>

<script>
  export default {
    name: "TableRowCheck",
    props: ["count"]
  }
</script>

<style scoped>

</style>