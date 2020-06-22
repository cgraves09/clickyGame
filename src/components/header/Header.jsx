import React from 'react';
import './header.css'

const Header = props => (
    <div className="jumbotron">
        <div className="row">
            <div className="col-md-4">
                <h1 className="logo">Clicky Game</h1>
                <h3 className="subLogo">Family Guy Edition</h3>
            </div>
            <div className="col-md-4">
                <h1>{props.status ? props.status : 'Welcome' }</h1>
            </div>
            <div className="col-md-4">
                <h1>Score: {props.score}</h1>
            </div>
        </div>
    </div>

)
   

    


export default Header;