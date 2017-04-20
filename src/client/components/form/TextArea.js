/**
 * Module with the TexArea input component.
 * @module src/client/components/form/TextArea
 */
// React.
import React from 'react';
import PropTypes from 'prop-types';

// Utils.
import { configComponent } from '../../../shared/utils/';

// Constants.
import { TEXT_AREA } from '../../constants/component-names';

// Styles.
import '../../styles/components/_text-area.scss';

/**
 * Renders a customized textarea input component.
 * @returns {ReactElement} -> The react component.
 */
const TextArea = ({
  children,
  className,
  cols,
  disabled,
  id,
  label,
  modifiers,
  name,
  onChange,
  placeholder,
  rows,
  value
}) => {
  const config = `${modifiers} ${className}`;

  if (label) {
    return (
      <label
        htmlFor={id}
        className={`c-label o-form-element ${TEXT_AREA}__label`}
      >
        <span>{children}</span>
        <textarea
          className={`c-field c-field--label ${TEXT_AREA} ${config.trim()}`}
          cols={cols}
          disabled={disabled}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          value={value}
        />
      </label>
    );
  }
  return (
    <textarea
      className={`c-field ${TEXT_AREA} ${config.trim()}`}
      cols={cols}
      disabled={disabled}
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      value={value}
    />
  );
};

/**
 * The component proptypes.
 * @type {Object}
 * @property {ReactElement} children -> The content of the input label.
 * @property {String} className -> Custom css class.
 * @property {Number} cols -> Number of columns of the input.
 * @property {Bool} disabled -> If the component is disabled.
 * @property {String} id -> The html element id.
 * @property {Bool} label -> If the input has a label.
 * @property {String} modifiers -> Custom modifiers of the component.
 * @property {String} name -> The name of the input field.
 * @property {Function} onChange -> On change method handler.
 * @property {String} placeholder -> The placeholder for the input.
 * @property {Number} rows -> Number of rows of the input.
 * @property {String} value -> A custom value of the input.
 */
TextArea.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cols: PropTypes.number,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.bool,
  modifiers: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string
};

export default configComponent(TextArea, TEXT_AREA, {
  isInput: true
});
