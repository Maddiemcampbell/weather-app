import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className='container' style={{marginLeft: 10}}>
        <label style={{fontSize: 20}}>Find Your City's Weather!</label>

        <div style={{display: "flex"}}>
          <input style={{width: 600, marginRight: 40}} placeholder='type in your city here' className="input-group mb-3"></input>
          <button className='btn btn-info'>Find the weather!</button>
        </div>
      </div>
    );
  }
}