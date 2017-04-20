/**
 * Module with some string helpers.
 * @module src/shared/utils/helpers/string
 */

/**
 * Checks if a string is empty.
 * @param {String} string -> The string to check.
 * @returns {Bool} -> If the string is empty.
 */
const empty = string => (string.length === 0);

export default { empty };
