export const setStocks = (state, payload) => {
  if (Array.isArray(payload)) {
    state.stocks = payload
  }
}

export const randomStocks = state => {
}

export const setFunds = (state, payload) => {
  if (isFinite(payload)) {
    state.funds = payload
  }
}
