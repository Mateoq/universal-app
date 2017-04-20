/**
 * Module with the assign orders to distributor actions.
 * @module src/shared/actions/home
 */
// Constants.
import {
  DUMMY_ACTION,
  TOGGLE_HELLO
} from '../constants/actions';

export const dumyAction = () => ({
  type: DUMMY_ACTION
});

export const toggleHello = () => ({
  type: TOGGLE_HELLO
});
