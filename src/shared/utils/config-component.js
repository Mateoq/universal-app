/**
 * Module with the component configuration HOC.
 * @module src/shared/utils/config-component
 */
// React.
import React from 'react';
import PropTypes from 'prop-types';

// Utils.
import { componentHelpers } from './';

/**
 * HOC the pre configure a component with several utilities.
 * @param {ReactElement} WrappedComponent -> The component to configure.
 * @param {String} componentName -> The component name.
 * @param {Object} options -> Extra options.
 * @returns {ReactElement} -> The configured component.
 */
const configComponent = (WrappedComponent, componentName, options = {}) => {
  const { isInput } = options;
  const ConfigComponent = ({
    theme,
    layout,
    valid,
    ...props
  }) => {
    let modifiers = componentHelpers
      .concatStyleModifiers(componentName, [theme, layout]);

    if (!valid && isInput) {
      modifiers += ` ${componentName}--invalid`;
    }

    return (
      <WrappedComponent
        {...props}
        modifiers={modifiers}
      />
    );
  };

  ConfigComponent.propTypes = {
    layout: PropTypes.string,
    theme: PropTypes.string,
    valid: PropTypes.bool
  };

  ConfigComponent.defaultProps = {
    className: '',
    valid: true
  };

  return ConfigComponent;
};

export default configComponent;
