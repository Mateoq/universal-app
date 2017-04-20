/**
 * Module with the RadioButton component.
 * @module src/client/components/form/RadioButton
 */
// React.
import React from 'react';
import PropTypes from 'prop-types';

// Utils.
import { configComponent } from '../../../shared/utils/';

// Constants.
import { RADIO_BUTTON } from '../../constants/component-names';

// Styles.
import '../../styles/components/_radio-button.scss';

/**
 * Renders a customized radio button input component.
 * @returns {ReactElement} -> The react component.
 */
const RadioButton = ({
  checked,
  children,
  className,
  disabled,
  id,
  label,
  modifiers,
  name,
  onChange,
  value
}) => {
  const config = `${modifiers} ${className}`;

  if (label) {
    return (
      <label
        htmlFor={id}
        className={`c-field c-field--choice c-label ${RADIO_BUTTON}__label`}
      >
        <input
          checked={checked}
          className={`${RADIO_BUTTON} ${config.trim()}`}
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          type="radio"
          value={value}
        />
        {children}
      </label>
    );
  }

  return (
    <input
      checked={checked}
      className={`${RADIO_BUTTON} ${config.trim()}`}
      disabled={disabled}
      id={id}
      name={name}
      onChange={onChange}
      type="radio"
      value={value}
    />
  );
};

/**
 * The component proptypes.
 * @type {Object}
 * @property {Bool} checked -> The checked state of the html element.
 * @property {ReactElement} children -> The content of the input label.
 * @property {String} className -> Custom css class.
 * @property {Bool} disabled -> If the component is disabled.
 * @property {String} id -> The html element id.
 * @property {Bool} label -> If the input has a label.
 * @property {String} modifiers -> Custom modifiers of the component.
 * @property {String} name -> The name of the input field.
 * @property {Function} onChange -> On change method handler.
 * @property {String} value -> A custom value of the input.
 */
RadioButton.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.bool,
  modifiers: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default configComponent(RadioButton, RADIO_BUTTON, {
  isInput: true
});
