import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    funds: 10000,
    tabs: {
      items: [
        {
          label: 'Overview',
          cards: [
            {
              title: 'Overview of portfolio',
              components: [
                {tag: 'p', text: 'You may save and load your data'},
                {tag: 'p', text: 'Click on end day to begin a new day'}
              ]
            }
          ],
          is: 'stocks-overview'
        },
        {
          label: 'Portfolio',
          cards: [
            {
              title: 'View your stocks'
            }
          ]
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
        price: 75
      },
      {
        name: 'Apple',
        price: 75
      },
      {
        name: 'Google',
        price: 75
      }
    ]
  },
  getters
})
