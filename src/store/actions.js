import stocks from '../data/stocks'

export const addStocks = ({ commit, state }, payload) => {
  if (Array.isArray(payload)) {
    commit('setStocks', (state.stocks.concat(payload)))
  } else {
    for (var stock in state.stocks) {
      if (state.stocks[stock].stock.name === payload.stock.name && state.funds >= payload.stock.price) {
        state.stocks[stock].amount = parseInt(state.stocks[stock].amount) + parseInt(payload.amount)
        return
      }
    }
  }
  if (state.funds >= payload.stock.price) {
    commit('setStocks', (state.stocks.push(payload)))
  }
}

export const removeStocks = ({ commit, state }, payload) => {
  for (var stock in state.stocks) {
    if (state.stocks[stock].stock.name === payload.stock.name) {
      if (state.stocks[stock].amount > payload.amount) {
        state.stocks[stock].amount = parseInt(state.stocks[stock].amount) - parseInt(payload.amount)
      } else {
        state.stocks.splice(stock, 1)
      }
      return
    }
  }
}

export const addFunds = ({ commit, state }, payload) => {
  commit('setFunds', state.funds + payload)
}

export const removeFunds = ({ commit, state }, payload) => {
  if (state.funds - payload >= 0) {
    commit('setFunds', state.funds - payload)
    return true
  }
}

export const initStocks = ({ commit }) => {
  commit('setStocks', stocks)
}

export const buyStocks = ({ dispatch, commit, state }, payload) => {
  if (Number.isInteger(payload.amount) && payload.amount > 0) {
    dispatch('addStocks', payload)
    dispatch('removeFunds', payload.stock.price * payload.amount)
  }
}

export const sellStocks = ({dispatch, commit, state}, payload) => {
  if (Number.isInteger(payload.amount) && payload.amount > 0) {
    if (dispatch('addFunds', payload.stock.price * payload.amount)) {
      dispatch('removeStocks', payload)
    }
  }
}
