import React, { PureComponent } from 'react'
import InstagramEmbed from 'react-instagram-embed'

class Project extends PureComponent {
  render() {
    return(
      <div className="project">
        <p>This is a super nice project</p>
        <InstagramEmbed
          url='https://www.instagram.com/p/Bf6nKYEFCx4/'
          maxWidth={320}
          hideCaption={false}
        />
      </div>
    )
  }
}

export default Project
