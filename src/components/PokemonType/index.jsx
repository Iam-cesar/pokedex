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
  const { response } = usePokemon()
  const [pokemonType, setPokemonType] = useState([])

  useEffect(() => {
    setPokemonType(response.type)
  }, [response.type])

  function handleTypesIcons (type) {
    const typeList = {
      bug: {
        name: 'Inseto', type: bug, color: pokemonColorTypes.$bug
      },
      dark: {
        name: 'Noturno', type: dark, color: pokemonColorTypes.$dark
      },
      dragon: {
        name: 'Dragão', type: dragon, color: pokemonColorTypes.$dragon
      },
      electric: {
        name: 'Elétrico', type: electric, color: pokemonColorTypes.$electric
      },
      fairy: {
        name: 'Fada', type: fairy, color: pokemonColorTypes.$fairy
      },
      fighting: {
        name: 'Lutador', type: fighting, color: pokemonColorTypes.$figthing
      },
      fire: {
        name: 'Fogo', type: fire, color: pokemonColorTypes.$fire
      },
      flying: {
        name: 'Voador', type: flying, color: pokemonColorTypes.$flying
      },
      ghost: {
        name: 'Fantasma', type: ghost, color: pokemonColorTypes.$ghost
      },
      grass: {
        name: 'Grama', type: grass, color: pokemonColorTypes.$grass
      },
      ground: {
        name: 'Terrestre', type: ground, color: pokemonColorTypes.$ground
      },
      ice: {
        name: 'Gelo', type: ice, color: pokemonColorTypes.$ice
      },
      normal: {
        name: 'Normal', type: normal, color: pokemonColorTypes.$normal
      },
      poison: {
        name: 'Venenoso', type: poison, color: pokemonColorTypes.$poison
      },
      psychic: {
        name: 'Psiquico', type: psychic, color: pokemonColorTypes.$psychic
      },
      rock: {
        name: 'Pedra', type: rock, color: pokemonColorTypes.$rock
      },
      steel: {
        name: 'Aço', type: steel, color: pokemonColorTypes.$steel
      },
      water: {
        name: 'Agua', type: water, color: pokemonColorTypes.$water
      }
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
                src={pokemon.type}
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
