/**
 * Module with the Button form component.
 * @module src/client/components/form/Button
 */
// React.
import React from 'react';
import PropTypes from 'prop-types';

// Utils.
import {
  configComponent,
  componentHelpers
} from '../../../shared/utils/';

// Constants.
import { BUTTON } from '../../constants/component-names';

// Styles.
import '../../styles/components/_button.scss';

/**
 * Renders a customized Button component.
 * @returns {ReactElement} -> The Button component.
 */
const Button = ({
  block,
  children,
  className,
  close,
  disabled,
  id,
  modifiers,
  onClick,
  size,
  type
}) => {
  let config = componentHelpers
    .concatStyleModifiers(BUTTON, [block, close]);

  if (size) {
    config += `u-${size} `;
  }

  config += ` ${modifiers} ${className}`;

  return (
    <button
      className={`c-button ${config.trim()}`}
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

/**
 * The component proptypes.
 * @type {Object}
 * @property {Bool} block -> Custom modifier of the button.
 * @property {ReactElement} children -> The content of the component.
 * @property {String} className -> Custom css class.
 * @property {Bool} close -> Custom modifier of the button.
 * @property {Bool} disabled -> If the component is disabled.
 * @property {String} id -> The html element id.
 * @property {String} modifiers -> Custom modifiers of the button.
 * @property {Function} onClick -> Click method handler.
 * @property {String} size -> Custom size of the component.
 * @property {String} type -> Html type of the button.
 */
Button.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  close: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  modifiers: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string
};

export default configComponent(Button, BUTTON);
