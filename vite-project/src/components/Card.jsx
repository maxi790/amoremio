import React from 'react';
import "./card.css";
const Card = ({title, description, image}) => {
    
    return (
        <div className="card">
            <img src={image} alt={title} />
            <div className="card-content">
              
               
            </div>
        </div>
    );
};

 
export default Card;