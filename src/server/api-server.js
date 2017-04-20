/**
 * Module with the api server config.
 * @module src/server/api-server
 */
// Node.
import express from 'express';
import bodyParser from 'body-parser';

// App Config.
import { env } from '../../config/';

// Utils.
import { serverCallback } from './utils/';

// Constants.
import { API_SIGNAL } from '../shared/constants/messages';
import { OK } from './constants/responses';


// Express server.
const app = express();

//
// API Configuration.
// -----------------------------------------------------------------------------
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

//
// API Services.
// -----------------------------------------------------------------------------

app.get('/api/hello', (req, res) => {
  res.status(OK).send({ message: 'Hello' });
});

//
// API Initialization.
// -----------------------------------------------------------------------------
app.listen(
  env.API_PORT,
  serverCallback(`${API_SIGNAL} ${env.API_PORT}`)
);
