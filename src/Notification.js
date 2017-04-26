// @flow
import React from 'react'
import classnames from 'classnames'

type Mode = 'primary' | '' | 'info' | 'success' | 'warning' | 'danger'

type Props = {
  msg: ?string,
  mode: Mode,
  onClose: Function
}

export class Notification extends React.Component {
  props: Props
  static defaultProps: { mode: Mode, onClose: Function }

  render() {
    const {msg, mode, onClose} = this.props
    return (
      <div className={classnames("notification", { [`is-${mode}`]: mode })}>
        <button className="delete" onClick={onClose}></button>
        {msg}
      </div>
    )
  }
}

Notification.defaultProps = {
  mode: '',
  onClose: () => {}
}
