import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PokemonDetails from './PokemonDetails';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState('');

  useEffect(() => {
    const requestPokemon = async () => {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
      setPokemons(data.results);
    };

    requestPokemon();
  }, []);

  return (
    <div className="App">
      <PokemonDetails url={pokemonDetail} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        {pokemons.map((pokemon, idx) => (
          <div
            key={idx + pokemon.name}
            style={{ width: '200px', height: '250px' }}
          >
            <p>{pokemon.name}</p>
            <button onClick={() => setPokemonDetail(pokemon.url)}>
              See details &gt;&gt;&gt;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
