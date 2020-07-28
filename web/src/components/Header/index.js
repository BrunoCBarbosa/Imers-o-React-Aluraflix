import React from 'react';

import logoImage from '../../assets/img/logo.png'
import Button from '../Button'
import { Logo, Menu } from './style'

function Header(){
  return(
    <Menu>
      <a href="/">
        <Logo className="logo" src={logoImage} alt="Aluraflix logo" />
      </a>

      <Button as="a" href="/">
        Novo vídeo
      </Button>
    </Menu>
  );
}

export default Header;