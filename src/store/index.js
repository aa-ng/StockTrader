import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    funds: 10000,
    tabs: {
      items: [
        {
          label: 'Overview',
          is: 'stocks-overview'
        },
        {
          label: 'Portfolio',
          is: 'stocks-user-view'
        },
        {
          label: 'Buy stocks',
          is: 'stocks-buy-view'
        }
      ]
    },
    stocks: [],
    companies: [
      {
        name: 'BMW',
        price: 110
      },
      {
        name: 'Apple',
        price: 120
      },
      {
        name: 'Google',
        price: 105
      }
    ]
  },
  getters,
  mutations,
  actions
})
