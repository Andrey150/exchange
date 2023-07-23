export const setSelectedCurrency = (currencyCode: string) => {
  return {
    type: 'SET_SELECTED_CURRENCY',
    payload: currencyCode,
  };
};

export const setDateDays = (dateDays: Array<string>) => {
  return {
    type: 'SET_DATE_DAYS',
    payload: dateDays
  }
}
export const setAmounts = (amounts: Array<string>) => {
  return {
    type: 'SET_AMOUNT',
    payload: amounts
  }
}