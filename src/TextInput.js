// @flow
import React from 'react'
import classnames from 'classnames'

type TextInputProps = {
  label: string,
  placeholder: ?string,
  onChange: InputEventHandler,
  value: string,
  type: string,
  size: string,
  icon: string,
  helpText: string,
  helpMode: ColorScheme
}

export class TextInput extends React.Component {
  props: TextInputProps
  static defaultProps: { placeholder: ?string, type: string, size: string,
          icon: string, label: string, helpText: string, helpMode: ColorScheme }

  render() {
    const { label, type, placeholder, onChange, size, value, icon, helpText, helpMode } = this.props
    const sizeClass = `is-${size}`
    return (
      <div className="control">
        {label && <label className="label">{label}</label>}
        <p className={classnames("control", { 'has-icon has-icon-right': icon })}>
          <input type={type}
                 className={classnames('input', { [sizeClass]: size, [`is-${helpMode}`]: helpMode })}
                 placeholder={placeholder}
                 value={value}
                 onChange={onChange}
          />
          {icon && (
            <span className={classnames('icon', { [sizeClass]: size })}>
              <i className={`fa fa-${icon}`}></i>
            </span>
          )}
        </p>
        {helpText && <p className={classnames('help', {[`is-${helpMode}`]: helpMode})}>{helpText}</p>}
      </div>
    )
  }
}

TextInput.defaultProps = {
  placeholder: '',
  type: 'text',
  size: '',
  icon: '',
  label: '',
  helpMode: '',
  helpText: ''
}
