import React from 'react';

export default class SearchHistory extends React.Component {
    render() {
        return (
            <div style={{marginTop: 20, marginRight: 0, width: 375, flexBasis: 0}} className="card border-info mb-3 card">
                <div className='card-header'>
                    <h1 className='title'>Search Information</h1>
                </div>
                <div className='list-group-item card-body text-info'>
                    <div className='info'>*City*</div>
                </div>
                <div className='list-group-item card-body text-info'>
                    <div className='info'>*City*</div>
                </div>
                <div className='list-group-item card-body text-info'>
                    <div className='info'>*City*</div>
                </div>
                <div className='list-group-item card-body text-info'>
                    <div className='info'>*City*</div>
                </div>
                <div className='list-group-item card-body text-info'>
                    <div className='info'>*City*</div>
                </div>
            </div>
        );
    }
}