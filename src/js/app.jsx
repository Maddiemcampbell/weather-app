import React from 'react';
import CityInfo from '../components/cityInfo';
import Header from '../components/header';
import SearchBar from '../components/searchBar';
import SearchHistory from '../components/searchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <SearchBar />
        <CityInfo />
        <SearchHistory />
      </div>
    );
  }
}
