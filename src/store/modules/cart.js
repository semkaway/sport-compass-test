// import shop from '../../api/shop'

// initial state
// shape: [{ id, quantity }]
const state = {
  items: [],
  checkoutStatus: null
}

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    // return state.items.map(({ id, quantity }) => {
    //   const product = rootState.products.all.find(product => product.id === id)
    //   return {
    //     title: product.title,
    //     price: product.price,
    //     quantity
    //   }
    // })
    console.log("cart.getters.cartProducts")
  },

  cartTotalPrice: (state, getters) => {
    // return getters.cartProducts.reduce((total, product) => {
    //   return total + product.price * product.quantity
    // }, 0)
    console.log("cart.getters.cartTotalPrice")
  }
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
      console.log("cart.actions.checkout")
    // const savedCartItems = [...state.items]
    // commit('setCheckoutStatus', null)
    // // empty cart
    // commit('setCartItems', { items: [] })
    // shop.buyProducts(
    //   products,
    //   () => commit('setCheckoutStatus', 'successful'),
    //   () => {
    //     commit('setCheckoutStatus', 'failed')
    //     // rollback to the cart saved before sending the request
    //     commit('setCartItems', { items: savedCartItems })
    //   }
    // )
  },

  addProductToCart ({ state, commit }, product) {
      console.log("product: ", product)
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => (item.product.id === product.id && item.product.size === product.size))
      // for(var i = 0; i < state.items.length; i++) {
      //     console.log("item.size: ", state.items[i].product.size)
      //     console.log("product.size: ", product.size)
      //     console.log("<-------->")
      // }
      console.log("Initial cartItem: ", cartItem)
      if (!cartItem) {

        commit('pushProductToCart', { product: product })
      } else {
        commit('incrementItemQuantity', product)
      }
      // remove 1 item from stock
      // commit('products/decrementProductInventory', { id: product.id }, { root: true })
    }
    console.log("items: ", state.items)
  }
}

// mutations
const mutations = {
  pushProductToCart (state, { product }) {
      console.log("cart.mutations.pushProductToCart")
    state.items.push({
      product,
      quantity: product.quantity
    })
  },

  incrementItemQuantity (state, product) {
     console.log("cart.mutations.incrementItemQuantity")
     console.log("product: ", product)

     for(var i = 0; i < state.items.length; i++) {

         // console.log("item.size: ", state.items[i].product.size)
         // console.log("product.size: ", product.size)
         // console.log("<-------->")
         if ( state.items[i].product.id === product.id && state.items[i].product.size === product.size) {
             console.log("FOUND item: ", state.items[i])
             state.items[i].quantity += product.quantity
         }
     }
    // const cartItem = state.items.find(item => (item.product.id === product && item.product.size === product.size))
    // console.log("cartItem: ", cartItem)
    // cartItem.quantity += product.quantity
  },

  setCartItems (state, { items }) {
      console.log("cart.mutations.setCartItems")
    //state.items = items
  },

  setCheckoutStatus (state, status) {
      console.log("cart.mutations.setCheckoutStatus")
    //state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
