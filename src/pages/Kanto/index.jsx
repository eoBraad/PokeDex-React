import { useState, useEffect } from 'react';
import './style.css';
import { getPokes } from '../../services/pokeApi.js';
import { getElement } from '../../services/getElement.js';
import { Navigation } from '../../components/Header';

export function Kanto() {
  const [pokes, setPokes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPokes(1, 151, setPokes, setLoading);
    document.title = 'Pokedex | Kanto';
  }, []);

  return (
    <div className="container">
      <Navigation />
      <div className="tittle-container">
        <h1 className="tittle">Pokedex Kanto</h1>
      </div>
      <ul className="poke-container">
        {loading ? (
          <h1>Carregando...</h1>
        ) : (
          pokes.map((item) => (
            <li
              key={item.data.id}
              className="pokename"
              style={{
                backgroundColor: getElement(item.data.types[0].type.name),
              }}
            >
              <div>
                <img
                  src={item.data.sprites.front_default}
                  alt={item.data.name}
                />
                <span>{item.data.id}</span>
              </div>
              <h1>{item.data.name}</h1>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
