// @flow
import React from 'react'
import classnames from 'classnames'

const styles = {
  input: {
    flex: 1
  }
}

type ButtonTextInputProps = {
  textValue: string,
  onTextChange: EventHandler,
  buttonText: string,
  onButtonClick: Function,
  buttonClassName: string
}

export class ButtonTextInput extends React.Component {
  props: ButtonTextInputProps
  static defaultProps: { buttonClassName: string }

  render() {
    const {textValue, onTextChange, buttonText, onButtonClick, buttonClassName} = this.props
    return (
      <p className="control has-addons">
        <input className="input" value={textValue} onChange={onTextChange} type="text" style={styles.input} />
        <a className={classnames('button', buttonClassName)} onClick={onButtonClick}>
          {buttonText}
        </a>
      </p>
    )
  }
}

ButtonTextInput.defaultProps = {
  buttonClassName: ''
}
