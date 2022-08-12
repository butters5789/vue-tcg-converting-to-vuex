export default {
  addProductToCart({ commit, state }, productData) {
    const productInCartIndex = state.items.findIndex(
      (ci) => ci.productId === productData.id
    );

    if (productInCartIndex >= 0) {
      commit('addItemToCart', {
        existingItem: true,
        productInCartIndex,
      });
    } else {
      const newItem = {
        productId: productData.id,
        title: productData.title,
        image: productData.image,
        price: productData.price,
        qty: 1,
      };

      commit('addItemToCart', { newItem });
    }

    commit('addQuantityToCart', { quantity: 1 });
    commit('addTotalToCart', { price: productData.price });
  },
  removeProductFromCart({ commit, state }, prodId) {
    const productInCartIndex = state.items.findIndex(
      (cartItem) => cartItem.productId === prodId
    );
    const prodData = state.items[productInCartIndex];

    commit('removeItemFromCart', { productInCartIndex });
    commit('removeQuantityFromCart', { quantity: prodData.qty });
    commit('removeTotalFromCart', { price: prodData.price * prodData.qty });
  },
};
