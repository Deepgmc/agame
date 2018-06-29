import {combineReducers} from 'redux';

import agame from './agame';

const allReducers = combineReducers({
  agame: agame
});
export default allReducers;
