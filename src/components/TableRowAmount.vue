<template lang="pug">
  label
    input(
      autofocus
      type="text"
      v-model="good.amount"
      @keydown.enter="inputAmount()"
    )
</template>

<script>

  export default {
    name: "TableRowAmount",
    data() {
      return {
        good: {
          id: this.id,
          amount: 0
        }
      }
    },
    props: ["id"],
    methods: {
      inputAmount() {
        this.$store.commit('setSum', this.good)
      }
    },
  }
</script>

<style scoped>

</style>