import React, { useState } from 'react'
import { Nav, NavLinks, NavBtn, Hamburger } from './NavbarStyles'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [clicked, setClicked] = useState(false)
  
  const handleClick = () => {
    setClicked(!clicked) //toggle
  }
  console.log('Que onda tu día?')
  
  return (
    <header>
        <Nav className={`${clicked ? 'actived-nav' : ''}`}>
          <NavLink to='/'>
            <img src="/LogoDevly.png" alt='logo' style={{width: '90px'}}/>
          </NavLink>
        
          <NavLinks className={`${clicked ? 'actived' : ''}`}> 
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/work'>Our Work</NavLink>
            <NavLink to='/services'>Services</NavLink>

            <NavBtn style={{cursor: 'pointer'}} onClick={window.screen.width <= 560 ? handleClick : null}
              activeClass="active"
              to="form"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1300}
            >
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2px'}}>
                <i className='material-icons'>mail_outline</i>
                <p>Contactanos</p>
              </div>
            </NavBtn>
          </NavLinks>

          <Hamburger className={`hamburger ${clicked ? 'open' : ''}`} onClick={handleClick}>
            <div className="_layer -top"></div>
            <div className="_layer -mid"></div>
            <div className="_layer -bottom"></div>
          </Hamburger>
        </Nav>
    </header>
  )
}

export default Navbar