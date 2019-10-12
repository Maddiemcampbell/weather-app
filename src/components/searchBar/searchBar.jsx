import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      city: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ city: e.target.value });
  }

  handleSubmit() {
    console.log(this.state.city, "handle Submit function working")
  }

  render() {
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