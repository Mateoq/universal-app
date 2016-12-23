import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers.
import user from './user';
import toastList from './toast-list-reducer';
import loading from './loading';
import loginForm from './login-form';

export default combineReducers({
  routing: routerReducer,
  user,
  toastList,
  loading,
  loginForm
});
