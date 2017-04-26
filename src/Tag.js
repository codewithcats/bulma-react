// @flow
import React from 'react'
import classnames from 'classnames'

type TagProps = {
  text: string,
  size: '' | 'medium' | 'large',
  color: ColorScheme
}

export class Tag extends React.Component {
  props: TagProps
  static defaultProps: { size: string, color: ColorScheme }

  render() {
    const {text, size, color} = this.props
    const cls = classnames('tag', {
      [`is-${size}`]: size,
      [`is-${color}`]: color
    })
    return (
      <span className={cls}>{text}</span>
    )
  }
}

Tag.defaultProps = {
  size: '',
  color: ''
}
