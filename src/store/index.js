import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    goods: [],
    // modal: false
  },
  actions: {
    fetchJSON(store) {
      store.commit('addJson', require('../data/goods.json'))
    }
  },
  mutations: {
    addJson(state, json) {
      json.map(good => (state.goods.push(
        {...good, counter: 1, checked: false,}
        )));
    },
    changeChecked(state, obj) {
      state.goods.map(product => (product.id === obj.id ?
        product.checked = obj.checked : product))
    },
    deleteProduct(state) {
      state.goods = state.goods.filter(product => product.checked === false);
    },
    changeCounter(state, obj) {
      state.goods.map(product => (product.id === obj.id ?
        product.counter = obj.counter : product))
    },
    // show(state, val) {
    //   state.modal = val;
    //   console.log(state.modal)
    // }
  },
  getters: {
    sum: (state) => state.goods.reduce((sum, product) =>
      (sum + product.counter * product.price), 0),
    // sum(state) {
    //   let sum = 0;
    //   state.goods.map(product => sum += product.count * product.price);
    //   return sum
    // },
    tax: (state, getters) => Math.round( getters.sum * 0.18),
    total: (state, getters) => Math.round(getters.tax + getters.sum)
  }
})