
const defaultState = {
  amounts: [] as string[],
}

const amountReducer = ( state= defaultState, action:any ) => {
  switch (action.type) {
    case "SET_AMOUNT":
      return {
        ...state,
        amounts: action.payload
      }
    default:
      return state
  }
}
export default amountReducer;