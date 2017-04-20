/**
 * Module with the CheckBox component.
 * @module src/client/components/form/CheckBox
 */
// React.
import React from 'react';
import PropTypes from 'prop-types';

// Utils.
import { configComponent } from '../../../shared/utils/';

// Constants
import { CHECK_BOX } from '../../constants/component-names';

// Styles.
import '../../styles/components/_check-box.scss';

/**
 * Renders a customized CheckBox component.
 * @returns {ReactElement} -> The react component.
 */
const CheckBox = ({
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
        htmlFor={name}
        className={`c-field c-field--choice c-label ${CHECK_BOX}__label`}
      >
        <input
          checked={checked}
          className={`${CHECK_BOX} ${config.trim()}`}
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          type="checkbox"
          value={value}
        />
        <span>{children}</span>
      </label>
    );
  }

  return (
    <input
      checked={checked}
      className={`${CHECK_BOX} ${config.trim()}`}
      disabled={disabled}
      id={id}
      name={name}
      onChange={onChange}
      type="checkbox"
      value={value}
    />
  );
};

/**
 * The component proptypes.
 * @type {Object}
 * @property {Bool} checked -> The checked state of the checkbox.
 * @property {ReactElement} children -> The content of the component.
 * @property {String} className -> Custom css class.
 * @property {Bool} disabled -> If the component is disabled.
 * @property {String} id -> The html element id.
 * @property {Bool} label -> If the input has a label.
 * @property {String} modifiers -> Custom modifiers of the component.
 * @property {String} name -> The name of the input field.
 * @property {Function} onChange -> On change method handler.
 * @property {String} value -> A custom value of the input.
 */
CheckBox.propTypes = {
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

export default configComponent(CheckBox, CHECK_BOX, { isInput: true });
