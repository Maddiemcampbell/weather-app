import { connect } from 'react-redux';
import SearchHistory from './searchHistory';

function mapStoreToProps(store) {
    return{
        history: store.search.history 
    };
}

export default connect(mapStoreToProps)(SearchHistory);