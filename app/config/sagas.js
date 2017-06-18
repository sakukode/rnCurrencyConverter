import { takeEvery } from 'redux-saga/effects';

// 1. Swap currency
// 2. Change base currency
// 3. Upon initial App load

import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION } from '../actions/currencies';

function* fetchLatestConversionRates(action) {
  console.log('TODO Update the things', action);
  yield;
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
}
