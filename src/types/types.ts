export interface IRootReducer {
  currency: {
    selectedCurrency: string;
  };
  amount: {
    amounts: string[];
  };
  date: {
    dateDays: string[];
  };
}