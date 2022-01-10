import { useEffect, useState } from 'react';

export default function PokemonDetails({ url }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const requestPokemon = async () => {
      if (url) {
        const data = await fetch(url);
        const JSONData = await data.json();
        setPokemon(JSONData);
      } else {
        setPokemon(null);
      }
    };

    requestPokemon();
  }, [url]);

  if (pokemon) {
    return (
      <div>
        <img src={pokemon.sprites.front_default} alt="" />
        <p>{pokemon.name}</p>
        <p>Stats</p>
        {pokemon.stats.map((stat, idx) => (
          <div key={idx}>
            <p>
              {stat.stat.name} - {stat.base_stat}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
