import React from 'react'
import logo from './logo.m.png'
import './header.scss'
function Header() {
  return (
    <div className='header'>
      <div className="header_wrapper container">
        <div className="header_div">
          <img src={logo} alt="" />
          <h4>Muhammadziyo</h4>
        </div>
        <ul>
          <li className='header_linker' ><a href="#home">Home</a></li>
          <li className='header_linker' ><a href="#about">About</a></li>
          <li className='header_linker' ><a href="#education">Education</a></li>
          <li className='header_linker' ><a href="#skills">Skills</a></li>
          <li className='header_linker' ><a href="#project">Projects</a></li>
          <li className='header_linker' ><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header