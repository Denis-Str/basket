import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  
  state: {
    goods: [],
    filter: "all"
  },
  
  getters: {
    getRowSum(state) {
      return state.goods[0].totalPrice
    }
  },
  mutations: {
    setSum(state, value) {
      state.goods.map(good => {
        if (good.id === value.id) {
          console.log(good.price * Number(value.amount));
          good.totalPrice = good.price * Number(value.amount);
        }
      });
    },
    objInArr(state, json) {
      for (let key in json) {
        this.state.goods.push(json[key]);
        json[key].totalPrice = 0;
      }
    }
  },
});
