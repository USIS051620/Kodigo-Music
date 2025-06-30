import React from 'react';
import Card from '../components/Card';
import { playlists } from '../data/mockData';
import './Library.css'; // Usaremos los mismos estilos de Home

const Library = () => {
    return (
        <div className="library-container">
        <h1 className="library-header">Tu Biblioteca</h1>
        <div className="card-grid">
            {/* Aquí mostramos todas las playlists como si fueran del usuario */}
            {playlists.map((playlist) => (
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