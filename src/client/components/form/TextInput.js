/**
 * Module with the TextInput component.
 * @module src/client/components/form/TextInput
 */
// React.
import React from 'react';
import PropTypes from 'prop-types';

// Utils.
import { configComponent } from '../../../shared/utils/';

// Constants.
import { TEXT_INPUT } from '../../constants/component-names';

// Styles.
import '../../styles/components/_text-input.scss';

/**
 * Renders a generic text input field component.
 * @returns {ReactElement} -> The react component.
 */
const TextInput = ({
  children,
  className,
  disabled,
  id,
  label,
  modifiers,
  name,
  onChange,
  placeholder,
  type,
  value
}) => {
  const config = `${modifiers} ${className}`;

  if (label) {
    return (
      <label htmlFor={id} className={`c-label o-form-element ${TEXT_INPUT}__label`}>
        {children}
        <input
          className={`c-field c-field--label ${TEXT_INPUT} ${config.trim()}`}
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </label>
    );
  }
  return (
    <input
      className={`c-field ${TEXT_INPUT} ${config.trim()}`}
      disabled={disabled}
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};

/**
 * The component proptypes.
 * @type {Object}
 * @property {ReactElement} children -> The content of the input label.
 * @property {String} className -> Custom css class.
 * @property {Bool} disabled -> If the component is disabled.
 * @property {String} id -> The html element id.
 * @property {Bool} label -> If the input has a label.
 * @property {String} modifiers -> Custom modifiers of the component.
 * @property {String} name -> The name of the input field.
 * @property {Function} onChange -> On change method handler.
 * @property {String} type -> The type of the input element.
 * @property {String} value -> A custom value of the input.
 */
TextInput.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  modifiers: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};

/**
 * Default props of the component.
 * @type {Object}
 */
TextInput.defaultProps = {
  type: 'text'
};

export default configComponent(TextInput, TEXT_INPUT, { isInput: true });
