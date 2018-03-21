import React, { Component } from 'react'
import Cover from '../components/Cover'
import Navigation from '../components/Navigation'
import MainContent from './MainContent'
import './HomePage.css'

class HomePage extends Component {
  render() {
    return (
      <div className="app">
        <Cover />
        <Navigation />
        <MainContent />
      </div>
    );
  }
}

export default HomePage;
