import React from 'react';
import './Card.css';
import { FaPlay } from 'react-icons/fa';

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="card-container">
        <img src={imageUrl} alt={`Portada de ${title}`} className="card-image" />
        <div className="card-info">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
        <div className="play-icon-container">
            <FaPlay className="play-icon" />
        </div>
        </div>
    );
};

export default Card;