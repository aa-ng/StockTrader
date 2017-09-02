import { stocks } from '../data/stocks'

export const addStocks = ({ commit, state }, payload) => {
  if (Array.isArray(payload)) {
    commit('setStocks', (state.stocks.concat(payload)))
  } else {
    const record = state.stocks.find(element => element.stock.name === payload.stock.name)
    if (record && state.funds >= payload.stock.price) {
      record.amount = parseInt(record.amount) + parseInt(payload.amount)
      return
    }
  }
  if (state.funds >= payload.stock.price) {
    commit('setStocks', (state.stocks.push(payload)))
  }
}

export const removeStocks = ({ commit, state }, payload) => {
  const record = state.stocks.find(element => element.stock.name === payload.stock.name)
  if (record && record.amount > payload.amount) {
    record.amount = parseInt(record.amount) - parseInt(payload.amount)
  } else {
    var index = state.stocks.indexOf(record)
    if (index !== -1) {
      state.stocks.splice(index, 1)
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

export const randomizeStocks = ({ commit }) => {
  commit('randomStocks')
}

export const buyStocks = ({ dispatch, commit, state }, payload) => {
  if (Number.isInteger(payload.amount) && payload.amount > 0) {
    dispatch('addStocks', payload)
    dispatch('removeFunds', payload.stock.price * payload.amount)
  }
}

export const sellStocks = ({dispatch, commit, state}, payload) => {
  if (Number.isInteger(payload.amount) && payload.amount > 0 && payload.quantity >= payload.amount) {
    dispatch('addFunds', payload.stock.price * payload.amount)
    dispatch('removeStocks', payload)
  }
}
