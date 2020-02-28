<template lang="pug">
  form.form
    .form__title Изменить количество
    .form__row
      .form__.price {{price}} x
      button(
        type="button"
        @click="countDown"
      ) -
      label
        input(
          autofocus
          type="text"
          placeholder=`${count}`
          v-model="count"
        )
      button(
        type="button"
        @click="countUp"
      ) +
      .form__sum {{sum}}
    .form__edit
      button(
        type="button"
        @click="totalSum"
      ) Сохранить
      button(
        type="button"
        @click="cancel"
      ) Отменить
</template>

<script>
  export default {
    name: "ChangeQuantityGoods",
    data() {
      return {
        count: 0,
        rowId: this.id
      }
    },
    props:["price", "id"],
    methods: {
      cancel() {
        this.$emit('cancel')
        this.count = 0;
      },
      totalSum() {
        this.$store.state.goods.map(item => {
          if (item.id === this.rowId) {
            item.totalPrice = this.sum;
            item.count = this.count;
          }
          console.log(this.$store.state.goods)
          this.$emit('totalSum')
        });
      },
      countUp() {
        this.count += 1;
      },
      countDown() {
        (this.count > 0) ? this.count -= 1 : this.count = 0;
      }
    },
    computed: {
      sum() {
        return this.count * this.price;
      }
    },
  }
</script>

<style lang="scss" scoped>
  .form {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 40px;
    right: -150px;
    width: 320px;
  }
  .form__edit, .form__row {
    display: flex;
  }
</style>