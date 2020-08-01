import React from 'react';

import Header from '../Header'
import Footer from '../Footer'

import { Main } from './style'


function PageDefault({ children, paddingAll }){
  return (
    <>
      <Header />
       <Main paddingAll={paddingAll}>
        {children}
       </Main>
      <Footer />
    </>
  )
}

export default PageDefault;