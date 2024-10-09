
const defaultState = {
  dateDays: [] as string[],
}

const dateReducer = ( state= defaultState, action:any ) => {
  switch (action.type) {
    case "SET_DATE_DAYS":
      return {
        ...state,
        dateDays: action.payload
      }
    default:
      return state
  }
}
export default dateReducer;