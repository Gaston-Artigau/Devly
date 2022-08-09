import React from 'react'
import { FooterTemplate, FooterLinks } from './FooterStyles'
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterTemplate>
      <div>
        <NavLink to='/'><img src="/LogoDevly.png" alt='logo' style={{width: '90px', height: '100%'}}/></NavLink>
        <p>Estamos listos para cualquier desafío. Estas listo para: ¡subir al siguiente nivel!</p>
        <div className='div-contact' style={{flexDirection: 'row'}}>
          <a href='mailto:gastonartigau@gmail.com'>gastonartigau@gmail.com</a>
          <a href='tel:+54 9 2477 658055'>+54 9 2477 658055</a>
        </div>
        <div>
          <p>© Devly 2022. Todos los derechos reservados.</p>
          <Link to='/privacy-policy'><span>Politica de Privacidad</span></Link>
        </div>
      </div>

      <FooterLinks>
        <h4>siguenos</h4>
        <ul>
          <li><a href='https://www.instagram.com/gaston_artigau/' target='_blank' rel='noopener noreferrer'>
          <BsInstagram style={{fontSize: '24px', color: '#7a66c7'}}/>  
          </a></li>
          <li><a href='https://twitter.com/Gaston_Artigau' target='_blank' rel='noopener noreferrer'>
          <BsTwitter style={{fontSize: '24px', color: '#7a66c7'}}/>  
          </a></li>
          <li><a href='https://www.linkedin.com/in/h%C3%A9ctor-gast%C3%B3n-artigau-47b686221/' target='_blank' rel='noopener noreferrer'>
          <BsLinkedin style={{fontSize: '24px', color: '#7a66c7'}}/> 
          </a></li>
          <li><a href='https://github.com/Gaston-Artigau' target='_blank' rel='noopener noreferrer'>
            <BsGithub style={{fontSize: '24px', color: '#7a66c7'}}/>  
          </a></li>
          <li><a href='https://www.google.com.ar/maps/place/Fullana+1172,+Pergamino,+Provincia+de+Buenos+Aires/' target='_blank' rel='noopener noreferrer'>
            <BiMap style={{fontSize: '24px', color: '#7a66c7'}}/>  
          </a></li>
        </ul>
      </FooterLinks>
    </FooterTemplate>
  )
}

export default Footer