/**
 * Module with the render middleware.
 * @module src/server/middlewares/render-middleware
 */
// Node.
import serialize from 'serialize-javascript';

// React - Router - Redux.
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';

// App Config.
import { env } from '../../../config/';
import * as responses from '../constants/responses';

// Utils.
import { configureStore } from '../../shared/utils/';

// App.
import reducer from '../../shared/reducers/';

// Components.
import { Html } from '../components/';
import { Routes } from '../../shared/components/';

/**
 * Render the content.
 * @private
 * @param {String} content -> The content to be rendered.
 * @returns {String} -> The html.
 */
const render = html => (`<!DOCTYPE html>${html}`);

 /**
  * Configure the settings to render the html.
  * @private
  * @param {Object} store -> The redux store.
  * @param {String} url -> The url to be passed to the router.
  * @returns {String} -> The rendered html.
  */
const renderHtml = (store, url) => {
  // This context object contains the results of the render.
  const context = {};
  const preloadedState = serialize(store.getState());
  const html = renderToString(
    <Html
      assets={webpackIsomorphicTools.assets()}
      preloadedState={preloadedState}
    >
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          <Routes />
        </StaticRouter>
      </Provider>
    </Html>
  );

  return { context, html };
};

/**
 * Render middleware handler.
 * @private
 * @param {Object} req -> The request object.
 * @param {Object} res -> The response object.
 * @returns {void}
 */
const handleRender = (req, res) => {
  // Create the Redux store.
  const store = configureStore(reducer);

  // Refresh Isomorphic Assets.
  if (env.DEBUG) {
    // webpackIsomorphicTools is located in the globals.
    webpackIsomorphicTools.refresh();
  }

  // Rendering process.
  const content = renderHtml(store, req.url);

  // context.url will contain the URL to redirect to if a <Redirect> was used.
  if (content.context.url) {
    return res
      .redirect(
        responses.REDIRECT,
        content.context.url
      );
  }

  return res
    .status(responses.OK)
    .send(render(content.html));
};

/**
 * Configure render middleware.
 * @param {Object} app -> The server instance.
 * @returns {void}
 */
const renderMiddleware = (app) => {
  app.use(handleRender);
};

export default renderMiddleware;
