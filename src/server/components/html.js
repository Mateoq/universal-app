/* eslint-disable react/no-danger */
/**
 * Module with the render html component.
 * @module src/server/components/Html
 */
// Node.
import shortId from 'shortid';

// React.
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// App Config.
import { MOUNT_ID } from '../../../config/';

/**
 * The HTML base component used in the server side rendering.
 */
class Html extends Component {
  /**
   * The component proptypes.
   * @type {Object}
   * @property {Function} assets -> The app assets paths.
   * @property {Function} children -> The content of the app.
   * @property {Function} perloadedState -> The pre-caculated state of the app.
   */
  static propTypes = {
    assets: PropTypes.shape().isRequired,
    children: PropTypes.node.isRequired,
    preloadedState: PropTypes.string.isRequired
  };

 /**
  * Renders each style component of the assets.
  * @param {Array} styles -> The app styles.
  * @returns {Array} -> The array of link components.
  */
  mapStyles = styles => (
    Object.keys(styles).map(style => (
      <link
        key={`style_${shortId.generate()}`}
        rel="stylesheet" href={styles[style]}
      />
    ))
  );

  /**
   * Renders each script component of the assets.
   * @param {Array} scrips -> The app scripts.
   * @returns {Array} -> The array of script components.
   */
  mapScripts = scripts => (
    Object.keys(scripts).map(script => (
      <script
        key={`script_${shortId.generate()}`}
        src={scripts[script]}
      />
    ))
  );

  /**
   * Renders the HTML component.
   * @returns {ReactElement} -> The component.
   */
  render() {
    const { assets, children, preloadedState } = this.props;
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Logística - DOLCE</title>
          {/* Render Styles. */}
          {this.mapStyles(assets.styles)}
        </head>
        <body className="c-text">
          {/* Render Content. */}
          <div id={MOUNT_ID}>{children}</div>
          <script dangerouslySetInnerHTML={{ __html: `window.__PRELOADED_STATE__ = ${preloadedState}` }} />
          {/* Render Scripts. */}
          {this.mapScripts(assets.javascript)}
        </body>
      </html>
    );
  }
}

export default Html;
