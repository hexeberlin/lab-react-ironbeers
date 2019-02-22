import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <nav className="NavBar">
        <Link to="/"><img src='/images/home.png' alt="Home"/></Link>
      </nav>
    )
  }
}
