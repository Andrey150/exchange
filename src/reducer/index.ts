import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer';
import dateReducer from './dateReducer';
import amountReducer from './amountReducer';

const rootReducer = combineReducers({
  currency: currencyReducer,
  date: dateReducer,
  amount: amountReducer,
});

export default rootReducer;