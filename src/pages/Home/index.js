import React, { useEffect, useState } from 'react';

import PageDefault from '../../components/PageDefault'
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import repositoryCategories from '../../repositories/categories'

function Home() {
  const [initialDatas, setInitialDatas] = useState([]);

  useEffect(() => {
    repositoryCategories.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInitialDatas(categoriesWithVideos)
      })
      .catch((err) => {
        console.log(err.message)
      },[])
  
  })


  return (

    <PageDefault paddingAll={0}>
      {initialDatas.length === 0 && (<div>Loading...</div>)}

      {initialDatas.map((category, index) => {
        if(index === 0){
          return(
            <div key={category.id}>
              <BannerMain
                videoTitle={initialDatas[0].videos[0].title}
                url={initialDatas[0].videos[0].url}
                videoDescription={"Para algumas pessoas, a língua japonesa parece ser tão complicada que fica difícil saber por onde começar. Aperte play que eu te mostro como fazer isso."} 
                />

                <Carousel 
                  category={initialDatas[0]}
                />
            </div>
          );
        }
        return(
          <Carousel
            key={category.id}
            category={category} 
          />
        )
      })}
    </PageDefault>
  );
}

export default Home;
