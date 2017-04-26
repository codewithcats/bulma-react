// @flow
import React from 'react'

const styles = {
  label: {
    display: 'flex'
  },
  help: {
    fontWeight: 'normal',
    marginLeft: '1rem'
  }
}

type LabelProps = {
  text: string,
  help: string
}

export class Label extends React.Component {
  props: LabelProps
  static defaultProps: { help: string }

  render() {
    const {text, help} = this.props
    return (
      <label className="label" style={styles.label}>
        {text} {help && <span className="help" style={styles.help}>{help}</span>}
      </label>
    )
  }
}

Label.defaultProps = {
  help: ''
}
