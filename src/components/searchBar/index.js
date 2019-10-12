import { connect } from 'react-redux';
import SearchBar from './searchBar';

function mapStoreToProps(store) {
    return {
        citySearch: store.search.citySearch,
        name: store.search.name,
        temp: store.search.temp,
        lat: store.search.lat,
        lon: store.search.lon,
        humidity: store.search.humidity,
        lowTemp: store.search.lowTemp,
        highTemp: store.search.highTemp,
        wind: store.search.wind,
        pressure: store.search.pressure,
        store: store.search.pressure
  };
}

export default connect(mapStoreToProps)(SearchBar);