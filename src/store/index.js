import { createStore } from 'vuex'
import getTransactions from './get-transactions'



export default createStore({
  state: {
    transactions: [],
    card: []
  },
  mutations: {
    getTransactions(state, transactions){
      state.transactions = transactions
    }
  },
  actions: {
    getTransactionsAction({commit}){
      
      getTransactions().then(res => {
        commit('getTransactions', res)
      })
    }
  },
  modules: {
  }
})
