import React, { PureComponent } from 'react'
import { Player } from 'video-react'

class Workshops extends PureComponent {
  render() {
    return(
      <div className="workshops page" id="workshops">
        <h1 className="title container-title">Workshops</h1>
        <Player
          playsInline
          src="../..images/video/mixing.mp4"
        />
      </div>
    )
  }
}

export default Workshops
