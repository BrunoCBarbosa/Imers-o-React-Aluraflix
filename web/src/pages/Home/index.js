import React from 'react';
import styled from 'styled-components'

import Header from '../../components/Header'
import initialDatas from '../../data/initial_datas.json'
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer'

const HomeWrapper = styled.div `
  background: var(--grayDark);
`;

function Home() {
  return (

    <HomeWrapper>
      <Header />

      <BannerMain
        videoTitle={initialDatas.categories[0].videos[3].title}
        url={initialDatas.categories[0].videos[3].url}
        videoDescription={"Para algumas pessoas, a língua japonesa parece ser tão complicada que fica difícil saber por onde começar. Aperte play que eu te mostro como fazer isso."} 
      />

      <Carousel 
        category={initialDatas.categories[0]}
      />
      <Carousel 
        category={initialDatas.categories[1]}
      />
      <Carousel 
        category={initialDatas.categories[2]}
      />
      <Carousel 
        category={initialDatas.categories[3]}
      />
      <Carousel 
        category={initialDatas.categories[4]}
      />
      
      <Footer />   
    </HomeWrapper>
  );
}

export default Home;
