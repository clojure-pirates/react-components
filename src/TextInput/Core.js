import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Core extends Component {
  static propTypes = {
    autoComplete: PropTypes.oneOf(["on", "off"]),
    autoFocus: PropTypes.bool,
    isFocused: PropTypes.bool,
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    disabled: PropTypes.bool.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    maxLength: PropTypes.number,
    onClick: PropTypes.func,
    onArrowDown: PropTypes.func,
    onArrowLeft: PropTypes.func,
    onArrowRight: PropTypes.func,
    onArrowUp: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
    onEnter: PropTypes.func,
    onEscape: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onPaste: PropTypes.func,
    placeholder: PropTypes.string,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    /** Use `valueType` instead */
    type: (props, propName, componentName) => {
      if (propName in props) {
        return new Error(
          "The TextInput does not accept a type prop use valueType instead"
        );
      }
    },
    /** Supports all valid [Input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) */
    valueType: PropTypes.string,
    value: PropTypes.string,
    innerRef: PropTypes.func
  };

  static defaultProps = {
    autoComplete: "off",
    disabled: false,
    valueType: "text"
  };

  render() {
    const {
      autoComplete,
      autoFocus,
      className,
      defaultValue,
      dir,
      disabled,
      id,
      isFocused,
      name,
      maxLength,
      onArrowDown,
      onArrowLeft,
      onArrowRight,
      onArrowUp,
      onClick,
      onBlur,
      onChange,
      onDelete,
      onEnter,
      onEscape,
      onFocus,
      onKeyDown,
      onPaste,
      placeholder,
      tabIndex,
      testId,
      type,
      value,
      valueType,
      innerRef
    } = this.props;

    const handlers = {
      "8": onDelete,
      "13": onEnter,
      "27": onEscape,
      "37": onArrowLeft,
      "38": onArrowUp,
      "39": onArrowRight,
      "40": onArrowDown
    };

    const props = {
      autoFocus,
      autoComplete,
      className,
      "data-test-id": testId,
      defaultValue,
      dir,
      disabled,
      id,
      name,
      maxLength,
      onClick,
      onBlur,
      onChange(event) {
        onChange && onChange(event.target.value, event);
      },
      onFocus,
      onKeyDown(event) {
        const handler = handlers[event.keyCode];
        handler && handler(event);
        onKeyDown && onKeyDown(event);
      },
      onPaste,
      placeholder,
      tabIndex,
      type: valueType || type,
      value
    };

    return (
      <input
        {...props}
        ref={input => {
          this.input = input;
          input && isFocused && input.focus();
          innerRef && innerRef(input);
        }}
      />
    );
  }
}
