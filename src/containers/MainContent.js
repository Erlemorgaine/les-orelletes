import React, { PureComponent } from 'react'
import Thoughts from '../components/Thoughts'
import Articles from '../components/Articles'
import ProjectsContainer from './ProjectsContainer'
import RecipesContainer from './RecipesContainer'
import './MainContent.css'

class MainContent extends PureComponent {
  render() {
    return(
      <div className="homepage">
        <ProjectsContainer />
        <RecipesContainer />
        <Articles />
        <Thoughts />
      </div>
    )
  }
}

export default MainContent
