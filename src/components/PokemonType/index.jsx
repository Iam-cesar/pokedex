import { PokemonTypeContainer } from './style'
import React, { useEffect, useState } from 'react'
import { usePokemon } from 'hooks/usePokemon'
import { pokemonColorTypes } from 'components/UI/colors'
import bug from 'assets/pokemonTypes/bug.png'
import dark from 'assets/pokemonTypes/dark.png'
import dragon from 'assets/pokemonTypes/dragon.png'
import electric from 'assets/pokemonTypes/electric.png'
import fairy from 'assets/pokemonTypes/fairy.png'
import fighting from 'assets/pokemonTypes/fighting.png'
import fire from 'assets/pokemonTypes/fire.png'
import flying from 'assets/pokemonTypes/flying.png'
import ghost from 'assets/pokemonTypes/ghost.png'
import grass from 'assets/pokemonTypes/grass.png'
import ground from 'assets/pokemonTypes/ground.png'
import ice from 'assets/pokemonTypes/ice.png'
import normal from 'assets/pokemonTypes/normal.png'
import poison from 'assets/pokemonTypes/poison.png'
import psychic from 'assets/pokemonTypes/psychic.png'
import rock from 'assets/pokemonTypes/rock.png'
import steel from 'assets/pokemonTypes/steel.png'
import water from 'assets/pokemonTypes/water.png'

function PokemonType () {
  const { pokemon } = usePokemon()
  const [pokemonType, setPokemonType] = useState([])

  useEffect(() => {
    setPokemonType(pokemon.type)
  }, [pokemon.type])

  function handleTypesIcons (type) {
    const typeList = {
      bug: { name: 'Inseto', imageType: bug, color: pokemonColorTypes.$bug },
      dark: { name: 'Noturno', imageType: dark, color: pokemonColorTypes.$dark },
      dragon: { name: 'Dragão', imageType: dragon, color: pokemonColorTypes.$dragon },
      electric: { name: 'Elétrico', imageType: electric, color: pokemonColorTypes.$electric },
      fairy: { name: 'Fada', imageType: fairy, color: pokemonColorTypes.$fairy },
      fighting: { name: 'Lutador', imageType: fighting, color: pokemonColorTypes.$figthing },
      fire: { name: 'Fogo', imageType: fire, color: pokemonColorTypes.$fire },
      flying: { name: 'Voador', imageType: flying, color: pokemonColorTypes.$flying },
      ghost: { name: 'Fantasma', imageType: ghost, color: pokemonColorTypes.$ghost },
      grass: { name: 'Grama', imageType: grass, color: pokemonColorTypes.$grass },
      ground: { name: 'Terrestre', imageType: ground, color: pokemonColorTypes.$ground },
      ice: { name: 'Gelo', imageType: ice, color: pokemonColorTypes.$ice },
      normal: { name: 'Normal', imageType: normal, color: pokemonColorTypes.$normal },
      poison: { name: 'Venenoso', imageType: poison, color: pokemonColorTypes.$poison },
      psychic: { name: 'Psiquico', imageType: psychic, color: pokemonColorTypes.$psychic },
      rock: { name: 'Pedra', imageType: rock, color: pokemonColorTypes.$rock },
      steel: { name: 'Aço', imageType: steel, color: pokemonColorTypes.$steel },
      water: { name: 'Agua', imageType: water, color: pokemonColorTypes.$water }
    }
    return typeList[type]
  }

  return (
    <PokemonTypeContainer>
      {pokemonType.map((item, index) => {
        const pokemon = handleTypesIcons(item.type.name)
        return (
          <div
            key={index}
            className={
              pokemonType.length === 2
                ? 'pokemon__type--double--container'
                : 'pokemon__type--container'
            }
            style={{
              backgroundColor: pokemon.color
            }}
          >
            <div >
              <img
                src={pokemon.imageType}
                alt={pokemon.name}
              />
              <p>{pokemon.name}</p>
            </div>
          </div>
        )
      })}
    </PokemonTypeContainer>
  )
}

export default PokemonType
