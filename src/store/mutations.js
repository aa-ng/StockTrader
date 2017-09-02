export const setStocks = (state, payload) => {
  if (Array.isArray(payload)) {
    state.stocks = payload
    console.log(state.stocks)
  }
}

export const randomStocks = state => {
  state.companies.forEach(stock => {
    stock.price = stock.price * (0.5 + Math.random())
  })
}

export const setFunds = (state, payload) => {
  if (isFinite(payload)) {
    state.funds = payload
    console.log(state.funds)
  }
}
