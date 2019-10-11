import React from 'react';
import CityInfo from '../components/cityInfo';
import Header from '../components/header';
import SearchBar from '../components/searchBar';
import SearchHistory from '../components/searchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <Header />
        </div>
        <div className='row'>
          <SearchBar />
        </div>
        <div className='col-12 md-6 mb-4'>
          <CityInfo />
        </div>
        <div className='col-12 md-6 mb-4'>
          <SearchHistory />
        </div>
      </div>
    );
  }
}
