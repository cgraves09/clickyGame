import React from "react";
import './score.css'

const Score = props => (
        <div className="col-md-4 score">
            <div className="col-md-12">
                <h1 className='subHeader'>{props.status ? props.status : 'Don\'t click on the same character twice.' }</h1>
            </div>
            <hr className='lineBreak'/>
            <div className="col-md-12">
                <h2 className='subHeader'>Score: {props.score}</h2>
            </div>    
        </div>
);

export default Score;