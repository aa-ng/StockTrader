export const funds = state => {
  return state.funds
}

export const fundsString = state => {
  return '$' + state.funds.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const tabs = state => {
  return state.tabs
}

export const companies = state => {
  return state.companies
}

export const stocks = state => {
  return state.stocks
}
