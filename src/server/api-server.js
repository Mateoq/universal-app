/**
 * Module with the api server config.
 * @module src/server/api-server
 */
import Express from 'express';
import jwt from 'jsonwebtoken';

// App Config.
import { env, TOKEN_SECRET } from '../../config/';

// Middlewares.
import sessionMiddleware from './middlewares/session-middleware';

// Services.
import { fetchUserRequest } from './api-services/';

// Utils.
import { Log } from './utils/';

// Constants.
import * as responses from './constants/responses';
import * as values from './constants/values';
import * as messages from '../shared/constants/messages';


// Express server.
const app = new Express();

//
// API Configuration.
// -----------------------------------------------------------------------------

// Setup session.
sessionMiddleware(app);

//
// API Services.
// -----------------------------------------------------------------------------
app.get('/api', (req, res) => {
  res
    .status(responses.OK)
    .send('ok');
});


//
// API Initialize.
// -----------------------------------------------------------------------------
app.listen(env.API_PORT, (err) => {
  if (err) {
    Log.error(err);
  } else {
    Log.info(`${messages.API_SIGNAL} ${env.API_PORT}`);
  }
});
