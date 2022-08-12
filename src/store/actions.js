export default {
  login({ commit }) {
    commit('setAuth', { value: true });
  },
  logout({ commit }) {
    commit('setAuth', { value: false });
  },
};
