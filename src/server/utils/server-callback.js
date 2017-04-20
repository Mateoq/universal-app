/**
 * Module with a simple utility with the express listen method callback.
 * @module src/server/utils/server-callback
 */
// Node.
import emoji from 'node-emoji';

// Utils.
import { Logger } from './';

/**
 * Server on start callback that will log error or success.
 * @param {String} message -> The server success message.
 * @returns {Function} -> The callback method.
 */
const serverCallback = message => (err) => {
  let icon = emoji.get('earth_asia');
  if (err) {
    icon = emoji.get('bangbang');
    Logger.error(`${err} ${icon}`);
  } else {
    Logger.log(`${icon} ${message}`);
  }
};

export default serverCallback;
