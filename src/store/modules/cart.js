const state = {
  items: []
}

// actions
const actions = {
    checkout ({ commit, state }) {
        commit('checkoutEverything')
    },

    addProductToCart ({ state, commit }, product) {
        if (product.inventory > 0) {
            const cartItem = state.items.find(item => (item.product.id === product.id && item.product.size === product.size))
            if (!cartItem) {
                commit('pushProductToCart', { product: product })
            } else {
                commit('incrementItemQuantity', product)
            }
        }
    },

    changeQuantityAtCheckout({ state, commit }, product) {
        commit('changeQuantity', product)
    },

    deleteItem({state, commit}, product) {
        commit('deleteProduct', product)
    }
}

// mutations
const mutations = {
    pushProductToCart (state, { product }) {
        state.items.push({
        product,
        quantity: product.quantity
        })
    },

    checkoutEverything(state) {
        state.items = []
    },

    deleteProduct(state, {product}) {
        for(var i = 0; i < state.items.length; i++) {
            if ( state.items[i].product.id === product.id && state.items[i].product.size === product.size) {
                state.items.splice(i, 1)
            }
        }
    },

    changeQuantity(state, product) {
        for(var i = 0; i < state.items.length; i++) {
            if ( state.items[i].product.id === product.id && state.items[i].product.size === product.size) {
                state.items[i].quantity = product.quantity
            }
        }
    },

    incrementItemQuantity (state, product) {
        for(var i = 0; i < state.items.length; i++) {
            if ( state.items[i].product.id === product.id && state.items[i].product.size === product.size) {
                state.items[i].quantity += product.quantity
            }
        }
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
