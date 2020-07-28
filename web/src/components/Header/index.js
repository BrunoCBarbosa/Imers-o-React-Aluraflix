import React from 'react';
import { Link } from 'react-router-dom'

import logoImage from '../../assets/img/logo.png'
import Button from '../Button'
import './style.css'

function Header(){
  return(
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logoImage} alt="Aluraflix logo" />
      </Link>

      <Button as={Link} to="/register/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Header;