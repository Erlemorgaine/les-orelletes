import React, { PureComponent } from 'react'
import Project from '../components/Project'

class ProjectsContainer extends PureComponent {
  render() {
    return(
      <div className="projects-container home-item">
        <div className="container-content">
          <h3 className="title container-title">Our projects</h3>
          <Project />
        </div>
      </div>
    )
  }
}

export default ProjectsContainer
