import React from 'react';
import './BrowseCard.css';

const BrowseCard = ({ title, color, imageUrl }) => {
    return (
        <div className="browse-card" style={{ backgroundColor: color }}>
        <h3 className="browse-card-title">{title}</h3>
        <img src={imageUrl} alt={title} className="browse-card-image" />
        </div>
    );
};

export default BrowseCard;