import React from "react";
import "./results.css";

const Results = props => (
        <div className="col-md-4 images">
                <img alt={props.name} src={props.image} id={props.id}
                    onClick={() => props.shuffleImages(props.id)} className='img-thumbnail'/>       
        </div>
);

export default Results;