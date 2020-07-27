import React from 'react';

import Logo from '../../assets/img/logo.png'
import Button from '../Button'
// import ButtonLink from './components/ButtonLink';

import './style.css'

function Menu(){
  return(
    <nav className="menu">
      <a href="/">
        <img className="logo" src={Logo} alt="Aluraflix logo" />
      </a>

      <Button as="a" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;