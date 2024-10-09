import axios from 'axios';

const BASE_URL = 'http://api.apilayer.com/exchangerates_data/';
const apikey = 'x4Ev8GkC4VACxqdqdhlv1oVd1QuAVydV';
const headers = {
  apikey: apikey
};

const requestOptions = {
  method: 'GET',
  headers: headers
};

export const allCurrency = () => {

  return axios.get(`${BASE_URL}symbols`, requestOptions)
    .then(res => {
      return Object.entries(res.data.symbols);
    })
    .catch(error => {
      console.error('Error fetching currency:', error);
      return null;
    });
};

export const convertCurrency = ( to, from, amount) => {
  return axios.get(`${BASE_URL}convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
    .then(res => {
      return res.data
    })
    .catch(error => {
      console.error('Error fetching currency:', error);
      return null;
    });
}

export const getLatestCourse = ( allCurrencyCodes, base ) => {

  const currencyString = allCurrencyCodes.toString().replaceAll(',', '%2C')
  return axios.get(`${BASE_URL}latest?symbols=${currencyString}&base=${base}`, requestOptions)
    .then(res => {
      return res.data
    })
    .catch(error => {
      console.error('Error fetching currency:', error);
      return null;
    });
}

export const getTimeSeries = ( startDate, endDate, symbols, base ) => {


  return axios.get(`${BASE_URL}timeseries?start_date=${startDate}&end_date=${endDate}&symbols=${symbols}&base=${base}`, requestOptions)
    .then(res => {
      return res.data.rates
    })
    .catch(error => {
      console.error('Error fetching currency:', error);
      return null;
    });
}