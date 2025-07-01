import React from 'react';
import './ArtistCard.css';

const ArtistCard = ({ name, imageUrl }) => {
  return (
    <div className="artist-card-container">
      <img src={imageUrl} alt={name} className="artist-image" />
      <h3 className="artist-name">{name}</h3>
      <p className="artist-label">Artista</p>
    </div>
  );
};

export default ArtistCard;