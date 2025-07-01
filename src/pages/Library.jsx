import React from 'react';
import Card from '../components/Card';
import { topHits } from '../data/mockData'; // <-- CAMBIO 1: Nombre de la importación
import './Library.css';

const Library = () => {
  return (
    <div className="library-container">
      <h1 className="library-header">Tu Biblioteca</h1>
      <div className="card-grid">
        {/* CAMBIO 2: Usamos topHits en lugar de playlists */}
        {topHits.map((playlist) => (
          <Card
            key={playlist.id}
            title={playlist.title}
            description={playlist.description}
            imageUrl={playlist.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;