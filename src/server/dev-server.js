/* eslint-disable import/no-extraneous-dependencies */
/**
 * Module with the dev server config.
 * @module src/server/dev-server
 */
// Node.
import Express from 'express';

// Webpack.
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// App Config.
import { env } from '../../config/';
import webpackConfig from '../../webpack/dev/webpack.config';

// Utils.
import { serverCallback } from './utils/';

// Constants.
import { DEV_SIGNAL } from '../shared/constants/messages';

//
// Server Configuration
// -----------------------------------------------------------------------------
const app = new Express();
const compiler = webpack(webpackConfig);
const serverOptions = {
  contentBase: `http://${env.HOST}:${env.DEV_SERVER_PORT}`,
  compress: true,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  overlay: {
    warnings: true,
    errors: true
  },
  publicPath: webpackConfig.output.publicPath,
  headers: { 'Access-Controls-Allow-Origin': '*' },
  stats: {
    chunks: true,
    colors: true,
    timings: true
  },
  progress: true,
  serverSideRender: true
};

app.use(webpackMiddleware(compiler, serverOptions));
app.use(webpackHotMiddleware(compiler));

//
// Initialize Server
// -----------------------------------------------------------------------------
app.listen(
  env.DEV_SERVER_PORT,
  serverCallback(`${DEV_SIGNAL} ${env.DEV_SERVER_PORT}`)
);
