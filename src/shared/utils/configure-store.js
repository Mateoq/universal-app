/**
 * Module with the redux store configuration.
 * @module src/shared/utils/configure-store
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistState } from 'redux-devtools';

// Containers.
import { DevTools } from '../containers/';

// App Config.
import { env } from '../../../config/';

// App.
import reducer from '../reducers/';

/**
 * Create a composed store.
 * @param {Object} reducers -> The app reducer.
 * @param {Object} rootEpic -> The app epics.
 * @param {Object} history -> Browser history.
 * @param {Object} initialState -> The initial state of the app.
 * @returns {Object} -> Redux store.
 */
const configureStore = (
  reducers,
  rootEpic,
  history,
  initialState = {}
) => {
  // Middlewares.
  const epicMiddleware = createEpicMiddleware(rootEpic);
  let enhancer = applyMiddleware(epicMiddleware);

  // Only the client will manage the router history.
  if (_CLIENT_) {
    const reduxRouterMiddleware = routerMiddleware(history);
    enhancer = applyMiddleware(reduxRouterMiddleware, epicMiddleware);

    if (env.DEBUG) {
      enhancer = compose(
        enhancer,
        DevTools.instrument(),
        persistState(
          window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
          )
        )
      );
    }
  }

  const store = createStore(reducers, initialState, enhancer);

  if (env.DEBUG && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducers = reducer;
      store.replaceReducer(nextReducers);
    });
  }

  return store;
};

export default configureStore;
