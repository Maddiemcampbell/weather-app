import React from 'react';
import { getWeather, city } from './searchActions';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.handleGetWeather = this.handleGetWeather.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  handleName(event) {
    const { dispatch } = this.props;
    const { value } = event.target
    
    dispatch(city(value));
  }

  handleGetWeather(event){
    event.preventDefault();
    const { dispatch, citySearch } = this.props;
    
    dispatch(getWeather(citySearch));
    console.log('handle Button working')
  }


  render() {
    const { citySearch } = this.props;
    return (
      <div className='container' style={{marginLeft: 10}}>
        <label style={{fontSize: 20}}>Find Your City's Weather!</label>

        <div style={{display: "flex"}}>
          <input onChange={this.handleName} 
            value={citySearch} 
            style={{width: 600, marginRight: 40}} 
            placeholder='type in your city here' 
            className="input-group mb-3">
          </input>
          <button className='btn btn-info' 
            onClick={this.handleGetWeather}>
            Find the weather!
          </button>
        </div>
      </div>
    );
  }
}