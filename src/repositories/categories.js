import config from '../config'

const URL_CATEGORIES = `${config.BASE_URL}/categories`

function getAll(){
  return fetch(URL_CATEGORIES)
     .then(async (serverResponse) => {
       if(serverResponse.ok){
         const res = await serverResponse.json();
         return res;
       }
 
       throw new Error('Error to get datas.');
     });
 }


function getAllWithVideos(){
 return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (serverResponse) => {
      if(serverResponse.ok){
        const res = await serverResponse.json();
        return res;
      }

      throw new Error('Error to get datas.');
    });
}

export default {
  getAll,
  getAllWithVideos
}