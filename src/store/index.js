import { createStore } from 'vuex';

import getters from './getters';
import actions from './actions';
import mutations from './mutations';

import cart from './modules/cart/index';
import products from './modules/products/index';

export default createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },
  getters,
  actions,
  mutations,
  modules: {
    cart,
    products,
  },
});
