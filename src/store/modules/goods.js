import goodsJson from '../../data/goods';

const goods = {
  // namespaced: true,
  state: {
    goods: [...goodsJson],
    filter: "all",
    amount: 2
  },
  mutations: {
    // sumRow(state, good) {
    //   console.log(good)
    //   this.totalSumRow(good)
    //   return good
    // },
  },
  getters: {
    // totalSumRow(state, good) {
    //   // console.log(good)
    //   this.goods.filter(item => {
    //     if (item.id === this.good.id) {
    //       const sum = item.price * good.price;
    //       return sum
    //     }
    //   })
    // }
  
  },
};

export default goods;