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
import { pokemonColorTypes } from 'components/UI/colors'

export default (type) => {
  const typeList = {
    bug: { imageType: bug, color: pokemonColorTypes.$bug },
    dark: { imageType: dark, color: pokemonColorTypes.$dark },
    dragon: { imageType: dragon, color: pokemonColorTypes.$dragon },
    electric: { imageType: electric, color: pokemonColorTypes.$electric },
    fairy: { imageType: fairy, color: pokemonColorTypes.$fairy },
    fighting: { imageType: fighting, color: pokemonColorTypes.$figthing },
    fire: { imageType: fire, color: pokemonColorTypes.$fire },
    flying: { imageType: flying, color: pokemonColorTypes.$flying },
    ghost: { imageType: ghost, color: pokemonColorTypes.$ghost },
    grass: { imageType: grass, color: pokemonColorTypes.$grass },
    ground: { imageType: ground, color: pokemonColorTypes.$ground },
    ice: { imageType: ice, color: pokemonColorTypes.$ice },
    normal: { imageType: normal, color: pokemonColorTypes.$normal },
    poison: { imageType: poison, color: pokemonColorTypes.$poison },
    psychic: { imageType: psychic, color: pokemonColorTypes.$psychic },
    rock: { imageType: rock, color: pokemonColorTypes.$rock },
    steel: { imageType: steel, color: pokemonColorTypes.$steel },
    water: { imageType: water, color: pokemonColorTypes.$water }
  }
  return typeList[type]
}
