import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  
  state: {
    goods: [],
    filter: "all",
    total: []
  },
  
  getters: {
    // computedTotalPrice(state) {
    //   return state.goods.forEach(item => {
    //     console.log(item.totalPrice);
    //     let sum = 0;
    //     sum += item.totalPrice;
    //     state.total.push(sum);
    //     console.log(sum)
    //     return sum
    //   })
    // }
  },
  mutations: {
    objInArr(state, json) {
      for (let key in json) {
        this.state.goods.push(json[key]);
        json[key].totalPrice = 0;
        json[key].count = 0;
      }
    }
  },
});

// getRowSum(state) {
//   return state.goods[0].totalPrice
// }

// setSum(state, value) {
//   state.goods.map(good => {
//     if (good.id === value.id) {
//       console.log(good.price * Number(value.amount));
//       good.totalPrice = good.price * Number(value.amount);
//     }
//   });
// },


