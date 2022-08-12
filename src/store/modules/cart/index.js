import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export default {
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  getters,
  actions,
  mutations,
  namespaced: true,
};
