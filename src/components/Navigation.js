import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

class Navigation extends PureComponent {
  render() {
    return(
      <div className="navbar">
        <div className="navitem"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About us</Link></div>
        <div className="navitem"><Link to="/workshops" style={{ textDecoration: 'none', color: 'white' }}>Workshops</Link></div>
        <div className="navitem"><Link to="/order" style={{ textDecoration: 'none', color: 'white' }}>Order cakes</Link></div>
        <div className="navitem"><Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</Link></div>
      </div>
    )
  }
}

export default Navigation
