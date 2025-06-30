import React from 'react';
import Card from '../components/Card';
import { playlists } from '../data/mockData';
import './Home.css'; // Importa los nuevos estilos

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="welcome-header">Bienvenidos a Kodigo Music</h1>

      <section>
        <h2 className="section-title">Hecho para ti</h2>
        <div className="card-grid">
          {playlists.map((playlist) => (
            <Card
              key={playlist.id}
              title={playlist.title}
              description={playlist.description}
              imageUrl={playlist.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* Puedes agregar más secciones de la misma manera */}
      <section style={{ marginTop: '40px' }}>
        <h2 className="section-title">Escuchado recientemente</h2>
        <div className="card-grid">
          {/* Aquí podrías mostrar una lista diferente de playlists */}
          {playlists.slice(0, 4).map((playlist) => (
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