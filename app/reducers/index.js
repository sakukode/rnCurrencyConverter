import { combineReducers } from 'redux';

import currencies from './currencies';
import theme from './theme';
import nav from './nav';

export default combineReducers({
  currencies,
  theme,
  nav,
});
