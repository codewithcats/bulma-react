// @flow
import React from 'react'

type MediaProps = {
  left: any,
  content: any
}

export class Media extends React.Component {
  props: MediaProps
  static defaultProps: { left: any, content: any }

  render() {
    const { left, content } = this.props
    return (
      <div className="media">
        <div className="media-left">
          {left}
        </div>
        <div className="media-content">
          <div className="content">
            {content}
          </div>
        </div>
      </div>
    )
  }
}

Media.defaultProps = { left: null, content: null }
