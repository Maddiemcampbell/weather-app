import React from 'react';

export default class CityInfo extends React.Component {
    render() {
        return (
            <div className='container'>
                <h1>City Info</h1>
                <h3>*City's Name Here*</h3>
                <h5>Latitude and Logitude: *City's Latitude and Longitude*</h5>
                <br />
                <div className='outputWrapper'>
                    <h4>Temperature (F)</h4>
                    <h5>*City's Temp Here*</h5>
                </div>
                <div className='outputWrapper'>
                    <h4>Pressure</h4>
                    <h5>*City's Pressure Index*</h5>
                </div>
                <div className='outputWrapper'>
                    <h4>Humidity</h4>
                    <h5>*City's Humidity Level*</h5>
                </div>
                <div className='outputWrapper'>
                    <h4>Lowest Temp (F)</h4>
                    <h5>*City's Low Temp Here*</h5>
                </div>
                <div className='outputWrapper'>
                    <h4>Highest Temp (F))</h4>
                    <h5>*City's High Temp Here*</h5>
                </div>
                <div className='outputWrapper'>
                    <h4>Wind Speed</h4>
                    <h5>*City's Wind Speed Here*</h5>
                </div>
            </div>
        );
    }
}