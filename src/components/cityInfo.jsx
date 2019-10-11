import React from 'react';

export default class CityInfo extends React.Component {
    render() {
        return (
             <div style={{marginTop: 20, width: 375, flexBasis: 0}} className="card">
                    <div className='info-card-title'>
                        <h1 className='title'>City Information</h1>
                    </div>
                    <div className='list-group-item'>
                        <div className='info'>Location:</div>
                    </div>
                    <div className='list-group-item'>
                        <div className='info'>Humidity: </div>
                    </div>
                    <div className='list-group-item'>
                        <div className='info'>Average temperature: </div>
                    </div>
                    <div className='list-group-item'>
                        <div className='info'>Low temperature:</div>
                    </div>
                    <div className='list-group-item'>
                        <div className='info'>High temperature: </div>
                    </div>
                    <div className='list-group-item'>
                        <div className='info'>Wind speed: </div>
                    </div>
                    <div className='list-group-item'>
                        <div className='info'>Air pressure: </div>
                    </div>
                </div> 
        );
    }
}