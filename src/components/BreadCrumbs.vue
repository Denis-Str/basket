<template lang="pug">
  .bread-crumbs
    ul.bread-crumbs__list
      li(
        v-for="link in links"
        class="bread-crumbs__item"
      )
        a(:href="link.href").bread-crumbs__link {{link.title}}
    .bread-crumbs__sup-title Корзина
</template>

<script>
  export default {
    name: "BreadCrumbs",
    data() {
      return {
        links: [
          {
            title: "Главная",
            href: "link1"
          },
          {
            title: "Корзина",
            href: "link2"
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bread-crumbs {
    margin-bottom: 30px;
    &__list {
      display: flex;
      margin-bottom: 15px;
    }
    &__item {
      display: flex;
      &:first-child {
        text-decoration: underline;
      }
      &:not(:first-child)::before {
        content: "/";
        margin-right: 10px;
        margin-left: 10px;
      }
    }
    &__sup-title {
      font-size: 30px;
      color: #0a7eb5;
      text-transform: uppercase;
    }
  }
</style>