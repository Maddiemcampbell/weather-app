import React from 'react';
import { city } from './searchActions';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      citySearch: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log('constructor finished')
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({citySearch: value});
  }
  
  handleSubmit() {
    const { dispatch } = this.props;
    console.log(this.state.citySearch, "handle Submit function working")
    dispatch(city(this.state.citySearch));
  }

  render() {
    console.log("about to render component")
    return (
      <div className='container' style={{marginLeft: 10}}>
        <label style={{fontSize: 20}}>Find Your City's Weather!</label>

        <div style={{display: "flex"}}>
          <input onChange={this.handleChange} value={this.state.city} style={{width: 600, marginRight: 40}} placeholder='type in your city here' className="input-group mb-3"></input>
          <button className='btn btn-info' onClick={this.handleSubmit}>Find the weather!</button>
        </div>
      </div>
    );
  }
}