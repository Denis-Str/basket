<template lang="pug">
  nav.nav
    ul.nav__list
      li(
        v-for="link in links"
      ).nav__item
        a(
          :href="link.href"
        ).nav__link {{link.title}}
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        links: [
          {
            title: "каталог продукции",
            href: "link1"
          },
          {
            title: "все бренды",
            href: "link2"
          },
          {
            title: "подарки на 14 февраля",
            href: "link3"
          },
          {
            title: "подарки на 23 февраля",
            href: "link4"
          },
          {
            title: "подарки на 8 марта",
            href: "link5"
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>