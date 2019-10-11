import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className='container'>
        <label>Find Your City's Weather!</label>
        <input placeholder='type in your city here' className="input-group mb-3"></input>
        <button className='btn btn-info'>Find the weather!</button>
      </div>
    );
  }
}