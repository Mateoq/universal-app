/**
 * Module with the express server config.
 * @module src/server/server
 */
// Node.
import Express from 'express';
import { Server } from 'http';
import compression from 'compression';

// App config.
import { env } from '../../config/';

// Utils.
import { serverCallback } from './utils/';

// Constants.
import { SIGNAL } from '../shared/constants/messages';

// Middlewares.
import * as middlewares from './middlewares/';

// Express server.
const app = new Express();
const server = new Server(app);

//
// Express Configuration.
// -----------------------------------------------------------------------------

// Compression.
if (!env.DEBUG) {
  app.use(compression());
}

// Set server env constant.
global._CLIENT_ = false;

// Middlewares.
// ====================================

// I. Static Assets.
middlewares.staticMiddleware(app);
// II. API Proxy.
middlewares.apiMiddleware(app, server);
// III. Render.
middlewares.renderMiddleware(app);

//
// Initialize Express.
// -----------------------------------------------------------------------------
server.listen(
  env.SERVER_PORT,
  serverCallback(`${SIGNAL} http://${env.HOST}:${env.SERVER_PORT}`)
);
