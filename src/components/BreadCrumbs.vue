<template lang="pug">
  .bread-crumbs
    ul.bread-crumbs__list
      li(
        v-for="link in links"
      ).bread-crumbs__item
        a(:href="link.href").bread-crumbs__link {{link.title}}
    .bread-crumbs__title {{links[links.length - 1].title}}
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

<style scoped>

</style>