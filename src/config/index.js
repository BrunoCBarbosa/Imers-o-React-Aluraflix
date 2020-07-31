const BASE_URL = window.location.hostname.includes('localhost') 
  ? 'http://localhost:3300'
  : 'https://nihonflix.herokuapp.com';

export default { BASE_URL };
