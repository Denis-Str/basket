<template lang="pug">
  form.search
    label.search__label
      input(type="text" class="search__input")
    button(type="submit" class="search__btn") Поиск
</template>

<script>
  export default {
    name: "search"
  }
</script>

<style lang="scss" scoped>
  .search {
    max-width: 390px;
    display: flex;
    align-items: center;
    &__label {
      padding-right: 5px;
      display: inline-block;
    }
    &__input {
      width: 100%;
      border: 1px solid #333333;
      border-radius: 5px;
      background-image: url('../assets/images/search.png');
      background-repeat: no-repeat;
      background-position: 10px center;
      padding-left: 30px;
    }
    &__btn {
      border-radius: 5px;
      text-transform: uppercase;
      color: #ffffff;
      font-size: 12px;
      background-color: #17709a;
      border: none;
      padding: 5px 15px;
      outline: none;
      line-height: normal;
    }
  }
</style>