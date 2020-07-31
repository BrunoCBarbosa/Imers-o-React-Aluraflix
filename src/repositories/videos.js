import config from '../config'

const URL_VIDEOS = `${config.BASE_URL}/videos`

function create(videoObject){
 return fetch(`${URL_VIDEOS}?_embed=videos`, {
   method: 'POST',
   headers:{
     'Content-type': 'application/json'
   },
   body: JSON.stringify(videoObject)
 })
    .then(async (serverResponse) => {
      if(serverResponse.ok){
        const res = await serverResponse.json();
        return res;
      }

      throw new Error('Error to get datas.');
    });
}

export default {
  create
}