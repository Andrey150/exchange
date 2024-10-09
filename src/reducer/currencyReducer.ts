const baseCurrency = localStorage.getItem('baseCurrency')

const defaultState = {
  selectedCurrency: baseCurrency || 'RUB',
}

const currencyReducer = ( state= defaultState, action:any ) => {
  switch (action.type) {
    case "SET_SELECTED_CURRENCY":
      return {
        ...state,
        selectedCurrency: action.payload
      }
    default:
      return state
  }
}
export default currencyReducer;