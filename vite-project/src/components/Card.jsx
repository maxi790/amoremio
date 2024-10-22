import React from 'react';
import "./card.css";
const Card = ({title, description, image}) => {
    
    return (
        <div className="card">
            <img src={image} alt={title} />
            <div className="card-content">
                <h2 classname="card-title">{title}</h2>
               <p classname="card-description">{description}</p>
            </div>
        </div>
    );
};

 
export default Card;