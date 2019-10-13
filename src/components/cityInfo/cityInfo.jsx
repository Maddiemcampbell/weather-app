import React from 'react';

export default class CityInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { name, temp, lat, lon, humidity, lowTemp, highTemp, wind, pressure } = this.props;
        return (
             <div style={{marginTop: 20, width: 375, flexBasis: 0}} className="card border-info mb-3 card">
                    <div className='card-header'>
                        <h1 className='title'>{name}</h1>
                    </div>
                    <div className='list-group-item card-body text-info'>
                        <div className='info'>Location: {lat}{lon}</div>
                    </div>
                    <div className='list-group-item card-body text-info'>
                        <div className='info'>Humidity: {humidity}</div>
                    </div>
                    <div className='list-group-item card-body text-info'>
                        <div className='info'>Temperature: {temp}</div>
                    </div>
                    <div className='list-group-item card-body text-info'>
                        <div className='info'>Low temperature: {lowTemp}</div>
                    </div>
                    <div className='list-group-item card-body text-info'>
                        <div className='info'>High temperature: {highTemp}</div>
                    </div>
                    <div className='list-group-item card-body text-info'>
                        <div className='info'>Wind speed: {wind}</div>
                    </div>
                    <div className='list-group-item card-body text-info'>
                        <div className='info'>Air pressure: {pressure}</div>
                    </div>
                </div> 
        );
    }
}