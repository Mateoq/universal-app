/**
 * Module with the home reducer.
 * @module src/shared/reducers/home
 */
import { createReducer } from 'redux-create-reducer';

// Actions.
import { TOGGLE_HELLO } from '../constants/actions';

const initialState = { sayHi: false };

const actionHandlers = {
  [TOGGLE_HELLO]: state => ({
    sayHi: !state.sayHi
  })
};

export default createReducer(initialState, actionHandlers);
