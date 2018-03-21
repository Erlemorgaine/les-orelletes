import React, { PureComponent } from 'react'
import './Cover.css'

class Cover extends PureComponent {
  render() {
    return(
      <div className="cover">
        <div className="title-box">
          <div className="cover-title">Les Orelletes</div>
          <div className="title cover-subtitle">sustainable baking</div>
        </div>
      </div>
    )
  }
}

export default Cover
