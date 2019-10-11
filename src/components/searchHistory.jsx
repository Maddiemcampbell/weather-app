import React from 'react';

export default class SearchHistory extends React.Component {
    render() {
        return (
            <div style={{marginTop: 20, marginRight: 0, width: 375, flexBasis: 0}} className="card">
                <div className='info-card-title'>
                    <h1 className='title'>Search Information</h1>
                </div>
                <div className='list-group-item'>
                    <div className='info'>*City*</div>
                </div>
                <div className='list-group-item'>
                    <div className='info'>*City*</div>
                </div>
                <div className='list-group-item'>
                    <div className='info'>*City*</div>
                </div>
                <div className='list-group-item'>
                    <div className='info'>*City*</div>
                </div>
                <div className='list-group-item'>
                    <div className='info'>*City*</div>
                </div>
            </div>
        );
    }
}