const axios = require('axios');

export function getWeather(citySearch) {
  return {
    type: 'GET_WEATHER',
    payload: axios.get(`/search/${ citySearch }`),
  }
}

export function city(citySearch) {
  return {
    type: 'CITY',
    payload: {
      citySearch
    }
  }
}
