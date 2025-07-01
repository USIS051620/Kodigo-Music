import React from 'react';
import Card from '../components/Card';
import ArtistCard from '../components/ArtistCard'; // <-- Importa el nuevo componente
import { topHits, popularArtists, recentlyPlayed } from '../data/mockData'; // <-- Importa los nuevos datos
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="welcome-header">Bienvenidos a Kodigo Music</h1>

      {/* --- SECCIÓN HECHO PARA TI --- */}
      <section>
        <h2 className="section-title">Hecho para ti</h2>
        <div className="card-grid">
          {topHits.map((playlist) => (
            <Card
              key={playlist.id}
              title={playlist.title}
              description={playlist.description}
              imageUrl={playlist.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* --- NUEVA SECCIÓN: ARTISTAS POPULARES --- */}
      <section style={{ marginTop: '40px' }}>
        <h2 className="section-title">Artistas populares</h2>
        <div className="card-grid">
          {popularArtists.map((artist) => (
            <ArtistCard
              key={artist.id}
              name={artist.name}
              imageUrl={artist.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* --- SECCIÓN ESCUCHADO RECIENTEMENTE --- */}
      <section style={{ marginTop: '40px' }}>
        <h2 className="section-title">Escuchado recientemente</h2>
        <div className="card-grid">
          {recentlyPlayed.map((playlist) => (
            <Card
              key={playlist.id}
              title={playlist.title}
              description={playlist.description}
              imageUrl={playlist.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;