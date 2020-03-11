<template lang="pug">
  nav.nav
    ul.nav__list
      li(v-for="link in links" class="nav__item")
        a(:href="link.href" class="nav__link") {{link.title}}
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

<style lang="scss" scoped>
  .nav {
    &__list {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 55px;
    }
    &__item {
      padding: 15px 5px 15px 15px;
      background: linear-gradient(to right, #92c8e1, #b2daed);
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      flex: 1 0 auto;
      &:nth-child(2) {
        flex: 1 2 auto;
      }

    }
    &__link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-transform: uppercase;
      font-size: 16px;
      white-space: nowrap;
      display: flex;
      &::after {
        content: "\2039";
        transform-origin: center center;
        transform: rotate(-90deg);
      }
    }
  }
</style>