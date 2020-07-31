import React from 'react';

import logo from '../../assets/img/logo.png' 
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
        <img src={logo} alt="Logo" />
      <p>
        Criado por <a href="https://www.linkedin.com/in/bruno-barbosa-35294718a/" target="_blank" rel="noopener noreferrer">Bruno Barbosa</a> 
       {' '} durante a Imersão React da Alura
      </p>
    </FooterBase>
  );
}

export default Footer;
