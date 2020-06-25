import React from 'react';
import './subHeader.css';
const SubHeader = props => (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-6">
                <h1 className="logo">Clicky Game</h1>
            </div>
            <div className="col-md-6">
                <h2 className='directions'>Start the game by clicking on a Character.</h2>
                <hr className="lineBreak"/>
            </div>
        </div>           
    </div>
)

export default SubHeader;