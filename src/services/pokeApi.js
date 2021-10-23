import axios from 'axios'

export const searchPokes = async (pokeRef) => {
  const res = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeRef}`);
  return res;
};

export const getPokes = async (initialPoke, maxPoke, initialState, loadingState) => {
  const pokesArray = [];

  for (let i = initialPoke; i <= maxPoke; i++) {
    pokesArray.push(await searchPokes(i));
  }

  initialState(pokesArray);
  loadingState(false);
};


