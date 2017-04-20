/**
 * Module with the SelectBox component.
 * @module src/client/components/form/SelectBox
 */
// React.
import React from 'react';
import PropTypes from 'prop-types';

// Utils.
import { configComponent } from '../../../shared/utils/';

// Constants.
import { SELECT_BOX } from '../../constants/component-names';

// Styles.
import '../../styles/components/_select-box.scss';

/**
 * Renders a customized select input component.
 * @returns {ReactElement} -> The react component.
 */
const SelectBox = ({
  children,
  className,
  disabled,
  id,
  label,
  modifiers,
  name,
  onChange,
  options,
  placeholder,
  value
}) => {
  const config = `${modifiers} ${className}`;

  if (label) {
    return (
      <label
        htmlFor={id}
        className={`c-label o-form-element ${SELECT_BOX}__label`}
      >
        <span>{children}</span>
        <select
          className={`c-field c-field--label ${SELECT_BOX} ${config.trim()}`}
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          value={value}
        >
          <option value="none">{placeholder}</option>
          {options.map((option, key) => (
            <option key={btoa(`option_${key}`)} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </label>
    );
  }

  return (
    <select
      className={`c-field ${SELECT_BOX} ${config.trim()}`}
      disabled={disabled}
      id={id}
      name={name}
      onChange={onChange}
      value={value}
    >
      <option value="none">{placeholder}</option>
      {options.map((option, key) => (
        <option key={btoa(`option_${key}`)} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
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
 * @property {Array} options -> The collection of options of the select.
 * @property {String} placeholder -> The placeholder for the input.
 * @property {String} value -> A custom value of the input.
 */
SelectBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.bool,
  modifiers: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default configComponent(SelectBox, SELECT_BOX, { isInput: true });
