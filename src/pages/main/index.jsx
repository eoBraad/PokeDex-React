import { useState } from 'react';
import { Navigation } from '../../components/Header';
import axios from 'axios';
import { Container, PokemonContainer } from './style';
import { getElement } from '../../services/getElement';

export function Home() {
  const [inputValue, setInputValue] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getPokemon() {
    const toArray = [];
    setLoading(true);
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${inputValue}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemon(toArray);
    } catch (e) {
      setCheck(!check);
    }
    setLoading(false);
  }

  function handleSearchPoke(evt) {
    evt.preventDefault();

    setPokemon([]);
    if (inputValue.trim() === '') {
      setCheck(!check);
    } else {
      getPokemon();
      if (check) {
        setCheck(!check);
      }
    }
    setInputValue('');
  }

  return (
    <div>
      <Navigation />
      <Container>
        <h1>Search Pokemon</h1>
        <form onSubmit={handleSearchPoke}>
          <input
            type="text"
            placeholder="Search a Pokemon"
            onChange={(event) =>
              setInputValue(event.target.value.toLowerCase())
            }
            value={inputValue}
          />
          <button type="submit">Search</button>
        </form>
        {loading ? (
          <h1>Carrengado...</h1>
        ) : (
          <PokemonContainer>
            {check ? (
              <h1 className="error-tittle">
                Pokemon Não encontrado por favor insira um pokemon valido.
              </h1>
            ) : (
              <ul>
                {pokemon.map((item) => (
                  <li
                    key={item.id}
                    style={{
                      backgroundColor: getElement(item.types[0].type.name),
                    }}
                  >
                    <strong># {item.id}</strong>
                    <img src={item.sprites.front_default} alt={item.name} />
                    <h1>{item.name}</h1>
                    <p className="description-info">abilities:</p>
                    <p className="info">{item.abilities[0].ability.name}</p>
                    {item.abilities.length === 2 ? (
                      <p className="info">{item.abilities[1].ability.name}</p>
                    ) : (
                      ''
                    )}
                    <p className="description-info">weight:</p>
                    <p className="info"> {item.weight}</p>
                    <p className="description-info">types:</p>
                    <p className="info">{item.types[0].type.name}</p>
                    {item.types.length === 2 ? (
                      <p className="info">{item.types[1].type.name}</p>
                    ) : (
                      ''
                    )}
                  </li>
                ))}
              </ul>
            )}
          </PokemonContainer>
        )}
      </Container>
    </div>
  );
}
