import React from 'react';

import Header from '../../components/Header'
import initialDatas from '../../data/initial_datas.json'
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer'

function Home() {
  return (

    <div style={{ background: "#141414" }}>
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
    </div>
  );
}

export default Home;
