import { connect } from 'react-redux';
import CityInfo from './cityInfo';

function mapStoreToProps(store) {
    return{
        cityName: store.search.name,
        lat: store.search.lat,
        lon: store.search.lon,
        temp:store.search.temp,
        pressure: store.search.pressure,
        humidity: store.search.humidity,
        lowTemp: store.search.lowtemp,
        highTemp: store.search.highTemp,
        wind: store.search.wind,
    };
}

export default connect(mapStoreToProps)(CityInfo);