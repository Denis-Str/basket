<template lang="pug">
  form.search
    label.search__label
      input(
        type="text"
        class="search__input"
      )
    button(
      type="submit"
      class="search__btn"
    ) Поиск
</template>

<script>
  export default {
    name: "search"
  }
</script>

<style lang="scss" scoped>

</style>