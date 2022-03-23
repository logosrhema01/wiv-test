import { createStore } from 'vuex'
import getProducts from './get-products'



export default createStore({
  state: {
    products: [],
    card: []
  },
  mutations: {
    getProducts(state, products){
      state.products = products
    }
  },
  actions: {
    getProductsAction({commit}){
      
      getProducts().then(res => {
        commit('getProducts', res)
      })
    }
  },
  modules: {
  }
})
