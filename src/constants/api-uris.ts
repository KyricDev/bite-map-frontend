// const apiUri = 'http://localhost:3000/api';
const apiUri =  window.location.hostname === 'localhost' ? 'http://localhost:3000/api' : 'https://bite-map-backend.onrender.com/api';
export const searchUri = `${apiUri}/execute`;
export const testUri = `${apiUri}/test`;