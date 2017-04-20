/**
 * Module with the root redux-observable epic.
 * @module src/shared/epics/
 */
import { combineEpics } from 'redux-observable';

// Epics.
import hello from './hello';

const rootEpic = combineEpics(
  hello
);

export default rootEpic;
