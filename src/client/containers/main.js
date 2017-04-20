/**
 * Module with the app Main component.
 * @module src/client/containers/main
 */
// React - Redux.
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

// Styles.
import '../styles/main.scss';

/**
 * Renders the Main container component.
 * @returns {ReactElement} -> The react component.
 */
const Main = ({ children }) => (
  <main>
    <header>
      <ul className="c-nav c-nav--inline">

      </ul>
    </header>
    {children}
  </main>
);

/**
 * The component proptypes.
 * @type {Object}
 * @property {ReactElement} children -> The content of the current route.
 * @property {Object} user -> The user properties.
 */
Main.propTypes = {
  children: PropTypes.node.isRequired
};

const mapDispatchToProps = dispatch => ()

export default Main;
