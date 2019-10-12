import React from 'react';
import CityInfo from '../components/cityInfo/cityInfo';
import Header from '../components/header/header';
import SearchBar from '../components/searchBar/searchBar';
import SearchHistory from '../components/searchHistory/searchHistory';

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
        
        <div className="infoContainers" style={{ display: "flex", flexDirection: "row", flexBasis: 0}}>
          <div style={{flexBasis: 0}} className='col-12 md-6 mb-4'>
            <CityInfo />
          </div>
          <div className='col-12 md-6 mb-4'>
            <SearchHistory />
          </div>
        </div>

      </div>
    );
  }
}
