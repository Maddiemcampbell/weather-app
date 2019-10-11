import React from 'react';

export default class CityInfo extends React.Component {
    render() {
        return (
             <div style={{marginTop: 20, width: 375, flexBasis: 0}} className="card border-info mb-3 card">
                    <div className='card-header'>
                        <h1 className='title'>City Information</h1>
                    </div>
                    <div className='list-group-item card-body text-info'>
                        <div className='info'>Location:</div>
                    </div>
                    <div className='list-group-item card-body text-info'>
                        <div className='info'>Humidity: </div>
                    </div>
                    <div className='list-group-item card-body text-info'>
                        <div className='info'>Average temperature: </div>
                    </div>
                    <div className='list-group-item card-body text-info'>
                        <div className='info'>Low temperature:</div>
                    </div>
                    <div className='list-group-item card-body text-info'>
                        <div className='info'>High temperature: </div>
                    </div>
                    <div className='list-group-item card-body text-info'>
                        <div className='info'>Wind speed: </div>
                    </div>
                    <div className='list-group-item card-body text-info'>
                        <div className='info'>Air pressure: </div>
                    </div>
                </div> 
        );
    }
}