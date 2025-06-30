import React from 'react';
import BrowseCard from '../components/BrowseCard';
import './Search.css';

// Datos de muestra para las categorías
const categories = [
  { title: 'Podcasts', color: '#E13300', imageUrl: 'https://picsum.photos/seed/p1/200' },
  { title: 'Música Nueva', color: '#1E3264', imageUrl: 'https://picsum.photos/seed/p2/200' },
  { title: 'Charts', color: '#8D67AB', imageUrl: 'https://picsum.photos/seed/p3/200' },
  { title: 'Conciertos', color: '#E8115B', imageUrl: 'https://picsum.photos/seed/p4/200' },
  { title: 'Pop', color: '#148A08', imageUrl: 'https://picsum.photos/seed/p5/200' },
  { title: 'Rock', color: '#B49BC8', imageUrl: 'https://picsum.photos/seed/p6/200' }
];

const Search = () => {
  return (
    <div>
      <h1 style={{ fontSize: '28px' }}>Buscar</h1>
      <input
        type="text"
        placeholder="¿Qué quieres escuchar?"
        style={{
          width: '350px',
          padding: '12px',
          borderRadius: '25px',
          border: 'none',
          backgroundColor: '#282828',
          color: 'white',
          fontSize: '16px',
          marginTop: '10px'
        }}
      />
      <h2 style={{ marginTop: '30px' }}>Explorar todo</h2>
      <div className="search-page-grid">
        {categories.map((category) => (
          <BrowseCard
            key={category.title}
            title={category.title}
            color={category.color}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;