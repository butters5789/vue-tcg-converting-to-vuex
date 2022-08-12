export default {
  addItemToCart(state, payload) {
    if (payload.existingItem) {
      state.items[payload.productInCartIndex].qty++;
    } else {
      state.items.push(payload.newItem);
    }
  },
  addQuantityToCart(state, payload) {
    state.qty = state.qty + payload.quantity;
  },
  addTotalToCart(state, payload) {
    state.total = state.total + payload.price;
  },
  removeItemFromCart(state, payload) {
    state.items.splice(payload.productInCartIndex, 1);
  },
  removeQuantityFromCart(state, payload) {
    state.qty = state.qty - payload.quantity;
  },
  removeTotalFromCart(state, payload) {
    state.total = state.total - payload.price;
  },
};
