const defaultState = {
    name: '',
    temp: '',
    lat: '',
    lon: '',
    humidity: '',
    lowTemp: '',
    highTemp: '',
    wind: '',
    pressure: '',
    citySearch: '',
    history: [],
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;
  
  switch (type) {
    case 'CITY':
      return {
        ...state,
        citySearch: payload.citySearch
      };

      case 'GET_WEATHER_FULFILLED': {
        return {
          ...state,
          name: payload.data.name,
          temp: payload.data.main.temp,
          lat: payload.data.coord.lat,
          lon: payload.data.coord.lon,
          humidity:payload.data.main.humidity,
          lowTemp: payload.data.main.temp_min,
          highTemp: payload.data.main.temp_max,
          wind: payload.data.wind.speed,
          pressure:payload.data.main.pressure,
          history: [...state.history,{
            cities: payload.data.name,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
          }
          ]
        };
      }
  }

  return state;
}
