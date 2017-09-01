export const setStocks = (state, payload) => {
  if (Array.isArray(payload)) {
    state.stocks = payload
    console.log(state.stocks)
  }
}

export const randomStocks = state => {
}

export const setFunds = (state, payload) => {
  if (isFinite(payload)) {
    state.funds = payload
    console.log(state.funds)
  }
}
