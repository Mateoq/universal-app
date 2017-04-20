/**
 * Module with the app root reducer.
 * @module src/shared/reducers/
 */
// Redux.
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers.
import home from './home';

// Root Reducer.
export default combineReducers({
  routing: routerReducer,
  home
});
